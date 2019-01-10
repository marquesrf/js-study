const pessoa = {
    nome: 'João',
    idade: 3,
    peso: 12
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '03/11/2015'
})

pessoa.dataNascimento = '02/03;2018'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))