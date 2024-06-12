import express from 'express';
import multer from 'multer';
import aws from 'aws-sdk';
import { sequelize, User, Snack } from './models/db.js'; 
import session from 'express-session';
import dotenv from 'dotenv';
// Load environment variables from .env file
dotenv.config();


const app = express();
const upload = multer({ dest: 'uploads/' });
const PORT = 3001;

// Configure AWS S3
aws.config.update({
  accessKeyId: process.env.VITE_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.VITE_AWS_SECRET_ACCESS_KEY
  region: 'us-east-1', // Replace with your S3 bucket region
});

const s3 = new aws.S3();

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


app.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const file = req.file;
    const { otherInfo } = req.body;

    // Upload the file to S3
    const s3Params = {
      Bucket: 'bitebyte-ftri47',
      Key: `${Date.now()}_${file.originalname}`,
      Body: file.buffer,
      ContentType: file.mimetype,
    };

    const s3Response = await s3.upload(s3Params).promise();
    const imageUrl = s3Response.Location;

    // Save the image URL and other information to the database
    const snack = await Snack.create({
      user_id: 'test',
      name: 'test',
      photo_url: imageUrl,
      category: 'test',
      rating: 'test',
      comment: 'test',
      image: 'test',
    });

    res.send({ snack });
  } catch (err) {
    console.error('Error uploading file:', err);
    res.status(500).send('There was an error uploading your file.');
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
