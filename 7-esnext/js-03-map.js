const meusCarros = new Map()
meusCarros.set('BMW', { modelo: 'BMW 540i M Sport', cor: 'Preto' })
meusCarros.set('Audi', { modelo: 'Audi A7 Sportback', cor: 'Azul Firmamento' })
console.log(meusCarros.get('Audi'))
console.log(meusCarros.get('BMW'))

// a principal diferença de um map e um objeto é que o map pode ter chave de tipos variados
const chavesVariadas = new Map([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número']
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl  )
})
// varifica o tamanho do map
console.log(chavesVariadas.size) // retorna 3
// verificando se elemento existe
console.log(chavesVariadas.has(123)) // retorna true
// excluindo elemento
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123)) // retorna false
console.log(chavesVariadas.size) // retorna 2
// as chaves não podem ser repetidas
chavesVariadas.set(123, 'a') // criado e recebe valor a
chavesVariadas.set(123, 'Número') // Não será criado pois já existe, terá valor alterado
console.log(chavesVariadas.get(123))