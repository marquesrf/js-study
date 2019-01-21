// arrow function
const soma = (a, b) => a + b
console.log(soma(2, 3))

// parâmetro padrão (default)
function log(texto = 'Node') {
    console.log(texto)
}
log()
log('Javascript')

// operador '...' rest(juntar)/spread(espalhar)
// juntar
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(1, 2, 3, 4, 5))

// espalhar
const pessoa = { nome: 'Rafael', idade: 35 }
const funcionario = { salario: 5000.00, ...pessoa } // cria uma cópia dos atributos
console.log(pessoa)
console.log(funcionario)