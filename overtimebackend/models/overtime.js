"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Overtime extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Overtime.init(
    {
      requeststaffid: DataTypes.STRING,
      overtimelist: DataTypes.STRING,
      requestfirstname: DataTypes.STRING,
      requestlastname: DataTypes.STRING,
      department: DataTypes.STRING,
      stafflocation: DataTypes.STRING,
      status: DataTypes.STRING,
      firstapprovalname: DataTypes.STRING,
      firstapprovalid: DataTypes.STRING,
      secondapprovalname: DataTypes.STRING,
      secondapprovalid: DataTypes.STRING,
      rejectionReason: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Overtime",
    }
  );
  return Overtime;
};
