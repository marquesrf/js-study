Object.prototype.attr0 = '0'
const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B' }
const filho = { __proto__: pai, attr3: 'C' }
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing, sobrescreve o que foi herdado
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}` // shadowing, sobrescreve o que foi herdado, mas combinando com o herdado ('super')
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

// exibe apenas propriedades declaradas explicitamente nos objetos
console.log(ferrari)
console.log(volvo)

// mas ainda pode acessar as propriedades herdadas
volvo.acelerarMais(100)
console.log(volvo.status())
ferrari.acelerarMais(300)
console.log(ferrari.status())

// mostra propriedades próprias ou as de herança
for (let key in volvo) {
    volvo.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança: ${key}`)
}
 