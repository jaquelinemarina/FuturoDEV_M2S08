const { DataTypes } = require('sequelize')
const connection = require('../database/connection')

const Auditorio = connection.define('auditorios', {
    nome: {
        type: DataTypes.STRING(150),
        allowNull: false
    },
    descricao: {
        type: DataTypes.TEXT
    },
    qtd_max: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})
module.exports = Auditorio