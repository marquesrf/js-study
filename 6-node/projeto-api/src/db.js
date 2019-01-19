// Simula um banco de dados

const sequence = {
    _id: 1,
    get id() { return this._id++ } // retorna o próximo número (id)
}

const articles = {}

function createArticle(article) {
    if (!article.id) article.id = sequence.id // se o id do artigo não está atribuído, ele recebe o de sequence
    articles[article.id] = article // recebe o novo elemento
    return article // retorna o objeto criado
}

function getArticle(id) {
    return articles[id] || {} // retorna o artigo encontrado ou vazio
}

function getArticles() {
    return Object.values(articles) // retorna todos os artigos
}

function deleteArticle(id) {
    const article = articles[id] // opcional, armazena o artigo deletado
    delete articles[id]
    return article // opcional, exibe o artigo deletado
}

module.exports = { createArticle, getArticle, getArticles, deleteArticle } // exporto aquilo que quero que esteja visível fora desse módulo