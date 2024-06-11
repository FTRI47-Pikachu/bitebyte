import { Sequelize, DataTypes } from 'sequelize';

// Database connection configuration
const sequelize = new Sequelize('bitebyte', 'postgres', 'bitepassword', {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres',
});

// Define a User model
const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
}, {
  tableName: 'users',
  timestamps: false,
});

// Function to test the database connection
const testConnection = async () => {
  try {
    // Connect to the database
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    // Sync the User model and query data
    await sequelize.sync();
    const users = await User.findAll();
    console.log('Users:', JSON.stringify(users, null, 2));
  } catch (err) {
    console.error('Unable to connect to the database:', err);
  } finally {
    // Close the database connection
    await sequelize.close();
  }
};

// Execute the test function
testConnection();

export { sequelize, User };
