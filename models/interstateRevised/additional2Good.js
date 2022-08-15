const { DataTypes } = require("sequelize");

const sequelize = require("../../util/db.js");

const AdditionalGoodsListTwo = sequelize.define("additionalGoodsListTwo", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },

  safeItem: {
    type: DataTypes.INTEGER,
    allowNull: true,
    default: 0,
  },
  safeWeight: {
    type: DataTypes.FLOAT,
    allowNull: true,
    default: 0,
  },
  televisionItem: {
    type: DataTypes.INTEGER,
    allowNull: true,
    default: 0,
  },
  televisionWeight: {
    type: DataTypes.FLOAT,
    allowNull: true,
    default: 0,
  },
  washingMachineItem: {
    type: DataTypes.INTEGER,
    allowNull: true,
    default: 0,
  },
  washingMachineWeight: {
    type: DataTypes.FLOAT,
    allowNull: true,
    default: 0,
  },
  stoveItem: {
    type: DataTypes.INTEGER,
    allowNull: true,
    default: 0,
  },
  stoveWeight: {
    type: DataTypes.FLOAT,
    allowNull: true,
    default: 0,
  },
  refrigeratorItem: {
    type: DataTypes.INTEGER,
    allowNull: true,
    default: 0,
  },
  refrigeratorWeight: {
    type: DataTypes.FLOAT,
    allowNull: true,
    default: 0,
  },
  applianceItem: {
    type: DataTypes.INTEGER,
    allowNull: true,
    default: 0,
  },
  applianceWeight: {
    type: DataTypes.FLOAT,
    allowNull: true,
    default: 0,
  },
  cabinateItem: {
    type: DataTypes.INTEGER,
    allowNull: true,
    default: 0,
  },
  cabinateWeight: {
    type: DataTypes.FLOAT,
    allowNull: true,
    default: 0,
  },
  bedroomDresserItem: {
    type: DataTypes.INTEGER,
    allowNull: true,
    default: 0,
  },
  bedroomDresserWeight: {
    type: DataTypes.FLOAT,
    allowNull: true,
    default: 0,
  },
  bookCaseItem: {
    type: DataTypes.INTEGER,
    allowNull: true,
    default: 0,
  },
  bookCaseWeight: {
    type: DataTypes.FLOAT,
    allowNull: true,
    default: 0,
  },
  patioFurnitureItem: {
    type: DataTypes.INTEGER,
    allowNull: true,
    default: 0,
  },
  patioFurnitureWeight: {
    type: DataTypes.FLOAT,
    allowNull: true,
    default: 0,
  },
  storageCabinetItem: {
    type: DataTypes.INTEGER,
    allowNull: true,
    default: 0,
  },
  storageCabinetWeight: {
    type: DataTypes.FLOAT,
    allowNull: true,
    default: 0,
  },
  areaRugItem: {
    type: DataTypes.INTEGER,
    allowNull: true,
    default: 0,
  },
  areaRugWeight: {
    type: DataTypes.FLOAT,
    allowNull: true,
    default: 0,
  },
  BBQItem: {
    type: DataTypes.INTEGER,
    allowNull: true,
    default: 0,
  },
  BBQWeight: {
    type: DataTypes.FLOAT,
    allowNull: true,
    default: 0,
  },
  outdoorFurnitureItem: {
    type: DataTypes.INTEGER,
    allowNull: true,
    default: 0,
  },
  outdoorFurnitureWeight: {
    type: DataTypes.FLOAT,
    allowNull: true,
    default: 0,
  },
  bikeEquipItem: {
    type: DataTypes.INTEGER,
    allowNull: true,
    default: 0,
  },
  bikeEquipWeight: {
    type: DataTypes.FLOAT,
    allowNull: true,
    default: 0,
  },
  toolBoxItem: {
    type: DataTypes.INTEGER,
    allowNull: true,
    default: 0,
  },
  toolBoxWeight: {
    type: DataTypes.FLOAT,
    allowNull: true,
    default: 0,
  },
});

module.exports = AdditionalGoodsListTwo;
