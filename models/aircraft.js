'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Aircraft extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Aircraft.init({
    icao24: DataTypes.STRING,
    registration: DataTypes.STRING,
    manufacturername: DataTypes.STRING,
    model: DataTypes.STRING,
    typecode: DataTypes.STRING,
    serialnumber: DataTypes.STRING,
    owner: DataTypes.STRING,
    reguntil: DataTypes.STRING,
    built: DataTypes.STRING,
    engines: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Aircraft',
  });
  return Aircraft;
};