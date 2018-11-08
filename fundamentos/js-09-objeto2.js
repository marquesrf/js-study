// cria-se um objeto a partir de uma função. mesmo uma classe, internamente é uma função
console.log(typeof Object);
console.log(typeof new Object);

const Client = function() {}
console.log(typeof Client);
console.log(typeof new Client);

class Produto {} // ES6
console.log(typeof Produto);
console.log(typeof new Produto());