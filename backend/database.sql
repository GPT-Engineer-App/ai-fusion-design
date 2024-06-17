CREATE TABLE navigation (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  content TEXT NOT NULL
);

INSERT INTO navigation (name, content) VALUES
('Features', 'Features content here...'),
('Pricing', 'Pricing content here...'),
('Testimonials', 'Testimonials content here...'),
('Resources', 'Resources content here...'),
('Contact', 'Contact content here...');