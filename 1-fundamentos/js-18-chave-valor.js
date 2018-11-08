// par chave/valor
const saudacao = "Olá" // contexto léxico(local) 1

function exec() {
    const saudacao = "Hello" // contexto léxico 2
    return saudacao
}

// objetos são grupos aninhados de pares chave/valor
const cliente = {
    nome: "Rafael",
    idade: 35,
    peso: 115,
    endereco: {
        rua: "Rua H", 
        numero: 180
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);