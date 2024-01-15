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