const { Router } = require('express')
const LivroController = require('../controllers/LivroController')

const livrosRoutes = new Router()

livrosRoutes.post('/', LivroController.cadastrar)
livrosRoutes.delete('/:id', LivroController.deletar)
livrosRoutes.put('/:id', LivroController.atualizar)
livrosRoutes.get('/', LivroController.listarTodos)
livrosRoutes.get('/:id', LivroController.listarUm)

module.exports = livrosRoutes