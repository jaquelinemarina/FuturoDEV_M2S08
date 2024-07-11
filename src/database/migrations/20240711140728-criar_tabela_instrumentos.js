'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'instrumentos',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        nome: {
          type: Sequelize.STRING(150),
          allowNull: false
        },
        tipo_id: {
          type: Sequelize.INTEGER
        },
        situacao: {
          type: Sequelize.STRING(50)
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false
        }
      }
    )
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('instrumentos')
  }
}