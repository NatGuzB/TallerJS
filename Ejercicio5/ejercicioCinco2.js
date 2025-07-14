const prompt = require('prompt-sync')();
const numero = parseInt(prompt("Ingresa un número para ver su tabla de multiplicar:"));


for (let i = 1; i <= 10; i++) {
    const resultado = numero * i;
    console.log("Su operacion de", `${numero} x ${i} da como resultado ${resultado}`);
}
