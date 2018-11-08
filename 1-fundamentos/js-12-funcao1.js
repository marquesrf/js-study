// Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b);
};

imprimirSoma(2, 3);

// Função com retono
function soma(a = 0, b = a) {
    return a + b;
};

console.log(soma(3, 5));
console.log(soma(6));
console.log(soma());