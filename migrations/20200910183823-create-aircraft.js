"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Aircraft", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      icao24: {
        type: Sequelize.STRING,
      },
      registration: {
        type: Sequelize.STRING,
      },
      manufacturername: {
        type: Sequelize.STRING,
      },
      model: {
        type: Sequelize.STRING,
      },
      typecode: {
        type: Sequelize.STRING,
      },
      serialnumber: {
        type: Sequelize.STRING,
      },
      owner: {
        type: Sequelize.STRING,
      },
      reguntil: {
        type: Sequelize.STRING,
      },
      built: {
        type: Sequelize.STRING,
      },
      engines: {
        type: Sequelize.STRING,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Aircraft");
  },
};
