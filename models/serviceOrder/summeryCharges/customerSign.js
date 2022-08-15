const { DataTypes } = require("sequelize");

const sequelize = require("../../../util/db");

const CustomerSign = sequelize.define("customerSign", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },

  customerSign: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
});

module.exports = CustomerSign;
