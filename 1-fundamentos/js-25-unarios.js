let num1 = 1;
let num2 = 2;

num1++; // ocorre depois
console.log(num1);
--num1; // ocorre antes
console.log(num1);

console.log(++num1 === num2--); // num1 é incrementado ANTES da comparação e num2 é decrementado DEPOIS da comparação
console.log(num1);
console.log(num2);
console.log(num1 === num2); // por isso que aqui eles são diferentes