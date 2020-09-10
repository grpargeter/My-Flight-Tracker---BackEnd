"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Airports", {
      latitude: {
        type: Sequelize.STRING,
      },
      longitude: {
        type: Sequelize.STRING,
      },
      globalid: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      ident: {
        type: Sequelize.STRING,
      },
      name: {
        type: Sequelize.STRING,
      },
      elevation: {
        type: Sequelize.INTEGER,
      },
      icaoId: {
        type: Sequelize.STRING,
      },
      servcity: {
        type: Sequelize.STRING,
      },
      state: {
        type: Sequelize.STRING,
      },
      iapexists: {
        type: Sequelize.INTEGER,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Airports");
  },
};
