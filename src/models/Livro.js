const { DataTypes } = require('sequelize')
const connection = require('../database/connection')

const Livro = connection.define('livros', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    qtd_paginas: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    categoria_id: {
        type: DataTypes.INTEGER    // como definir FK?
    },
    autor_id: {
        type: DataTypes.INTEGER
    }
})
module.exports = Livro