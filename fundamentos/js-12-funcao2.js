// Armazena função sem retorno em uma vaiável/constante
const imprimirSoma = function(a, b) {
    console.log(a + b);
};

imprimirSoma(2, 3);

// Armazena função arrow com retorno em variável/constante
const soma = (a, b) => {
    return a + b;
};

console.log(soma(3, 5));

// Função com retorno implícito
const subtracao = (a, b) => a - b;
console.log(subtracao(6, 2));
