const { Router } = require('express')
const InstrumentoController = require('../controllers/InstrumentoController')

const instrumentosRoutes = new Router()

instrumentosRoutes.post('/', InstrumentoController.cadastrar)
instrumentosRoutes.delete('/:id', InstrumentoController.deletar)
instrumentosRoutes.put('/:id', InstrumentoController.atualizar)
instrumentosRoutes.get('/', InstrumentoController.listarTodos)
instrumentosRoutes.get('/:id', InstrumentoController.listarUm)

module.exports = instrumentosRoutes