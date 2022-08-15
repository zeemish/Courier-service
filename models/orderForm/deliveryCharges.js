const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../../util/db");

const DeliveryCharges = sequelize.define("deliveryCharges", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  flightCarry: {
    type: DataTypes.INTEGER,
    allowNull: true,
    default: 0,
  },
  longCarry: {
    type: DataTypes.INTEGER,
    allowNull: true,
    default: 0,
  },
  shuttleService: {
    type: DataTypes.INTEGER,
    allowNull: true,
    default: 0,
  },
  elevatorService: {
    type: DataTypes.INTEGER,
    allowNull: true,
    default: 0,
  },
  reDelivery: {
    type: DataTypes.INTEGER,
    allowNull: true,
    default: 0,
  },
  waitingService: {
    type: DataTypes.INTEGER,
    allowNull: true,
    default: 0,
  },
  storageService: {
    type: DataTypes.INTEGER,
    allowNull: true,
    default: 0,
  },
});

module.exports = DeliveryCharges;
