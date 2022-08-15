const { DataTypes } = require("sequelize");

const sequelize = require("../../../util/db");

const SummeryChargesHourly = sequelize.define("summeryChargesHourly", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },

  startTime1: {
    type: DataTypes.TIME,
    // allowNull: false,
  },

  EndTime1: {
    type: DataTypes.TIME,
    // allowNull: false,
  },

  totalHours1: {
    type: DataTypes.TIME,
  },

  startTime2: {
    type: DataTypes.TIME,
    // allowNull: false,
    // default: 0,
  },

  EndTime2: {
    type: DataTypes.TIME,
    // allowNull: false,
    // default: 0,
  },

  totalHours2: {
    type: DataTypes.TIME,
  },

  hour1count: {
    type: DataTypes.TIME,
  },
  men1count: {
    type: DataTypes.INTEGER,
  },
  truck1count: {
    type: DataTypes.INTEGER,
  },
  totalMoney1perHour: {
    type: DataTypes.FLOAT,
  },
  totalFunds1: {
    type: DataTypes.FLOAT,
  },
  hour2count: {
    type: DataTypes.TIME,
  },
  men2count: {
    type: DataTypes.INTEGER,
  },
  truck2count: {
    type: DataTypes.INTEGER,
  },
  totalMoney2perHour: {
    type: DataTypes.FLOAT,
  },
  totalFunds2: {
    type: DataTypes.FLOAT,
  },
});

module.exports = SummeryChargesHourly;
