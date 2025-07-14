const prompt = require('prompt-sync')();

let edad = parseInt(prompt("¿Cuál es tu edad?"));

if (edad >= 18) {
  console.log("Puedes entrar");
} else {
  console.log("No puedes entrar");
}


