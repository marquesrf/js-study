const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Virdo', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

// console.log(produtos.filter(function(p) {
//     // return p.preco > 100.00
//     return p.fragil == false
// }))

// função que retorna produtos com valor maior ou igual a 500
const caro = produto => produto.preco >= 500
// função que retorna produtos com valor do atributo fragil igual a true
const fragil = produto => produto.fragil
// faz o filtro no array produtos usando a função caro
console.log(produtos.filter(caro))
// faz o filtro no array produtos usando a função fragil
console.log(produtos.filter(fragil))
// faz o filtro no array produtos usando a função caro e fragil (atende aos dois filtros, na ordem)
console.log(produtos.filter(caro).filter(fragil))