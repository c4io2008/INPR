const prompt = require('prompt-sync') ({sigint: true});

var numero1 , numero2;
var soma, subtracao, multiplicacao, divisao;

numero1 = prompt("Digite o 1o número");
numero2 = prompt("Digite o 2o número");

soma = numero1 + numero2;
subtracao = numero1 - numero2;
multiplicacao = numero1 * numero2;
divisao = numero1 / numero2;

console.log(`Soma entre ${numero1} e ${numero2} = ${soma} `);
console.log(`Subtracao entre ${numero1} e ${numero2} = ${subtracao} `);
console.log(`Multiplicacao entre ${numero1} e ${numero2} = ${multiplicacao} `);
console.log(`Divisao entre ${numero1} e ${numero2} = ${divisao} `);
