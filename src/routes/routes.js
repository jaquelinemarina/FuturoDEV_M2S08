const { Router } = require('express')

const auditoriosRoutes = require('./auditorios.routes')
const instrumentosRoutes = require('./instrumentos.routes')
const leitoresRoutes = require('./leitores.routes')
const livrosRoutes = require('./livros.routes')

const routes = new Router()

routes.use('/auditorios', auditoriosRoutes)
routes.use('/instrumentos', instrumentosRoutes)
routes.use('/leitores', leitoresRoutes)
routes.use('/livros', livrosRoutes)

module.exports = routes