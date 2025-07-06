-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create enum types
CREATE TYPE user_role AS ENUM ('nutritionist', 'client');
CREATE TYPE appointment_status AS ENUM ('scheduled', 'completed', 'cancelled', 'no_show');
CREATE TYPE message_status AS ENUM ('sent', 'delivered', 'read');
CREATE TYPE meal_plan_status AS ENUM ('draft', 'active', 'completed', 'paused');

-- Create profiles table (extends auth.users)
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

-- Create client profiles table (additional client-specific info)
CREATE TABLE client_profiles (
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
  client_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  nutritionist_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  start_date DATE NOT NULL,
  end_date DATE,
  status meal_plan_status DEFAULT 'draft',
  daily_calories INTEGER,
  daily_protein DECIMAL(6,2),
  daily_carbs DECIMAL(6,2),
  daily_fats DECIMAL(6,2),
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create appointments table
CREATE TABLE appointments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  client_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  nutritionist_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  scheduled_at TIMESTAMP WITH TIME ZONE NOT NULL,
  duration_minutes INTEGER DEFAULT 60,
  status appointment_status DEFAULT 'scheduled',
  type TEXT, -- 'consultation', 'follow-up', 'assessment'
  notes TEXT,
  meeting_link TEXT,
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

-- Create indexes for better performance
CREATE INDEX idx_profiles_role ON profiles(role);
CREATE INDEX idx_profiles_email ON profiles(email);
CREATE INDEX idx_client_profiles_user_id ON client_profiles(user_id);
CREATE INDEX idx_client_profiles_nutritionist_id ON client_profiles(nutritionist_id);
CREATE INDEX idx_meal_plans_client_id ON meal_plans(client_id);
CREATE INDEX idx_meal_plans_nutritionist_id ON meal_plans(nutritionist_id);
CREATE INDEX idx_meal_plans_status ON meal_plans(status);
CREATE INDEX idx_appointments_client_id ON appointments(client_id);
CREATE INDEX idx_appointments_nutritionist_id ON appointments(nutritionist_id);
CREATE INDEX idx_appointments_scheduled_at ON appointments(scheduled_at);
CREATE INDEX idx_appointments_status ON appointments(status);
CREATE INDEX idx_messages_sender_id ON messages(sender_id);
CREATE INDEX idx_messages_recipient_id ON messages(recipient_id);
CREATE INDEX idx_messages_created_at ON messages(created_at);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE client_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE meal_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for profiles
CREATE POLICY "Users can view own profile" ON profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Nutritionists can view client profiles" ON profiles FOR SELECT USING (
  role = 'client' AND EXISTS (
    SELECT 1 FROM client_profiles 
    WHERE user_id = profiles.id AND nutritionist_id = auth.uid()
  )
);

-- Create RLS policies for client_profiles
CREATE POLICY "Users can view own client profile" ON client_profiles FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can update own client profile" ON client_profiles FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own client profile" ON client_profiles FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Nutritionists can view their clients" ON client_profiles FOR SELECT USING (auth.uid() = nutritionist_id);
CREATE POLICY "Nutritionists can update their clients" ON client_profiles FOR UPDATE USING (auth.uid() = nutritionist_id);

-- Create RLS policies for meal_plans
CREATE POLICY "Clients can view own meal plans" ON meal_plans FOR SELECT USING (auth.uid() = client_id);
CREATE POLICY "Nutritionists can view their clients' meal plans" ON meal_plans FOR SELECT USING (auth.uid() = nutritionist_id);
CREATE POLICY "Nutritionists can manage meal plans" ON meal_plans FOR ALL USING (auth.uid() = nutritionist_id);

-- Create RLS policies for appointments
CREATE POLICY "Clients can view own appointments" ON appointments FOR SELECT USING (auth.uid() = client_id);
CREATE POLICY "Nutritionists can view their appointments" ON appointments FOR SELECT USING (auth.uid() = nutritionist_id);
CREATE POLICY "Nutritionists can manage appointments" ON appointments FOR ALL USING (auth.uid() = nutritionist_id);
CREATE POLICY "Clients can update their appointments" ON appointments FOR UPDATE USING (auth.uid() = client_id);

-- Create RLS policies for messages
CREATE POLICY "Users can view their messages" ON messages FOR SELECT USING (
  auth.uid() = sender_id OR auth.uid() = recipient_id
);
CREATE POLICY "Users can send messages" ON messages FOR INSERT WITH CHECK (auth.uid() = sender_id);
CREATE POLICY "Users can update their sent messages" ON messages FOR UPDATE USING (auth.uid() = sender_id);

-- Create function to handle new user registration
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, role)
  VALUES (
    NEW.id, 
    NEW.email, 
    COALESCE(NEW.raw_user_meta_data->>'full_name', ''), 
    COALESCE(NEW.raw_user_meta_data->>'role', 'client')::user_role
  );
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
CREATE TRIGGER update_client_profiles_updated_at BEFORE UPDATE ON client_profiles FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_meal_plans_updated_at BEFORE UPDATE ON meal_plans FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_appointments_updated_at BEFORE UPDATE ON appointments FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
