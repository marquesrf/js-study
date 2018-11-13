function getInteiroAleatorio(min, max) {
    const valor =  Math.random() * (max - min) + min;
    return Math.floor(valor);
};

let opcao = 0;

// a primeira execução sempre acontece
do {
    opcao = getInteiroAleatorio(-1, 10);
    console.log(`A opção escolhida foi ${opcao}.`);
} while ( opcao != -1);

console.log("Fim de execução!");