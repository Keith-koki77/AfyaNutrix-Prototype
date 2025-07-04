-- Insert sample food items
INSERT INTO public.food_items (name, category, calories_per_100g, protein_per_100g, carbs_per_100g, fats_per_100g, fiber_per_100g) VALUES
('Chicken Breast', 'Protein', 165, 31.0, 0.0, 3.6, 0.0),
('Brown Rice', 'Grains', 111, 2.6, 23.0, 0.9, 1.8),
('Broccoli', 'Vegetables', 34, 2.8, 7.0, 0.4, 2.6),
('Salmon', 'Protein', 208, 20.4, 0.0, 13.4, 0.0),
('Sweet Potato', 'Vegetables', 86, 1.6, 20.1, 0.1, 3.0),
('Spinach', 'Vegetables', 23, 2.9, 3.6, 0.4, 2.2),
('Quinoa', 'Grains', 120, 4.4, 21.3, 1.9, 2.8),
('Avocado', 'Fats', 160, 2.0, 8.5, 14.7, 6.7),
('Greek Yogurt', 'Dairy', 59, 10.0, 3.6, 0.4, 0.0),
('Almonds', 'Nuts', 579, 21.2, 21.6, 49.9, 12.5);

-- Insert sample nutritionist (you'll need to replace the UUID with actual user ID after registration)
-- This is just for reference - actual data will be inserted via the application
