// Caio Henrique Mariano Bandeira

const prompt = require("prompt-sync")({sigint:true});

var zinco, cobre;
var latao = Number(prompt("<< Digite a quantidade de latão em kg:"))

zinco = latao / 70
cobre = latao / 30

console.log(`A quantidade de zinco é = ${zinco}`);
console.log(`A quantidade de cobre é = ${cobre}`);



