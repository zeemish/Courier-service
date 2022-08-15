const { DataTypes } = require("sequelize");

const sequelize = require("../../../util/db");

const SummeryOfCharges = sequelize.define("summeryOfCharges", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },

  grandTotal: {
    type: DataTypes.FLOAT,
  },

  partialPayment1: {
    type: DataTypes.FLOAT,
  },

  partialPayment2: {
    type: DataTypes.FLOAT,
  },

  Payment1: {
    type: DataTypes.FLOAT,
  },

  Payment2: {
    type: DataTypes.FLOAT,
  },

  dueBalance: {
    type: DataTypes.FLOAT,
  },

  dueBalance2: {
    type: DataTypes.FLOAT,
  },

  dueBalance3: {
    type: DataTypes.FLOAT,
  },
  priceAdjustment: {
    type: DataTypes.FLOAT,
  },
  newDueBalance: {
    type: DataTypes.FLOAT,
  },
});

module.exports = SummeryOfCharges;
