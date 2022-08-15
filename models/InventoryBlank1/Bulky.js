const { DataTypes } = require("sequelize");

const sequelize = require("../../util/db");

const Bulky = sequelize.define("bulky", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    unique: true,
  },
  revised: {
    type: DataTypes.INTEGER,
  },
  bulkyName1: {
    type: DataTypes.STRING,
  },
  bulkyFee1: {
    type: DataTypes.INTEGER,
  },
  bulkyName2: {
    type: DataTypes.STRING,
  },
  bulkyFee2: {
    type: DataTypes.INTEGER,
  },
  bulkyName3: {
    type: DataTypes.STRING,
  },
  bulkyFee3: {
    type: DataTypes.INTEGER,
  },
  packingMaterial: {
    type: DataTypes.INTEGER,
  },
});

module.exports = Bulky;
