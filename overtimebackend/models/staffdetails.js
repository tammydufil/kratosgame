"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Staffdetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Staffdetails.init(
    {
      Staffid: DataTypes.STRING,
      surname: DataTypes.STRING,
      firstname: DataTypes.STRING,
      othernames: DataTypes.STRING,
      Dept: DataTypes.STRING,
      stafflocation: DataTypes.STRING,
      role: DataTypes.STRING,
      cur_status: DataTypes.STRING,
      temp_password: DataTypes.STRING,
      password: DataTypes.STRING,
      phone_number: DataTypes.STRING,
      staff_mail: DataTypes.STRING,
      supervisor: DataTypes.STRING,
      gender: DataTypes.STRING,
      hospitalname: DataTypes.STRING,
      email: DataTypes.STRING,
      staff_role: DataTypes.STRING,
      clinic_role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Staffdetails",
    }
  );
  return Staffdetails;
};
