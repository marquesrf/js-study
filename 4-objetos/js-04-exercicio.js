console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

// pode-se adicionar novas funções ao protótipo original
String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log('Teste de Reverse'.reverse())

Array.prototype.first = function() {
    return this[0]
}

console.log(['a', 'b', 'c'].first())