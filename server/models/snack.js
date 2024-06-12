// server/models/snack.js
import { Model, DataTypes } from 'sequelize';

class Snack extends Model {}

const initializeSnackModel = (sequelize) => {
  Snack.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id',
      },
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    photo_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    image: {
      type: DataTypes.BLOB,
      allowNull: true,
    },
  }, {
    sequelize,
    modelName: 'Snack',
    tableName: 'snacks',
    timestamps: false,
  });

  return Snack;
};

export default initializeSnackModel;


