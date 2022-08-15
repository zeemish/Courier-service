const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../../util/db.js");

const Header = sequelize.define("header", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  orderNum: {
    type: DataTypes.INTEGER,

    allowNull: false,
  },
  pickupDate: {
    type: DataTypes.DATEONLY,

    allowNull: false,
  },
  firstDeliveryDate: {
    type: DataTypes.DATEONLY,

    allowNull: false,
  },
});

module.exports = Header;
