const { DataTypes, Sequelize } = require("sequelize");

const sequelize = require("../../../util/db");

const StorageCharges = sequelize.define("storageCharges", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },

  numberOfDays: {
    type: DataTypes.INTEGER,
  },
  volumeinCbFt: {
    type: DataTypes.FLOAT,
  },
  fundPerCbFt: {
    type: DataTypes.FLOAT,
  },
  total: {
    type: DataTypes.FLOAT,
  },
});

module.exports = StorageCharges;
