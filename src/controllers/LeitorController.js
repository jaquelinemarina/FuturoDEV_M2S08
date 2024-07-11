const Leitor = require('../models/Leitor')

class LeitorController {
    async cadastrar(req, res) {
        try {
            const dados = req.body

            if (!dados.nome || !dados.cpf) {
                return res.status(400).json({ mensagem: 'Nome e CPF são dados obrigatórios.' })
            }

            const leitor = await Leitor.create(dados)
            return res.status(201).json(leitor)

        } catch (error) {
            console.log(error)
            res.status(500).json({ mensagem: 'Erro ao cadastrar leitor' })
        }
    }

    async deletar(req, res) {
        try {
            const id = req.params.id
            const leitor = await Leitor.findByPk(id)

            if (!leitor) {
                return res.status(404).json({ mensagem: 'Leitor não encontrado' })
            }

            await leitor.destroy()
            return res.status(204).json()

        } catch (error) {
            res.status(500).json({ mensagem: 'Erro ao deletar leitor' })
        }
    }

    async atualizar(req, res) {
        try {
            const id = req.params.id
            const dados = req.body
            const leitor = await Leitor.findByPk(id)

            if (!leitor) {
                return res.status(404).json({ mensagem: 'Leitor não encontrado' })
            }

            leitor.nome = dados.nome
            leitor.cpf = dados.cpf

            await leitor.save()
            return res.json(leitor)

        } catch (error) {
            console.log(error)
            res.status(500).json({ mensagem: 'Erro ao atualizar leitor' })
        }
    }

    async listarTodos(req, res) {
        try {
            const leitores = await Leitor.findAll()
            return res.json(leitores)

        } catch (error) {
            console.log(error)
            res.status(500).json({ mensagem: 'Erro ao listar leitores' })
        }
    }

    async listarUm(req, res) {
        try {
            const id = req.params.id
            const leitor = await Leitor.findByPk(id)

            if (!leitor) {
                return res.status(404).json({ mensagem: 'Leitor não encontrado' })
            }

            return res.json(leitor)

        } catch (error) {
            console.log(error)
            res.status(500).json({ mensagem: 'Erro ao buscar leitor' })
        }
    }
}
module.exports = new LeitorController()