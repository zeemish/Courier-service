const { DataTypes } = require("sequelize");

const sequelize = require("../../util/db");

// import sequelize from "../utilities/database";

const OldRecision = sequelize.define("oldRecision", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    unique: true,
  },
  weight: {
    type: DataTypes.INTEGER,
    allowNull: true,
    default: "",
  },
  totalCharges: {
    type: DataTypes.INTEGER,
    allowNull: true,
    default: "",
  },
});

module.exports = OldRecision;
