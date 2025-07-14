const prompt = require('prompt-sync')();

let year = prompt("¿En qué año naciste? ");
let edadB = 2025 - year;

console.log("Tienes aproximadamente", edadB, "años.");
