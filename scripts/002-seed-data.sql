-- Insert sample Kenyan foods
INSERT INTO kenyan_foods (name, category, calories_per_100g, protein_per_100g, carbs_per_100g, fats_per_100g, fiber_per_100g, common_serving_size, description) VALUES
-- Staples
('Ugali', 'Staples', 112, 2.4, 24.0, 0.4, 1.2, '1 cup (150g)', 'Traditional Kenyan cornmeal staple'),
('White Rice', 'Staples', 130, 2.7, 28.0, 0.3, 0.4, '1 cup cooked (150g)', 'Steamed white rice'),
('Chapati', 'Staples', 104, 3.1, 15.7, 3.7, 1.3, '1 piece (40g)', 'Kenyan flatbread'),
('Sweet Potato', 'Staples', 86, 1.6, 20.1, 0.1, 3.0, '1 medium (150g)', 'Boiled or roasted sweet potato'),
('Irish Potato', 'Staples', 77, 2.0, 17.0, 0.1, 2.2, '1 medium (150g)', 'Boiled Irish potato'),
('Cassava', 'Staples', 160, 1.4, 38.1, 0.3, 1.8, '1 cup (100g)', 'Boiled cassava root'),

-- Vegetables
('Sukuma Wiki (Kale)', 'Vegetables', 25, 2.9, 4.4, 0.4, 4.1, '1 cup (70g)', 'Traditional leafy green vegetable'),
('Spinach', 'Vegetables', 23, 2.9, 3.6, 0.4, 2.2, '1 cup (30g)', 'Fresh or cooked spinach'),
('Cabbage', 'Vegetables', 25, 1.3, 5.8, 0.1, 2.5, '1 cup (90g)', 'Raw or cooked cabbage'),
('Tomatoes', 'Vegetables', 18, 0.9, 3.9, 0.2, 1.2, '1 medium (120g)', 'Fresh tomatoes'),
('Onions', 'Vegetables', 40, 1.1, 9.3, 0.1, 1.7, '1 medium (110g)', 'Raw or cooked onions'),
('Carrots', 'Vegetables', 41, 0.9, 9.6, 0.2, 2.8, '1 medium (60g)', 'Raw or cooked carrots'),

-- Proteins
('Beans (Common)', 'Proteins', 245, 15.2, 45.0, 1.2, 15.2, '1 cup cooked (180g)', 'Cooked common beans'),
('Green Grams', 'Proteins', 347, 24.0, 59.0, 1.2, 16.3, '1 cup cooked (200g)', 'Cooked mung beans'),
('Lentils', 'Proteins', 230, 17.9, 40.0, 0.8, 15.6, '1 cup cooked (200g)', 'Cooked lentils'),
('Chicken Breast', 'Proteins', 165, 31.0, 0.0, 3.6, 0.0, '100g', 'Skinless chicken breast'),
('Beef (Lean)', 'Proteins', 250, 26.0, 0.0, 15.0, 0.0, '100g', 'Lean beef cuts'),
('Fish (Tilapia)', 'Proteins', 206, 26.0, 0.0, 2.7, 0.0, '100g', 'Fresh tilapia fish'),
('Eggs', 'Proteins', 155, 13.0, 1.1, 11.0, 0.0, '2 large eggs (100g)', 'Chicken eggs'),

-- Fruits
('Bananas', 'Fruits', 89, 1.1, 22.8, 0.3, 2.6, '1 medium (120g)', 'Ripe bananas'),
('Mangoes', 'Fruits', 60, 0.8, 15.0, 0.4, 1.6, '1 cup (165g)', 'Ripe mangoes'),
('Oranges', 'Fruits', 47, 0.9, 11.8, 0.1, 2.4, '1 medium (150g)', 'Fresh oranges'),
('Pineapple', 'Fruits', 50, 0.5, 13.1, 0.1, 1.4, '1 cup (165g)', 'Fresh pineapple'),
('Watermelon', 'Fruits', 30, 0.6, 7.6, 0.2, 0.4, '1 cup (150g)', 'Fresh watermelon'),
('Avocado', 'Fruits', 160, 2.0, 8.5, 14.7, 6.7, '1/2 medium (100g)', 'Fresh avocado'),

-- Dairy
('Milk (Whole)', 'Dairy', 61, 3.2, 4.8, 3.3, 0.0, '1 cup (240ml)', 'Fresh whole milk'),
('Yogurt (Plain)', 'Dairy', 59, 10.0, 3.6, 0.4, 0.0, '1 cup (240g)', 'Plain yogurt'),

-- Nuts and Seeds
('Groundnuts', 'Nuts & Seeds', 567, 25.8, 16.1, 49.2, 8.5, '30g (small handful)', 'Raw groundnuts/peanuts'),
('Sunflower Seeds', 'Nuts & Seeds', 584, 20.8, 20.0, 51.5, 8.6, '30g', 'Raw sunflower seeds'),

-- Beverages
('Tea (Black)', 'Beverages', 2, 0.0, 0.7, 0.0, 0.0, '1 cup (240ml)', 'Black tea without sugar'),
('Porridge (Millet)', 'Beverages', 119, 3.5, 23.0, 1.7, 1.3, '1 cup (240ml)', 'Millet porridge');
