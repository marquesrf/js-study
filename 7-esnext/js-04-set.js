// não aceita repetição e não indexa
const times = new Set();
times.add('Vasco'); // adiciona elementos
times
  .add('São Paulo')
  .add('Palmeiras')
  .add('Santos'); // adiciona de forma encadeada
times.add('Flamengo');
times.add('Vasco'); // não permite repetições
console.log(times);
console.log(times.size);
console.log(times.has('Flamengo'));
times.delete('Flamengo');
console.log(times.has('Flamengo'));

// pode-se criar a partir de um array comum
// porém ele irá retirar os elementos repetidos
const nomes = ['Rafael', 'João', 'Antônio', 'Ana Paula', 'Rafael'];
const nomesSet = new Set(nomes);
console.log(nomes);
console.log(nomesSet);
