// encontrar os dois melhores valores em um array e retoarna a soma deles
// const numbers = [5, 8, 12, 19, 22];
// const lowest = [];
// for (i = 0; i <= 1; i++) {
//   minNumber = Math.min(...numbers);
//   lowest.push(minNumber);
//   numbers.splice(numbers.indexOf(minNumber), 1);
// }
// console.log(lowest);
// const sum = n => n.reduce((a, b) => a + b, 0);
// console.log(sum(lowest));

// pega os elementos do array e converte e binário para inteiro
const array1 = [0, 0, 0, 1]; // 1
const array2 = [0, 0, 1, 0]; // 2
const array3 = [1, 1, 1, 1]; // 15

const binaryArrayToNumber = arr => {
  const s = arr.join('');
  const numInt = parseInt(s, 2);
  return numInt;
};

console.log(binaryArrayToNumber(array1));
console.log(binaryArrayToNumber(array2));
console.log(binaryArrayToNumber(array3));
