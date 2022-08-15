const { DataTypes, Sequelize } = require("sequelize");

const sequelize = require("../../../util/db");

const PackingMaterial = sequelize.define("packingMaterial", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  totalMaterial: {
    type: DataTypes.FLOAT,
  },
  totalMaterialFund: {
    type: DataTypes.FLOAT,
  },
  fullPackingService: {
    type: DataTypes.FLOAT,
  },
  fullPackingServiceFund: {
    type: DataTypes.FLOAT,
  },
});

module.exports = PackingMaterial;
