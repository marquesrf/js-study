// uma função JS é dita como First-Class Object/Citizen
// ou também Higher-order function

// criar de forma literal
function fun1() {}

// armazenar em uma variável
const fun2 = function () {}

// armazenar em um array, criando no array ou incluindo funções já criadas
const array = [function (a, b) { return a + b}, fun1, fun2]
console.log(array[0](2, 3))

// armazenar em um atributo de um objeto
const obj = {}
obj.falar = function () { return "Olá!" }
console.log(obj.falar())

// passar função como parâmetro
function run(fun) {
    fun()
}
run(function () { console.log("Executando...")})

// uma função pode retornar/conter outra função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}
soma(2, 3)(4)
// ou ainda
const novaSoma = soma(3, 7)
novaSoma(5)