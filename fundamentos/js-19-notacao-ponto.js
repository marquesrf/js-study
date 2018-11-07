console.log(typeof console);
console.log(Math.ceil(6.1));
const obg1 = {}
obg1.nome = "Bola";
console.log(obg1.nome);
function Obj(nome) {
    this.nome = nome; // this deixa visível fora da função
    this.exec = function() {
        console.log("Executando....");
    }
}
const obj2 = new Obj("Carro");
console.log(obj2.nome);
obj2.exec();