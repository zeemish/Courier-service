const { DataTypes } = require("sequelize");

const sequelize = require("../../util/db");

const DeliveryOrder = sequelize.define("deliveryOrder", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  streetAddress: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  zipCode: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  deliveryDate: {
    type: DataTypes.DATEONLY,
    allowNull: true,
    default: Date.now(),
  },
});

module.exports = DeliveryOrder;
