const { DataTypes, Sequelize } = require("sequelize");

const sequelize = require("../../../util/db");

const SummeryChargesCB = sequelize.define("summeryChargesCB", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },

  baseCubicFeet: {
    type: Sequelize.FLOAT,
    allowNull: true,
    default: 0,
  },

  chargesPerCB: {
    type: Sequelize.FLOAT,
    allowNull: true,
    default: 0,
  },

  totalChargesCB: {
    type: DataTypes.FLOAT,
    allowNull: true,
    default: 0,
  },

  cbAdditionalCharges1: {
    type: DataTypes.FLOAT,
    allowNull: true,
    default: 0,
  },

  cbAdditionalChargePerCB1: {
    type: DataTypes.FLOAT,
    allowNull: true,
    default: 0,
  },

  cbAdditionalChargeTotal1: {
    type: DataTypes.FLOAT,
    allowNull: true,
    default: 0,
  },

  cbAdditionalCharges2: {
    type: DataTypes.FLOAT,
    allowNull: true,
    default: 0,
  },

  cbAdditionalChargePerCB2: {
    type: DataTypes.FLOAT,
    allowNull: true,
    default: 0,
  },

  cbAdditionalChargeTotal2: {
    type: DataTypes.FLOAT,
    allowNull: true,
    default: 0,
  },
});

module.exports = SummeryChargesCB;
