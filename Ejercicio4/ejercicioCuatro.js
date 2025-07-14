
const prompt = require('prompt-sync')();

const numeroFinal = parseInt(prompt("Ingresa un número para contar hasta él:"));


let contador = 1;

while (contador <= numeroFinal) {
    console.log("Contando de uno en uno a:", contador);
    contador++;
}
