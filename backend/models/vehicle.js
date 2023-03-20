"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Vehicle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Vehicle.hasMany(models.Package);
    }
  }
  Vehicle.init(
    {
      nama_pemilik: DataTypes.STRING,
      nama_kendaraan: DataTypes.STRING,
      plat_nomor: DataTypes.STRING,
      no_telpon: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "Vehicle"
    }
  );
  return Vehicle;
};
