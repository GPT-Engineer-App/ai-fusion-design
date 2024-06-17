CREATE TABLE navigation_content (
  id SERIAL PRIMARY KEY,
  link_name VARCHAR(255) NOT NULL,
  content TEXT NOT NULL
);

INSERT INTO navigation_content (link_name, content) VALUES
('Features', 'Features content goes here...'),
('Pricing', 'Pricing content goes here...'),
('Testimonials', 'Testimonials content goes here...'),
('Resources', 'Resources content goes here...'),
('Contact', 'Contact content goes here...');