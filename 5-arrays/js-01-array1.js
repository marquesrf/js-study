let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)
console.log(aprovados.length)
aprovados.push('Paulo')
aprovados[4] = 'Rafael'
console.log(aprovados)
console.log(aprovados.length)
for (let aluno in aprovados) {
    console.log(aprovados[aluno])
}
aprovados.sort()
for (let aluno in aprovados) {
    console.log(aprovados[aluno])
}
delete aprovados[3]
for (let aluno in aprovados) {
    console.log(aprovados[aluno])
}