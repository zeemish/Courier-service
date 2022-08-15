const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../../util/db.js");

const OtherItem = sequelize.define("otherItem", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true,
    default: "",
  },
  numOfItem: {
    type: DataTypes.INTEGER,
    allowNull: true,
    default: 0,
  },
  weight: {
    type: DataTypes.FLOAT,
    allowNull: true,
    default: 0,
  },
});

module.exports = OtherItem;
