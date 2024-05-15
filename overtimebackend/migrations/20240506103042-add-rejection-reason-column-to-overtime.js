"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Overtimes", "rejectionReason", {
      type: Sequelize.STRING,
      allowNull: true, // Modify as per your requirement
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Overtimes", "rejectionReason");
  },
};
