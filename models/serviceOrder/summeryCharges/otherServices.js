const { DataTypes } = require("sequelize");

const sequelize = require("../../../util/db");

const OtherServices = sequelize.define("otherServices", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },

  fuelSurcharge: {
    type: DataTypes.FLOAT,
    allowNull: true,
    default: 0,
  },
  totalFuelSurcharge: {
    type: DataTypes.FLOAT,
    allowNull: true,
    default: 0,
  },

  stairsOrigin: {
    type: DataTypes.FLOAT,
    allowNull: true,
    default: 0,
  },
  stairsDestinatin: {
    type: DataTypes.FLOAT,
    allowNull: true,
    default: 0,
  },
  totalStairCharges: {
    type: DataTypes.FLOAT,
    allowNull: true,
    default: 0,
  },

  longCarryOrigin: {
    type: DataTypes.FLOAT,
    allowNull: true,
    default: 0,
  },
  longCarryDestination: {
    type: DataTypes.FLOAT,
    allowNull: true,
    default: 0,
  },
  totalLongCarryCharges: {
    type: DataTypes.FLOAT,
    allowNull: true,
    default: 0,
  },
  shuttleOrigin: {
    type: DataTypes.FLOAT,
    allowNull: true,
    default: 0,
  },
  shuttleDestination: {
    type: DataTypes.FLOAT,
    allowNull: true,
    default: 0,
  },
  totalShuttleCharges: {
    type: DataTypes.FLOAT,
    allowNull: true,
    default: 0,
  },
  elevatorFee: {
    type: DataTypes.FLOAT,
    allowNull: true,
    default: 0,
  },

  bulkyItem: {
    type: DataTypes.FLOAT,
    allowNull: true,
    default: 0,
  },

  extraStopOff: {
    type: DataTypes.FLOAT,
    allowNull: true,
    default: 0,
  },
  valuation: {
    type: DataTypes.FLOAT,
    allowNull: true,
    default: 0,
  },
  other1: {
    type: DataTypes.FLOAT,
    allowNull: true,
    default: 0,
  },

  other2: {
    type: DataTypes.FLOAT,
    allowNull: true,
    default: 0,
  },

  other3: {
    type: DataTypes.FLOAT,
    allowNull: true,
    default: 0,
  },
});

module.exports = OtherServices;
