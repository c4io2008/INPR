const prompt = require("prompt-sync")({sigint:true});

var segundos, horas;

segundos = Number(prompt("Digite o tempo em segundos: "));

horas = segundos / 3600;

console.log(`${segundos} segundo(s) equivale a ${horas} hora(s)`);
