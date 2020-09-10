"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Runways", {
      airportid: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      designator: {
        type: Sequelize.STRING,
      },
      length: {
        type: Sequelize.INTEGER,
      },
      width: {
        type: Sequelize.INTEGER,
      },
      compcode: {
        type: Sequelize.STRING,
      },
      lightactv: {
        type: Sequelize.INTEGER,
      },
      lightintns: {
        type: Sequelize.STRING,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Runways");
  },
};
