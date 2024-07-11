const Auditorio = require('../models/Auditorio')

class AuditorioController {
    async cadastrar(req, res) {
        try {
            const dados = req.body

            if (!dados.nome) {
                return res.status(400).json({ mensagem: 'O nome do auditório é um dado obrigatório' })
            }

            const auditorio = await Auditorio.create(dados)
            return res.status(201).json(auditorio)
            console.log(auditorio)

        } catch (error) {
            console.log(error)
            res.status(500).json({ mensagem: 'Erro ao cadastrar auditório' })
        }
    }

    async deletar(req, res) {
        try {
            const id = req.params.id
            const auditorio = await Auditorio.findByPk(id)

            if (!auditorio) {
                return res.status(404).json({ mensagem: 'Auditório não encontrado' })
            }

            await auditorio.destroy()
            return res.status(204).json()

        } catch (error) {
            res.status(500).json({ mensagem: 'Erro ao deletar auditório' })
        }
    }

    async atualizar(req, res) {
        try {
            const id = req.params.id
            const dados = req.body
            const auditorio = await Auditorio.findByPk(id)

            if (!auditorio) {
                return res.status(404).json({ mensagem: 'Auditório não encontrado' })
            }

            auditorio.nome = dados.nome
            auditorio.descricao = dados.descricao
            auditorio.qtd_max = dados.qtd_max

            await auditorio.save()
            return res.json(auditorio)

        } catch (error) {
            console.log(error)
            res.status(500).json({ mensagem: 'Erro ao atualizar auditório' })
        }
    }

    async listarTodos(req, res) {
        try {
            const auditorios = await Auditorio.findAll()
            return res.json(auditorios)

        } catch (error) {
            res.status(500).json({ mensagem: 'Erro ao listar auditórios' })
        }
    }

    async listarUm(req, res) {
        try {
            const id = req.params.id
            const auditorio = await Auditorio.findByPk(id)

            if (!auditorio) {
                return res.status(404).json({ mensagem: 'Auditório não encontrado' })
            }

            return res.json(auditorio)

        } catch (error) {
            res.status(500).json({ mensagem: 'Erro ao listar auditório' })
        }
    }
}
module.exports = new AuditorioController()