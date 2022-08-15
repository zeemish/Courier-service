const { DataTypes } = require("sequelize");

const sequelize = require("../../../util/db");

const SummeryChargesWeight = sequelize.define("summeryChargesWeight", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },

  baseWeight: {
    type: DataTypes.FLOAT,
    allowNull: true,
    default: 0,
  },

  chargesPerLB: {
    type: DataTypes.FLOAT,
    allowNull: true,
    default: 0,
  },

  totalChargesWeight: {
    type: DataTypes.FLOAT,
    allowNull: true,
    default: 0,
  },

  weightAdditionalCharges1: {
    type: DataTypes.FLOAT,
    allowNull: true,
    default: 0,
  },

  weightAdditionalChargePerLB1: {
    type: DataTypes.FLOAT,
    allowNull: true,
    default: 0,
  },

  weightAdditionalChargeTotal1: {
    type: DataTypes.FLOAT,
    allowNull: true,
    default: 0,
  },

  weightAdditionalCharges2: {
    type: DataTypes.FLOAT,
    allowNull: true,
    default: 0,
  },

  weightAdditionalChargePerLB2: {
    type: DataTypes.FLOAT,
    allowNull: true,
    default: 0,
  },

  weightAdditionalChargeTotal2: {
    type: DataTypes.FLOAT,
    allowNull: true,
    default: 0,
  },
});

module.exports = SummeryChargesWeight;
