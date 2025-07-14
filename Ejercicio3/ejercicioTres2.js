const prompt = require('prompt-sync')();

const numero = parseFloat(prompt("Ingresa un número:"));


if (numero > 0) {
    console.log("Su número positivo");
} else if (numero < 0) {
    console.log("Su  número negativo");
} else {
    console.log("Su número cero");
}
