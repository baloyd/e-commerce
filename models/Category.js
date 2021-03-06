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
    category_name:{
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
