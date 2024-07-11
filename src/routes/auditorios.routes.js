const { Router } = require('express')
const AuditorioController = require('../controllers/AuditorioController')

const auditoriosRoutes = new Router()

auditoriosRoutes.post('/', AuditorioController.cadastrar)
auditoriosRoutes.delete('/:id', AuditorioController.deletar)
auditoriosRoutes.put('/:id', AuditorioController.atualizar)
auditoriosRoutes.get('/', AuditorioController.listarTodos)
auditoriosRoutes.get('/:id', AuditorioController.listarUm)

module.exports = auditoriosRoutes