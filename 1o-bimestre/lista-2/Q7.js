const prompt = require("prompt-sync")({sigint:true});

var temperatura_celsius, temperatura_farenheit, temperatura_kelvin;

temperatura_celsius = Number(prompt("Digite a temperatura em grau Celsius: "));

temperatura_farenheit = temperatura_celsius * 1.8 + 32;
temperatura_kelvin = temperatura_celsius + 273.15;

console.log(`Temperatura em Celsius: ${temperatura_celsius}`);
console.log(`Temperatura em Farenheit: ${temperatura_farenheit}`);
console.log(`Temperatura em Kelvin: ${temperatura_kelvin}`);
