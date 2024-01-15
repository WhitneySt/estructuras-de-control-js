//Estructuras de control
//Tipos: Estructuras condiciones y estructuras cíclicas
//Estructuras condiciones: Simples (if), dobles(else, operador ternario), múltiples(else if, switch)
//Estructuras de repetición: declaración for, while o do...while

//Calcular factorial de un número entero.
let numero;
let factorial = 1;
let factorial1 = 1;

//Validamos que lo que el usuario ingrese siempre sea un número
do {
    const numeroString = prompt("Por favor ingrese un número entero");
    numero = parseInt(numeroString);
    console.log(typeof numero);
    
} while (Number.isNaN(numero));

// do {
//     const numeroString = prompt("Por favor ingrese un número entero");
//     numero = parseInt(numeroString);
//     console.log(typeof numero);

// } while (typeof numero == "number");

console.log(numero);

for (let index = 1; index <= numero; index++){
    factorial = factorial * index;
    console.log("contador: ", index);
    console.log("factorial: ",factorial);
}

console.log("El factorial de ", numero, " es igual a ", factorial);

for (let index = numero; index > 0; index--){
    factorial1 = factorial1 * index;
    console.log("contador decremento: ", index);
    console.log("factorial decremento: ", factorial1);
}

console.log("El factorial 2 de ", numero, " es igual a ", factorial1);
