-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create enum types
CREATE TYPE user_role AS ENUM ('nutritionist', 'client');
CREATE TYPE appointment_status AS ENUM ('scheduled', 'completed', 'cancelled', 'no_show');
CREATE TYPE message_status AS ENUM ('sent', 'delivered', 'read');
CREATE TYPE meal_plan_status AS ENUM ('active', 'completed', 'paused');

-- Create profiles table
CREATE TABLE profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT NOT NULL,
  role user_role NOT NULL DEFAULT 'client',
  phone TEXT,
  date_of_birth DATE,
  gender TEXT,
  avatar_url TEXT,
  bio TEXT,
  specializations TEXT[], -- For nutritionists
  license_number TEXT, -- For nutritionists
  years_experience INTEGER, -- For nutritionists
  consultation_fee DECIMAL(10,2), -- For nutritionists
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create clients table (additional client-specific info)
CREATE TABLE clients (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  nutritionist_id UUID REFERENCES profiles(id) ON DELETE SET NULL,
  height DECIMAL(5,2), -- in cm
  weight DECIMAL(5,2), -- in kg
  activity_level TEXT,
  health_conditions TEXT[],
  allergies TEXT[],
  dietary_preferences TEXT[],
  goals TEXT[],
  emergency_contact_name TEXT,
  emergency_contact_phone TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create meal plans table
CREATE TABLE meal_plans (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  client_id UUID REFERENCES clients(id) ON DELETE CASCADE,
  nutritionist_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  start_date DATE NOT NULL,
  end_date DATE,
  status meal_plan_status DEFAULT 'active',
  daily_calories INTEGER,
  daily_protein DECIMAL(6,2),
  daily_carbs DECIMAL(6,2),
  daily_fats DECIMAL(6,2),
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create meal plan items table
CREATE TABLE meal_plan_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  meal_plan_id UUID REFERENCES meal_plans(id) ON DELETE CASCADE,
  day_of_week INTEGER NOT NULL CHECK (day_of_week >= 1 AND day_of_week <= 7),
  meal_type TEXT NOT NULL, -- breakfast, lunch, dinner, snack
  food_name TEXT NOT NULL,
  quantity DECIMAL(8,2),
  unit TEXT,
  calories DECIMAL(8,2),
  protein DECIMAL(6,2),
  carbs DECIMAL(6,2),
  fats DECIMAL(6,2),
  fiber DECIMAL(6,2),
  instructions TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create appointments table
CREATE TABLE appointments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  client_id UUID REFERENCES clients(id) ON DELETE CASCADE,
  nutritionist_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  appointment_date TIMESTAMP WITH TIME ZONE NOT NULL,
  duration_minutes INTEGER DEFAULT 60,
  status appointment_status DEFAULT 'scheduled',
  meeting_link TEXT,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create messages table
CREATE TABLE messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  sender_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  recipient_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  status message_status DEFAULT 'sent',
  attachment_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  read_at TIMESTAMP WITH TIME ZONE
);

-- Create progress tracking table
CREATE TABLE progress_entries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  client_id UUID REFERENCES clients(id) ON DELETE CASCADE,
  weight DECIMAL(5,2),
  body_fat_percentage DECIMAL(4,2),
  muscle_mass DECIMAL(5,2),
  measurements JSONB, -- Store various body measurements
  photos TEXT[], -- Array of photo URLs
  notes TEXT,
  recorded_date DATE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create food database table (Kenyan foods)
CREATE TABLE kenyan_foods (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  calories_per_100g DECIMAL(6,2),
  protein_per_100g DECIMAL(5,2),
  carbs_per_100g DECIMAL(5,2),
  fats_per_100g DECIMAL(5,2),
  fiber_per_100g DECIMAL(5,2),
  common_serving_size TEXT,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_profiles_role ON profiles(role);
CREATE INDEX idx_clients_nutritionist ON clients(nutritionist_id);
CREATE INDEX idx_meal_plans_client ON meal_plans(client_id);
CREATE INDEX idx_meal_plans_nutritionist ON meal_plans(nutritionist_id);
CREATE INDEX idx_appointments_client ON appointments(client_id);
CREATE INDEX idx_appointments_nutritionist ON appointments(nutritionist_id);
CREATE INDEX idx_appointments_date ON appointments(appointment_date);
CREATE INDEX idx_messages_sender ON messages(sender_id);
CREATE INDEX idx_messages_recipient ON messages(recipient_id);
CREATE INDEX idx_progress_client ON progress_entries(client_id);
CREATE INDEX idx_kenyan_foods_category ON kenyan_foods(category);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE meal_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE meal_plan_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE progress_entries ENABLE ROW LEVEL SECURITY;
ALTER TABLE kenyan_foods ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
-- Profiles: Users can read their own profile and nutritionists can read their clients' profiles
CREATE POLICY "Users can view own profile" ON profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON profiles FOR UPDATE USING (auth.uid() = id);

-- Clients: Users can read their own client record, nutritionists can read their clients
CREATE POLICY "Users can view own client record" ON clients FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Nutritionists can view their clients" ON clients FOR SELECT USING (
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'nutritionist' AND id = clients.nutritionist_id)
);
CREATE POLICY "Users can update own client record" ON clients FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Nutritionists can update their clients" ON clients FOR UPDATE USING (
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'nutritionist' AND id = clients.nutritionist_id)
);

-- Meal plans: Clients can view their own, nutritionists can view/manage their clients' meal plans
CREATE POLICY "Clients can view own meal plans" ON meal_plans FOR SELECT USING (
  EXISTS (SELECT 1 FROM clients WHERE id = meal_plans.client_id AND user_id = auth.uid())
);
CREATE POLICY "Nutritionists can view their clients' meal plans" ON meal_plans FOR SELECT USING (auth.uid() = nutritionist_id);
CREATE POLICY "Nutritionists can manage meal plans" ON meal_plans FOR ALL USING (auth.uid() = nutritionist_id);

-- Similar policies for other tables...
CREATE POLICY "Meal plan items access" ON meal_plan_items FOR ALL USING (
  EXISTS (
    SELECT 1 FROM meal_plans mp 
    WHERE mp.id = meal_plan_items.meal_plan_id 
    AND (mp.nutritionist_id = auth.uid() OR EXISTS (
      SELECT 1 FROM clients c WHERE c.id = mp.client_id AND c.user_id = auth.uid()
    ))
  )
);

-- Appointments policies
CREATE POLICY "Appointment access" ON appointments FOR ALL USING (
  auth.uid() = nutritionist_id OR EXISTS (
    SELECT 1 FROM clients WHERE id = appointments.client_id AND user_id = auth.uid()
  )
);

-- Messages policies
CREATE POLICY "Message access" ON messages FOR ALL USING (
  auth.uid() = sender_id OR auth.uid() = recipient_id
);

-- Progress entries policies
CREATE POLICY "Progress entries access" ON progress_entries FOR ALL USING (
  EXISTS (
    SELECT 1 FROM clients 
    WHERE id = progress_entries.client_id 
    AND (user_id = auth.uid() OR nutritionist_id = auth.uid())
  )
);

-- Kenyan foods: Read access for all authenticated users
CREATE POLICY "Authenticated users can view foods" ON kenyan_foods FOR SELECT TO authenticated USING (true);

-- Create function to handle new user registration
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, role)
  VALUES (NEW.id, NEW.email, COALESCE(NEW.raw_user_meta_data->>'full_name', ''), 'client');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for new user registration
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for updated_at
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON profiles FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_clients_updated_at BEFORE UPDATE ON clients FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_meal_plans_updated_at BEFORE UPDATE ON meal_plans FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_appointments_updated_at BEFORE UPDATE ON appointments FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
