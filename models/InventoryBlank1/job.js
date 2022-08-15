const { DataTypes } = require("sequelize");

const sequelize = require("../../util/db");

const Job = sequelize.define("job", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    unique: true,
  },

  jobNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  date: {
    type: DataTypes.DATEONLY,
    allowNull: true,
    defaultValue: new Date(),
  },
});

module.exports = Job;
