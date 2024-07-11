const { DataTypes } = require('sequelize')
const connection = require('../database/connection')

const Instrumento = connection.define('instrumentos', {
    nome: {
        type: DataTypes.STRING(150),
        allowNull: false
    },
    tipo_id: {
        type: DataTypes.INTEGER
    },
    situacao: {
        type: DataTypes.STRING(50)
    }
})
module.exports = Instrumento