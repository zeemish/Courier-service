const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../../util/db");

const Agent = sequelize.define("agent", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  agentName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  agentAddress: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  agentPhone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Agent;
