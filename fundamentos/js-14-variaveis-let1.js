// uma variável declarada com var não fica presa ao escopo em que foi definida,
var numero = 1;
{
    // uma variável declarada com let fica presa ao escopo
    let numero = 2;
    console.log(numero);
}
console.log(numero);