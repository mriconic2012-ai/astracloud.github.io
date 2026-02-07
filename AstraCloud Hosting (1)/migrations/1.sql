
CREATE TABLE categories (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  description TEXT,
  icon TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE plans (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  category_id INTEGER NOT NULL,
  name TEXT NOT NULL,
  cpu TEXT NOT NULL,
  ram TEXT NOT NULL,
  storage TEXT NOT NULL,
  price_inr INTEGER NOT NULL,
  location TEXT DEFAULT 'India',
  is_popular BOOLEAN DEFAULT 0,
  gradient TEXT,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_plans_category_id ON plans(category_id);
CREATE INDEX idx_plans_display_order ON plans(display_order);

INSERT INTO categories (name, description, icon) VALUES
('Minecraft Hosting', 'Premium Minecraft server hosting with NVMe SSD storage and DDoS protection', 'Server'),
('VPS Hosting', 'Scalable virtual private servers with full root access', 'Cloud'),
('Web Hosting', 'Fast and reliable web hosting with free SSL certificates', 'Globe');

INSERT INTO plans (category_id, name, cpu, ram, storage, price_inr, is_popular, gradient, display_order) VALUES
(1, 'Iron Plan', '1 vCPU', '4GB', '15GB NVMe SSD', 120, 0, 'from-gray-500 to-gray-600', 1),
(1, 'Gold Plan', '2 vCPU', '6GB', '25GB NVMe SSD', 170, 1, 'from-yellow-500 to-amber-600', 2),
(1, 'Diamond Plan', '2 vCPU', '8GB', '40GB NVMe SSD', 280, 0, 'from-cyan-500 to-blue-600', 3),
(1, 'Emerald Plan', '3 vCPU', '12GB', '60GB NVMe SSD', 450, 0, 'from-emerald-500 to-green-600', 4),
(1, 'Obsidian Plan', '4 vCPU', '16GB', '80GB NVMe SSD', 630, 0, 'from-purple-500 to-indigo-600', 5),
(1, 'Bedrock Plan', '6 vCPU', '32GB', '120GB NVMe SSD', 1000, 0, 'from-orange-500 to-red-600', 6);
