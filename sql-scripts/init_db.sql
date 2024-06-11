-- Create a new table called "users" in the "bitebyte" database
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(100) NOT NULL,
    "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create a new table called "snacks" in the "bitebyte" database
CREATE TABLE snacks (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    name VARCHAR(50) NOT NULL,
    photo_url VARCHAR(255),
    category VARCHAR(50) NOT NULL,
    rating FLOAT,
    comment TEXT,
    image BYTEA,
    CONSTRAINT fk_user
      FOREIGN KEY(user_id) 
      REFERENCES users(id)
);

-- Insert some initial data into the "users" table
INSERT INTO users (username, password) VALUES
('alice', 'alicepassword'),
('bob', 'bobpassword');

-- Insert some initial data into the "snacks" table
INSERT INTO snacks (user_id, name, photo_url, category, rating, comment, image) VALUES
((SELECT id FROM users WHERE username='alice'), 'Bare Crunchy Cinnamon Apple Chips', 'https://bitebyte-ftri47.s3.amazonaws.com/BareCrunchyCinnamonAppleChips.jpeg', 'Healthy', 4.5, 'Crispy and tasty', NULL),
((SELECT id FROM users WHERE username='alice'), 'Cracker Jack Caramel Coated Popcorn And Peanuts', 'https://bitebyte-ftri47.s3.amazonaws.com/CrackerJackCaramelCoatedPopcornAndPeanuts.jpeg', 'Salty', 5.0, 'Rich and creamy', NULL),
((SELECT id FROM users WHERE username='alice'), 'Doritos Hot Mustard Flavored Tortilla Chips', 'https://bitebyte-ftri47.s3.amazonaws.com/DoritosHotMustardFlavoredTortillaChips.jpeg', 'Salty', 4.0, 'Great for movies', NULL),
((SELECT id FROM users WHERE username='alice'), 'Ginger Snap Cookies', 'https://bitebyte-ftri47.s3.amazonaws.com/GingerSnapCookies.jpg', 'Sweet', 4.2, 'Perfect for a snack', NULL),
((SELECT id FROM users WHERE username='bob'), 'Lays Wavy Cuban Sandwich Flavored Potato Chips', 'https://bitebyte-ftri47.s3.amazonaws.com/LaysWavyCubanSandwichFlavoredPotatoChips.jpeg', 'Salty', 4.1, 'Crunchy and salty', NULL),
((SELECT id FROM users WHERE username='bob'), 'Roasted Cashews Salted', 'https://bitebyte-ftri47.s3.amazonaws.com/RoastedCashewsSalted.webp', 'Healthy', 4.3, 'Sugary and colorful', NULL),
((SELECT id FROM users WHERE username='bob'), 'Rold Gold Original Pretzels Thins', 'https://bitebyte-ftri47.s3.amazonaws.com/RoldGoldOriginalPretzelsThins.jpeg', 'Salty', 4.7, 'Nutritious and filling', NULL),
((SELECT id FROM users WHERE username='bob'), 'Sabritas Chile Lime Peanuts', 'https://bitebyte-ftri47.s3.amazonaws.com/SabritasChileLimePeanuts.jpeg', 'Salty', 5.0, 'Cold and creamy', NULL);
