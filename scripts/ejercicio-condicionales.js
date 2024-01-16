//1.
const respuesta = prompt("Usted es culpable?");

switch (respuesta.toLocaleLowerCase()) {
    case "si":
        document.write("Irás a la cárcel");
        break;
    case "no":
        document.write("Irás a Casa");
        break;
    default:
        document.write("Documentación por favor");
        break;
}

//2.

let precioTotalHelado;
const precioHelado = 1900;
const topping = prompt("Ingrese el topping deseado");

switch (topping.toLocaleLowerCase()) {
    case "oreo":
        precioTotalHelado = precioHelado + 1000;
        break;
    case "kitkat":
        precioTotalHelado = precioHelado + 1500;
        break;
    case "brownie":
        precioTotalHelado = precioHelado + 750;
        break;
    case "lacasitos":
        precioTotalHelado = precioHelado + 950;
    default:
        alert("No tenemos este Topping. Lo sentimos");
        precioTotalHelado = precioHelado;
        break;
}

alert("El precio del helado es :" + precioTotalHelado);

//3.
const numero1 = prompt("Ingrese el primero número");
const numero2 = prompt("Ingrese el segundo número");

if (numero1 > numero2) {
    console.log("El primer número es el mayor")
} else if (numero2 > numero1) {
    console.log("El segundo número es el mayor")
} else {
    console.log("Ambos números son iguales")
}

//4.

const cantidadNotas = 5;
let sumatoriaNotas = 0;

for (let index = 0; index < cantidadNotas; index++) {
    const notaString = prompt("Por favor ingrese la nota de la actividad" + Number(index + 1));
    const nota = Number(notaString);
    sumatoriaNotas = sumatoriaNotas + nota;

    console.log("Nota Actividad ", Number(index + 1), " :", nota);
}

const promedioCalificacion = sumatoriaNotas / cantidadNotas;

console.log(promedioCalificacion);

if (promedioCalificacion< 6) {
    console.log("El estudiante es suspendido");
} else {
    console.log("El estudiante es aprobado")
}