// função
function getPreco(imposto = 0, moeda = "R$") {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: "Notebook",
    preco: 4589.00,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

const carro = { preco: 49990.00, desc: 0.20}
// usando call
console.log(getPreco.call(carro))
console.log(getPreco.call(carro, 0.17, "$")) // parâmetros: contexto, depois os parâmetros da função
// usand apply
console.log(getPreco.apply(carro))
console.log(getPreco.apply(carro, [0.17, "$"])) // parâmetros: contexto, depois um array com os parâmetros da função
