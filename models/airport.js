"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Airport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Airport.hasMany(models.Runway), { foreignKey: "globalid" };
    }
  }
  Airport.init(
    {
      latitude: DataTypes.STRING,
      longitude: DataTypes.STRING,
      globalid: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      ident: DataTypes.STRING,
      name: DataTypes.STRING,
      elevation: DataTypes.INTEGER,
      icaoId: DataTypes.STRING,
      servcity: DataTypes.STRING,
      state: DataTypes.STRING,
      iapexists: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Airport",
      timestamps: false,
    }
  );
  return Airport;
};
