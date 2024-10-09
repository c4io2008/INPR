// Caio Henrique Mariano Bandeira

const prompt = require("prompt-sync")({sigint:true});

var hora = Number(prompt("<< Quantas horas vc trabalha no mês ?"))

var hora1 = 32 * hora

var imposto = hora1 * 0.27
var salario = imposto

console.log(`O seu salario é  = ${salario}`);

