import express from 'express';
import { sequelize, User } from './models/index.js'; // Ensure you import from the correct file

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to parse JSON requests
app.use(express.json());

// Define a route to test the database connection
app.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
    console.log(users)
  } catch (err) {
    res.status(500).send('Error retrieving users');
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

