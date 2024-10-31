const prompt = require('prompt-sync')({sigint: true});

var hora = Number(prompt("digite sua hora:"))

if(hora <= 11){
    console.log("Bom dia!!!")
}else{
    console.log("Boa tarde!!!")
}