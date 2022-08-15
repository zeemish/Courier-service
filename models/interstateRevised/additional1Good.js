const { DataTypes } = require("sequelize");

const sequelize = require("../../util/db.js");

const AdditionalGoodsListOne = sequelize.define("additionalGoodsListOne", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },

  smallBoxItem: {
    type: DataTypes.INTEGER,
    allowNull: true,
    default: 0,
  },
  smallBoxWeight: {
    type: DataTypes.FLOAT,
    allowNull: true,
    default: 0,
  },
  mediumBoxItem: {
    type: DataTypes.INTEGER,
    allowNull: true,
    default: 0,
  },
  mediumBoxWeight: {
    type: DataTypes.FLOAT,
    allowNull: true,
    default: 0,
  },
  largeBoxItem: {
    type: DataTypes.INTEGER,
    allowNull: true,
    default: 0,
  },
  largeBoxWeight: {
    type: DataTypes.FLOAT,
    allowNull: true,
    default: 0,
  },
  xLargeBoxItem: {
    type: DataTypes.INTEGER,
    allowNull: true,
    default: 0,
  },
  xLargeBoxWeight: {
    type: DataTypes.FLOAT,
    allowNull: true,
    default: 0,
  },
  WardrobBoxItem: {
    type: DataTypes.INTEGER,
    allowNull: true,
    default: 0,
  },
  WardrobBoxWeight: {
    type: DataTypes.FLOAT,
    allowNull: true,
    default: 0,
  },
  dishPackBoxItem: {
    type: DataTypes.INTEGER,
    allowNull: true,
    default: 0,
  },
  dishPackBoxWeight: {
    type: DataTypes.FLOAT,
    allowNull: true,
    default: 0,
  },
  picBoxItem: {
    type: DataTypes.INTEGER,
    allowNull: true,
    default: 0,
  },
  picBoxWeight: {
    type: DataTypes.FLOAT,
    allowNull: true,
    default: 0,
  },
  lampBoxItem: {
    type: DataTypes.INTEGER,
    allowNull: true,
    default: 0,
  },
  lampBoxWeight: {
    type: DataTypes.FLOAT,
    allowNull: true,
    default: 0,
  },
  coffeeTableItem: {
    type: DataTypes.INTEGER,
    allowNull: true,
    default: 0,
  },
  coffeeTableWeight: {
    type: DataTypes.FLOAT,
    allowNull: true,
    default: 0,
  },
  DinningTableItem: {
    type: DataTypes.INTEGER,
    allowNull: true,
    default: 0,
  },
  DinningTableWeight: {
    type: DataTypes.FLOAT,
    allowNull: true,
    default: 0,
  },
  endTableItem: {
    type: DataTypes.INTEGER,
    allowNull: true,
    default: 0,
  },
  endTableWeight: {
    type: DataTypes.FLOAT,
    allowNull: true,
    default: 0,
  },
  mattressItem: {
    type: DataTypes.INTEGER,
    allowNull: true,
    default: 0,
  },
  mattressWeight: {
    type: DataTypes.FLOAT,
    allowNull: true,
    default: 0,
  },
  largeCouchItem: {
    type: DataTypes.INTEGER,
    allowNull: true,
    default: 0,
  },
  largeCouchWeight: {
    type: DataTypes.FLOAT,
    allowNull: true,
    default: 0,
  },
  smallCouchItem: {
    type: DataTypes.INTEGER,
    allowNull: true,
    default: 0,
  },
  smallCouchWeight: {
    type: DataTypes.FLOAT,
    allowNull: true,
    default: 0,
  },
  reclinerItem: {
    type: DataTypes.INTEGER,
    allowNull: true,
    default: 0,
  },
  reclinerWeight: {
    type: DataTypes.FLOAT,
    allowNull: true,
    default: 0,
  },
  deskItem: {
    type: DataTypes.INTEGER,
    allowNull: true,
    default: 0,
  },
  deskWeight: {
    type: DataTypes.FLOAT,
    allowNull: true,
    default: 0,
  },
});

module.exports = AdditionalGoodsListOne;
