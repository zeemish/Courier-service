const { DataTypes } = require("sequelize");

const sequelize = require("../../util/db");

const AdditionalService = sequelize.define("additionalService", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    unique: true,
  },

  additionalServicesName1: {
    type: DataTypes.STRING,
  },
  timesCustomerbeingChargedForService1: {
    type: DataTypes.INTEGER,
  },

  additionalServicesFee1: {
    type: DataTypes.FLOAT,
  },
  additionalServicesName2: {
    type: DataTypes.STRING,
  },
  additionalServicesFee2: {
    type: DataTypes.FLOAT,
  },
  timesCustomerbeingChargedForService2: {
    type: DataTypes.INTEGER,
  },
  additionalServicesName3: {
    type: DataTypes.STRING,
  },
  additionalServicesFee3: {
    type: DataTypes.FLOAT,
  },
  timesCustomerbeingChargedForService3: {
    type: DataTypes.INTEGER,
  },
});

module.exports = AdditionalService;
