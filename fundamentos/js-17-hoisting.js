// hoisting (içamento), é a característica de uma função trazer para cima uma variável que não tenha sido declarada antes
console.log("a = ", a);
var a = 2;
console.log("a = ", a);

// porém isso só ocorre com o uso de 'var', let não permite
console.log("b = ", b); // aqui vai ocorrer um erro!!
let b = 2;
console.log("b = ", b);