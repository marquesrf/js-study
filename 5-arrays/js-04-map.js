const nums = [1, 2, 3, 4, 5]

let resultado = nums.map(function(e) {
    return e * 20
})

console.log(`Array nums - ${nums}`)
console.log(`Array resultado - ${resultado}`)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)

// Objeto JSON
const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

// Faz uma "transformação" de JSON para objeto
const paraObjeto = json => JSON.parse(json)
// recebe um produto e retorn o atributo "preco"
const apenasPreco = produto => produto.preco
// criar um novo array utilizando a função "map" através das funções criadas anteriormente
const precos = carrinho.map(paraObjeto).map(apenasPreco)
console.log(precos)