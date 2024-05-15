'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Overtimes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      requeststaffid: {
        type: Sequelize.STRING
      },
      overtimelist: {
        type: Sequelize.STRING
      },
      requestfirstname: {
        type: Sequelize.STRING
      },
      requestlastname: {
        type: Sequelize.STRING
      },
      department: {
        type: Sequelize.STRING
      },
      stafflocation: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      firstapprovalname: {
        type: Sequelize.STRING
      },
      firstapprovalid: {
        type: Sequelize.STRING
      },
      secondapprovalname: {
        type: Sequelize.STRING
      },
      secondapprovalid: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Overtimes');
  }
};