const { DataTypes } = require("sequelize");

const sequelize = require("../../util/db");

const Charge = sequelize.define("charge", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    unique: true,
  },

  otherChargesName1: {
    type: DataTypes.STRING,
  },
  otherChargesPrice1: {
    type: DataTypes.FLOAT,
  },
  otherChargesName2: {
    type: DataTypes.STRING,
  },
  otherChargesPrice2: {
    type: DataTypes.FLOAT,
  },
  otherChargesName3: {
    type: DataTypes.STRING,
  },
  otherChargesPrice3: {
    type: DataTypes.FLOAT,
  },
});

module.exports = Charge;
