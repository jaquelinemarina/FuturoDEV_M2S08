const Livro = require('../models/Livro')

class LivroController {
    async cadastrar(req, res) {
        try {
            const dados = req.body

            if (!dados.nome || !dados.qtd_paginas) {
                return res.status(400).json({ mensagem: 'Nome e quantidade de páginas são dados obrigatórios.' })
            }

            const livro = await Livro.create(dados)
            return res.status(201).json(livro)

        } catch (error) {
            console.log(error)
            res.status(500).json({ mensagem: 'Erro ao cadastrar livro' })
        }
    }

    async deletar(req, res) {
        try {
            const id = req.params.id
            const livro = await Livro.findByPk(id)

            if (!livro) {
                return res.status(404).json({ mensagem: 'Livro não encontrado' })
            }

            await livro.destroy()
            return res.status(204).json()

        } catch (error) {
            res.status(500).json({ mensagem: 'Erro ao deletar livro' })
        }
    }

    async atualizar(req, res) {
        try {
            const id = req.params.id
            const dados = req.body
            const livro = await Livro.findByPk(id)

            if (!livro) {
                return res.status(404).json({ mensagem: 'Livro não encontrado' })
            }

            livro.nome = dados.nome
            livro.qtd_paginas = dados.qtd_paginas

            await livro.save()
            return res.json(livro)

        } catch (error) {
            console.log(error)
            res.status(500).json({ mensagem: 'Erro ao atualizar livro' })
        }
    }

    async listarTodos(req, res) {
        try {
            const livros = await Livro.findAll()
            return res.json(livros)

        } catch (error) {
            console.log(error)
            res.status(500).json({ mensagem: 'Erro ao buscar livros' })
        }
    }

    async listarUm(req, res) {
        try {
            const id = req.params.id
            const livro = await Livro.findByPk(id)

            if (!livro) {
                return res.status(404).json({ mensagem: 'Livro não encontrado' })
            }

            return res.json(livro)

        } catch (error) {
            console.log(error)
            res.status(500).json({ mensagem: 'Erro ao buscar livro' })
        }
    }
}
module.exports = new LivroController()