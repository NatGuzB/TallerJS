const prompt = require('prompt-sync')();

let contraseña = prompt("Ingresa la contraseña:");


while (contraseña !== "1234") {
     console.log("Tu contraseña es incorrecta. Intenta de nuevo.");
    contraseña = prompt("Ingresa una nueva contraseña:");
}


 console.log("Tu contraseña es correcta");
