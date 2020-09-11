"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Runway extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Runway.belongsTo(models.Airport, { foreignKey: "airportid" });
    }
  }
  Runway.init(
    {
      airportid: DataTypes.STRING,
      designator: DataTypes.STRING,
      length: DataTypes.INTEGER,
      width: DataTypes.INTEGER,
      compcode: DataTypes.STRING,
      lightactv: DataTypes.INTEGER,
      lightintns: DataTypes.STRING,
      AirportGlobalid: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Runway",
      timestamps: false,
    }
  );
  return Runway;
};
