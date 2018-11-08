const escola = "Cod3r";

console.log(escola.charAt(4));
console.log(escola.charAt(1));
console.log(escola.charCodeAt(3)); // valor na tabela ascii
console.log(escola.indexOf("3"));
console.log(escola.substring(0, 3)); // vai do índice 0 até 3 sem incluir 3
console.log("Escola ".concat(escola).concat("!!!"));
console.log(escola.replace(3, "e"));
console.log(escola.replace(/\d/, 'e')); // expressão regular, substitui todos os digitos pela letra 'e'
console.log("Ana,Maria,Pedro".split(","));