const { DataTypes } = require("sequelize");

const sequelize = require("../util/db");

const User = sequelize.define(
  "user",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    resetToken: {
      type: DataTypes.STRING,
    },
    resetTokenExpiration: {
      type: DataTypes.STRING,
    },
  }
  // {
  //   validate: {
  //     userValidation() {
  //       if (this.password.length < 7) {
  //         throw new Error("password length must be 7 or greater!");
  //       }
  //       if (!this.email.includes("@")) {
  //         throw new Error("Email is not valid");
  //       }
  //     },
  //   },
  // }
);

module.exports = User;
