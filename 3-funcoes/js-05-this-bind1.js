const pessoa = {
    saudacao: "Bom dia!",
    falar() { // forma otimizada de se criar uma função
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falarSaudacao = pessoa.falar.bind(pessoa)
falarSaudacao()