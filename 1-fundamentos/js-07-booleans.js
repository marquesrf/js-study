let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo);

console.log("Verdadeiros...");
console.log(!!3);
console.log(!!-1);
console.log(!!" ");
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log("Falsos...");
console.log(!!0);
console.log(!!null);
console.log(!!"");
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log("Ou...");
console.log(!!("" || null || 0 || "Opa!" || 123));

let nome = "";
console.log(nome || "Desconhecido");
nome = "Rafael";
console.log(nome || "Desconhecido");