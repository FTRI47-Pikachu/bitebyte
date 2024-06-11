// config/index.js
import { Sequelize, DataTypes } from 'sequelize';
import UserModel from './user.js';  // Adjust the path if necessary
import SnackModel from './snack.js';  // Adjust the path if necessary

// Database connection configuration
const sequelize = new Sequelize('bitebyte', 'postgres', 'bitepassword', {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres',
});

// Initialize models
const User = UserModel(sequelize, DataTypes);
const Snack = SnackModel(sequelize, DataTypes);

// Define associations
Snack.belongsTo(User, { foreignKey: 'user_id' });
User.hasMany(Snack, { foreignKey: 'user_id' });

// Export initialized models and sequelize instance
export { sequelize, User, Snack };
