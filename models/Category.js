const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    id:{
    allowNull: false,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey:true,
  },
    shirts:{
      allowNull: false,
      type: DataTypes.STRING
    },
    shorts:{
      allowNull: false,
      type: DataTypes.STRING
    },
    music:{
      allowNull: false,
      type: DataTypes.STRING
    },
    hats:{
      allowNull: false,
      type: DataTypes.STRING
    },
    shoes:{
      allowNull: false,
      type: DataTypes.STRING
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
