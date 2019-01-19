const express = require('express')
const db = require('./db') // chamando módulo local
const bodyParser = require('body-parser')
const port = 3003
const app = express()

// retorna uma função middleware, que faz um parse no body das requisições
// O parser é importante porque transforma os dados enviados em objetos
app.use(bodyParser.urlencoded({ extended: true }))

// retorna todos os artigos
app.get('/artigos', (req, res, next) => {
    res.send(db.getArticles())
})

// retorna um artigos específico
app.get('/artigos/:id', (req, res, next) => {
    res.send(db.getArticle(req.params.id))
})

// cria um novo artigo
app.post('/artigos', (req, res, next) => {
    const article = db.createArticle({
        title: req.body.title,
        author: req.body.author,
        content: req.body.content
    })
    res.send(article)
})

// altera um novo artigo
app.put('/artigos/:id', (req, res, next) => {
    const article = db.createArticle({
        id: req.params.id,
        title: req.body.title,
        author: req.body.author,
        content: req.body.content
    })
    res.send(article)
})

// exclui um novo artigo
app.delete('/artigos/:id', (req, res, next) => {
    const article = db.deleteArticle(req.params.id)
    res.send(article)
})

app.listen(port, () => {
    console.log(`Servidor executando na porta ${port}.`)
})