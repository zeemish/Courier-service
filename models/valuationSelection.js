const { DataTypes } = require("sequelize");

const sequelize = require("../util/db");

const ValuationSelection = sequelize.define("valuationSelection", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    unique: true,
  },

  customerName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  orderNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pickupDate: {
    type: DataTypes.DATEONLY,
    allowNull: true,
    default: Date.now(),
  },
  op1ShipmentValue: {
    type: DataTypes.FLOAT,
    allowNull: true,
    default: 0,
  },
  op1Deductible: {
    type: DataTypes.FLOAT,
    allowNull: true,
    default: 0,
  },
  op1ValueProtection: {
    type: DataTypes.FLOAT,
    allowNull: true,
    default: 0,
  },
  op1CustomerSignature: {
    type: DataTypes.STRING,
    allowNull: true,
    default: null,
  },
  op1Date: {
    type: DataTypes.DATEONLY,
    allowNull: true,
    default: null,
  },

  op2CustomerInitials: {
    type: DataTypes.STRING,
    allowNull: true,
    default: null,
  },
  op2shipmentValue: {
    type: DataTypes.FLOAT,
    allowNull: true,
    default: 0,
  },
  op2EstimateOfCost: {
    type: DataTypes.FLOAT,
    allowNull: true,
    default: 0,
  },
  op2CustomerSignature: {
    type: DataTypes.STRING,
    allowNull: true,
    default: null,
  },
  op2Date: {
    type: DataTypes.DATEONLY,
    allowNull: true,
    default: null,
  },
});

module.exports = ValuationSelection;
