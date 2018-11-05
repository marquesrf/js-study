let valor;
console.log(valor); //undefined

valor = null;
console.log(valor); // valor null

const produto = {};
console.log(produto.preco);
console.log(produto);
console.log(!!produto.preco);
produto.preco = 3.50;
console.log(produto);
console.log(!!produto.preco);