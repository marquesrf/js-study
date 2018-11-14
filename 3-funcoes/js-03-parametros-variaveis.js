function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(2))
console.log(soma(4, 6, 3))
console.log(soma(1.5, 3.7))
console.log(soma(100, 5, 32, 97))
