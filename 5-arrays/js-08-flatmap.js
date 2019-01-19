const escola = [
    {
        nome: 'Turma A',
        alunos: [
            {
                nome: 'Rafael',
                nota: 9.5
            }, 
            {
                nome: 'Daniel',
                nota: 10
            }
        ]
    }, 
    {
        nome: 'Turma B',
        alunos:[
            {
                nome: 'André',
                nota: 7
            }, 
            {
                nome: 'Sara',
                nota: 3
            }
        ]
    }
]

const getNotaAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaAluno)
const notas1 = escola.map(getNotasDaTurma)
console.log(notas1) // Array de arrays

// Flatmap
Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}
const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2) // Array