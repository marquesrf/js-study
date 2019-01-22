// let e var
{
  var a = 2;
  let b = 3;
  console.log(b); // let tem escopo de bloco
}

console.log(a); // var tem escopo gloal

// template string
const carro = 'BMW';
console.log(`Eu gostaria de ter um ${carro}!`);

// destructuring
const [l, e, ...tras] = 'Rafael';
console.log(l, e, tras);

const [x, , y] = [1, 2, 3];
console.log(x, y);

const meuCarro = {
  marca: 'BMW',
  modelo: 'Serie 5',
  cor: 'Azul Escuro'
};
const { marca, cor } = meuCarro;
console.log(marca, cor);
