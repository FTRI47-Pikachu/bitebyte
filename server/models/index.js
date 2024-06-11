import { Sequelize, DataTypes } from 'sequelize';
import UserModel from './user.js';

// Database connection configuration
const sequelize = new Sequelize('bitebyte', 'postgres', 'bitepassword', {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres',
});

// Initialize models
const User = UserModel(sequelize, DataTypes);

// Export initialized models and sequelize instance
export { sequelize, User };
