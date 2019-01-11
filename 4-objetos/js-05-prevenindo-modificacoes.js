// Não permite ADICIONAR atributos
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco:1.99, tag: 'promoção'
})

produto.nome = 'Borracha' // alteração, pode
produto.descricao = 'Borracha escolar branca' // adição, não pode
delete produto.tag // exclusão, pode
console.log(produto)

// Não permite ADICIONAR ou EXCLUIR atributos
const pessoa = { nome: 'Julia', idade: 35 }
Object.seal(pessoa)

pessoa.sobrenome = 'Silva' // adição, não pode
delete pessoa.nome // exclusão, não pode
pessoa.idade = 29 // alteração, pode
console.log(pessoa)

// Não permite ADICIONAR, EXCLUIR ou ALTERAR ATRIBUTOS
const carro = { marca: 'Audi', modelo: 'A8' }
Object.freeze(carro)

carro.modelo = 'A5' // alteração, não pode
delete carro.marca // exclusão, não pode
carro.cor = 'Preto' // adição, não pode
console.log(carro)