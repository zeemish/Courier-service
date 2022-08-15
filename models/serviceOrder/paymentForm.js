const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../../util/db");

const PaymentForm = sequelize.define("payment", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },

  customerSign: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  totalCharges: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = PaymentForm;
