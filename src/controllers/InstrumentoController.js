const Instrumento = require('../models/Instrumento')

class InstrumentoController {
    async cadastrar(req, res) {
        try {
            const dados = req.body

            if (!dados.nome) {
                return res.status(400).json({ mensagem: 'O nome do instrumento é um dado obrigatório' })
            }

            const instrumento = await Instrumento.create(dados)
            return res.status(201).json(instrumento)

        } catch (error) {
            console.log(error)
            res.status(500).json({ mensagem: 'Erro ao cadastrar instrumento' })
        }
    }

    async deletar(req, res) {
        try {
            const id = req.params.id
            const instrumento = await Instrumento.findByPk(id)

            if (!instrumento) {
                return res.status(404).json({ mensagem: 'Instrumento não encontrado' })
            }

            await instrumento.destroy()
            return res.status(204).json()

        } catch (error) {
            res.status(500).json({ mensagem: 'Erro ao deletar instrumento' })
        }
    }

    async atualizar(req, res) {
        try {
            const id = req.params.id
            const dados = req.body
            const instrumento = await Instrumento.findByPk(id)

            if (!instrumento) {
                return res.status(404).json({ mensagem: 'Instrumento não encontrado' })
            }

            instrumento.nome = dados.nome
            instrumento.tipo_id = dados.tipo_id
            instrumento.situacao = dados.situacao

            await instrumento.save()
            return res.json(instrumento)

        } catch (error) {
            console.log(error)
            res.status(500).json({ mensagem: 'Erro ao atualizar instrumento' })
        }
    }

    async listarTodos(req, res) {
        try {
            const instrumentos = await Instrumento.findAll()
            return res.json(instrumentos)

        } catch (error) {
            res.status(500).json({ mensagem: 'Erro ao listar instrumentos' })
        }
    }

    async listarUm(req, res) {
        try {
            const id = req.params.id
            const instrumento = await Instrumento.findByPk(id)

            if (!instrumento) {
                return res.status(404).json({ mensagem: 'Instrumento não encontrado' })
            }

            return res.json(instrumento)

        } catch (error) {
            res.status(500).json({ mensagem: 'Erro ao listar instrumento' })
        }
    }
}
module.exports = new InstrumentoController()