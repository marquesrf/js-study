// pode ser útil para controlar o parser de uma template string
function moeda(partes, ...valores) {
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
        resultado.push(partes[indice], valor)
    })
    return resultado.join('')
}

const valorVista = 29.99
const valorParcela = 11
console.log(moeda `1x de ${valorVista} ou 3x de ${valorParcela}`)