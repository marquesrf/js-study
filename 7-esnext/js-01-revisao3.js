// Object.values
const obj = { a: 1, b: 2, c:3 }
console.log(Object.values(obj))

// Object.entries
console.log(Object.entries(obj))

// notação literal de criação de objetos
const nome = 'Rafael'
const pessoa = {
    nome, 
    saudacao(nome = this.nome) {
        return `Olá ${nome}`
    }
}
console.log(pessoa.nome)
console.log(pessoa.saudacao())

// herança de classe
class Animal {
    oQueSou() {
        return 'Sou um animal.'
    }
}
class Cachorro extends Animal {
    queAnimal() {
        return 'Sou cachorro!'
    }
}
const cachorro = new Cachorro()
console.log(cachorro.oQueSou())
console.log(cachorro.queAnimal())