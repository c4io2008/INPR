// Caio Henrique Mariano Bandeira
const prompt = require("prompt-sync")({sigint:true});

var temperatura_celsius, temperatura_farenheit;

temperatura_celsius = Number(prompt("<< Digite a temperatura da água em grau Celsius: "));

temperatura_farenheit = ( 9 * temperatura_celsius + 160) ;

console.log(`Temperatura em Farenheit: ${temperatura_farenheit}`);

if(temperatura_celsius >= 100 ) {
    console.log("A água entrou em ebulição")
} else{
    console.log("A água não entrou em ebulição")
}