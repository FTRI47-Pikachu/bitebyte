import express from 'express';
import { sequelize, User, Snack } from './models/db.js'; 
import session from 'express-session';


const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to parse JSON requests
app.use(express.json());

// Configure session middleware
app.use(session({
  secret: 'bitepassword',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Set to true if using https
}));

// Define a route to test the database connection
app.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    res.status(500).send('Error retrieving users');
  }
});

// Define a route to get all snacks
app.get('/snacks', async (req, res) => {
  try {
    const snacks = await Snack.findAll();
    res.json(snacks);
  } catch (err) {
    res.status(500).send('Error retrieving snacks');
  }
});

// Define a route to get snacks for a particular user
app.get('/users/:userId/snacks', async (req, res) => {
  try {
    const { userId } = req.params;
    
    // Find the user by primary key and include associated snacks
    const user = await User.findByPk(userId, {
      include: {
        model: Snack,
        as: 'snacks',
      },
    });

    // If user not found, return a 404 error
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Return the user's snacks
    res.status(200).json({ snacks: user.snacks });
  } catch (error) {
    // Log the error and return a 500 status with an error message
    console.error('Error fetching user snacks:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


// Define a route to login a user
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { username } });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (user.password !== password) {
      return res.status(401).json({ error: 'Incorrect password' });
    }

    // Save user info in session
    req.session.userId = user.id;

    res.status(200).json({ message: 'Login successful', userId: user.id });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Define a route to sign up a user
app.post('/signup', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if the username already exists
    const existingUser = await User.findOne({ where: { username } });

    if (existingUser) {
      return res.status(409).json({ error: 'Username already taken' });
    }

    // Create a new user
    const newUser = await User.create({ username, password });

    res.status(200).json({ message: 'Signup successful', userId: newUser.id });
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Middleware to check if user is authenticated
const isAuthenticated = (req, res, next) => {
  if (req.session.userId) {
    return next();
  }
  res.status(401).json({ error: 'Unauthorized' });
};

// Define a protected route
app.get('/protected', isAuthenticated, (req, res) => {
  res.status(200).json({ message: 'This is a protected route' });
});

// Define a route to logout a user
app.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to logout' });
    }
    res.status(200).json({ message: 'Logout successful' });
  });
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Function to start the server
const startServer = async () => {
  try {
    // Connect to the database
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');

    // Sync the models
    await sequelize.sync();

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('Unable to connect to the database:', err);
  }
};

// Execute the startServer function
startServer();
