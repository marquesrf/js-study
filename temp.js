// encontrar os dois melhores valores em um array e retoarna a soma deles
const numbers = [5, 8, 12, 19, 22];
const lowest = [];
for (i = 0; i <= 1; i++) {
  minNumber = Math.min(...numbers);
  lowest.push(minNumber);
  numbers.splice(numbers.indexOf(minNumber), 1);
}
console.log(lowest);
const sum = n => n.reduce((a, b) => a + b, 0);
console.log(sum(lowest));
