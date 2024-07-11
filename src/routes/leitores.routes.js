const { Router } = require('express')
const LeitorController = require('../controllers/LeitorController')

const leitoresRoutes = new Router()

leitoresRoutes.post('/', LeitorController.cadastrar)
leitoresRoutes.delete('/:id', LeitorController.deletar)
leitoresRoutes.put('/:id', LeitorController.atualizar)
leitoresRoutes.get('/', LeitorController.listarTodos)
leitoresRoutes.get('/:id', LeitorController.listarUm)

module.exports = leitoresRoutes