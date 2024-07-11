'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'livros',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        nome: {
          type: Sequelize.STRING(150),
          allowNull: false,
          unique: true
        },
        qtd_paginas: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        categoria_id: {
          type: Sequelize.INTEGER
        },
        autor_id: {
          type: Sequelize.INTEGER
        },
        createdAt: {
          type: Sequelize.DATE, // coloca data e hora 
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
    await queryInterface.dropTable('livros')
  }
}