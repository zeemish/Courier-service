const { DataTypes } = require("sequelize");

const sequelize = require("../../util/db");

const Total = sequelize.define("total", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    unique: true,
  },

  estimated: {
    type: DataTypes.STRING,
  },
  rate: {
    type: DataTypes.FLOAT,
  },
  fuelSurcharge: {
    type: DataTypes.FLOAT,
  },
  bulky: {
    type: DataTypes.FLOAT,
  },
  amount: {
    type: DataTypes.FLOAT,
  },

  deposit: {
    type: DataTypes.FLOAT,
  },
  totalEstimatedCharges: {
    type: DataTypes.FLOAT,
  },
  ownedToday: {
    type: DataTypes.FLOAT,
  },
});

module.exports = Total;
