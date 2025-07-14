const prompt = require('prompt-sync')();

const num1 = parseFloat(prompt("Ingresa el primer número:"));
const num2 = parseFloat(prompt("Ingresa el segundo número:"));

const suma = num1 + num2;

console.log("La suma de los dos números es:", suma);