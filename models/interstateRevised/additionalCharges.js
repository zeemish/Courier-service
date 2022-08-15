const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../../util/db.js");

const AdditionalCharge = sequelize.define("additionalCharge", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  newEstimate: {
    type: DataTypes.STRING,
    allowNull: true,
    default: 0,
  },
  estimateAmount: {
    type: DataTypes.STRING,
    allowNull: true,
    default: 0,
  },
  newPacking: {
    type: DataTypes.INTEGER,
    allowNull: true,
    default: 0,
  },
  fuelSurcharge: {
    type: DataTypes.INTEGER,
    allowNull: true,
    default: 0,
  },
  elevatorSurcharge: {
    type: DataTypes.INTEGER,
    allowNull: true,
    default: 0,
  },
  additionalService1: {
    type: DataTypes.INTEGER,
    allowNull: true,
    default: 0,
  },
  additionalService2: {
    type: DataTypes.INTEGER,
    allowNull: true,
    default: 0,
  },
  additionalService3: {
    type: DataTypes.INTEGER,
    allowNull: true,
    default: 0,
  },
  totalEstimate: {
    type: DataTypes.INTEGER,
    allowNull: true,
    default: 0,
  },
  priceAdjustment: {
    type: DataTypes.INTEGER,
    allowNull: true,
    default: 0,
  },
  adjustedBalance: {
    type: DataTypes.INTEGER,
    allowNull: true,
    default: 0,
  },
});

module.exports = AdditionalCharge;
