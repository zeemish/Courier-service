const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../../util/db.js");

const OrderFooter = sequelize.define("orderfooter", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  shipper: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date1: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  movingAndStorage: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date2: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
});

module.exports = OrderFooter;
