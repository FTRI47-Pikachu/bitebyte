import express from 'express';
import { sequelize, User, Snack } from './models/db.js'; 

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to parse JSON requests
app.use(express.json());

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
    const user = await User.findByPk(userId, {
      include: {
        model: Snack,
        as: 'snacks',
      },
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(user.snacks);
  } catch (error) {
    console.error('Error fetching snacks:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
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
