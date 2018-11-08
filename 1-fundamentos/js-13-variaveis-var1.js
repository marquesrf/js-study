// uma variável declarada com var não fica presa ao escopo em que foi definida,
// a não ser dentro de uma função.
{{{{ var sera = "Será??" }}}}

console.log(sera);

// Dentro do escopo de uma função não se pode acessar uma variável diretamente.
function teste() {
    var local = 123;
}

console.log(local);