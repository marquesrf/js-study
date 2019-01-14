const carros = ['Porsche 911', 'Audi A8', 'BMW S5', 'Fusca']
console.log(carros)
carros.pop()
console.log(carros)
carros.push('Ford Shelby')
console.log(carros)
carros.unshift('Hilux')
console.log(carros)
carros.shift()
console.log(carros)

// adicionar com splice (atributos: índice de início, quantidade de exclusões, valores)
carros.splice(2, 0, 'Dodge Challenger', 'Ford Impala')
console.log(carros)

// remover com splice
carros.splice(3, 1)
console.log(carros)

// slice retorna um novo array
const ultimosCarros = carros.slice(3) // a partir do índice 3
console.log(carros)
console.log(ultimosCarros)
const primeirosCarros = carros.slice(0, 3) // até o índice 3, mas sem incluí-lo
console.log(primeirosCarros)