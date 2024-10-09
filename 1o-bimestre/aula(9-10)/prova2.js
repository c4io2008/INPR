// Caio Henrique Mariano Bandeira

const prompt = require("prompt-sync")({sigint:true});

var zinco, cobre;
var latao = Number(prompt("<< Digite a quantidade de latão em kg:"))

latao = latao * 1000


zinco = `${latao}` * 0.7 
cobre = `${latao}` * 0.3


console.log(`A quantidade de zinco é = ${zinco}`);
console.log(`A quantidade de cobre é = ${cobre}`);



