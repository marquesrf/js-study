function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min];
    const valor =  Math.random() * (max - min) + min;
    return Math.floor(valor);
};
const obj = [50, 100];
console.log(rand(obj));
console.log(rand([992]));
console.log(rand([, 70]));
console.log(rand([]));