const prompt = require('prompt-sync')({sigint: true});

var numero1, numero2;
var soma, subtracao, multiplicao, divisao, subtracao2;

numero1 = Number(prompt("Digite o 1o número: "));
numero2 = Number(prompt("Digite o 2o número: "));


soma = numero1 + numero2;
subtracao = numero1 - numero2;
multiplicao = numero1 * numero2;
divisao = numero1 / numero2;
subtracao2 = numero2 - numero1;


console.log(`Soma entre ${numero1} e ${numero2} = ${soma}`);
console.log(`Subtração entre ${numero1} e ${numero2} = ${subtracao}`);
console.log(`Multiplicação entre ${numero1} e ${numero2} = ${multiplicao}`);
console.log(`Divisão entre ${numero1} e ${numero2} = ${divisao}`);
console.log(`Subtração entre ${numero2} e ${numero1} = ${subtracao2}`);
