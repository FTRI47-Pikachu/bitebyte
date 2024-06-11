import { Sequelize } from 'sequelize';


const UserModel = (sequelize, DataTypes) => {
  return sequelize.define('User', {
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
};

export default UserModel;
