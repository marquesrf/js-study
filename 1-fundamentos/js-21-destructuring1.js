// ES6
const pessoa = {
    nome: "Ana",
    idade: 30,
    endereco: {
        logradouro: "Rua H",
        numero: 180
    }
}
console.log(pessoa);

const { nome, idade } = pessoa;

console.log(pessoa);
console.log(nome, idade);