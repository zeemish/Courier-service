const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../../util/db");

const OfficialsSign = sequelize.define("officialsSign", {
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
  customerSignDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  coachSign: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  coachSignDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
});

module.exports = OfficialsSign;
