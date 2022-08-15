const { DataTypes } = require("sequelize");

const sequelize = require("../../util/db");

const Signature = sequelize.define("signature", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    unique: true,
  },

  customerSign: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: true,
    default: Date.now(),
  },
});

module.exports = Signature;
