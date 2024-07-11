const { DataTypes } = require('sequelize')
const connection = require('../database/connection')

const Leitor = connection.define('leitores', {
    nome: {
        type: DataTypes.STRING(150),
        allowNull: false
    },
    cpf: {
        type: DataTypes.STRING(14),
        allowNull: false,
        unique: true
    },
    data_nascimento: {
        type: DataTypes.DATE
    }
})
module.exports = Leitor