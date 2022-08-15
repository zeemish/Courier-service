const { DataTypes } = require("sequelize");

const sequelize = require("../../util/db");

const Receipt = sequelize.define("receipt", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    unique: true,
  },

  dateIssued: {
    type: DataTypes.DATEONLY,
    allowNull: true,
    defaultValue: new Date(),
  },

  jobNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  accountNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  storageCharge: {
    type: DataTypes.FLOAT,
    allowNull: true,
    default: 0,
  },
  daysFromDateOfIssue: {
    type: DataTypes.FLOAT,
    allowNull: true,
    default: 0,
  },
});

module.exports = Receipt;
