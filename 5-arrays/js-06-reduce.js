const alunos = [
    { nome: "João", nota: 7.3, bolsista: false },
    { nome: "Maria", nota: 9.2, bolsista: true },
    { nome: "Pedro", nota: 9.8, bolsista: false },
    { nome: "Ana", nota: 8.7, bolsista: false }
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 0)

console.log(resultado)

// Exemplo prático

// Duas funções, que verificam se todos os alunos são bolsistas e se há algum bolsista
const todosBolsistas = (res, bolsista) => res && bolsista
const algumBolsista = (res, bolsista) => res || bolsista

console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))