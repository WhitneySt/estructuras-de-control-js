let subtotal = 0;
let total = 0;
const cantidadProductos = prompt("Por favor indique la cantidad de productos a comprar");
const cantidad = Number(cantidadProductos);

// for (let index = 0; index < cantidad; index++) {
//     let descuento;
//     const nombreProducto = prompt("Por favor ingrese el nombre del producto " + Number(index + 1));
//     const precioProducto = prompt("Por favor ingrese el precio del producto " + Number(index + 1));
//     const precio = Number(precioProducto);

//     if (precio > 20000) {
//         descuento = 0.2;
//     } else if (precio > 10000) {
//         descuento = 0.1;
//     } else if (precio > 5000) {
//         descuento = 0.05;
//     } else {
//         descuento = 0;
//     }

//     subtotal = subtotal + precio;
//     const precioFinal = precio - precio * descuento;
//     total = total + precioFinal;

//     console.log(nombreProducto, ": ", precio, " Descuento del: ", descuento, " Precio Final: ", precioFinal);
// }

let index = 0;

while (index < cantidad) {
    let descuento;
    const nombreProducto = prompt("Por favor ingrese el nombre del producto " + Number(index + 1));
    const precioProducto = prompt("Por favor ingrese el precio del producto " + Number(index + 1));
    const precio = Number(precioProducto);

    if (precio > 20000) {
        descuento = 0.2;
    } else if (precio > 10000) {
        descuento = 0.1;
    } else if (precio > 5000) {
        descuento = 0.05;
    } else {
        descuento = 0;
    }

    subtotal = subtotal + precio;
    const precioFinal = precio - precio * descuento;
    total = total + precioFinal;

    console.log(nombreProducto, ": ", precio, " Descuento del: ", descuento, " Precio Final: ", precioFinal);

    index++;    

}


console.log("Subtotal: ", subtotal);
console.log("Total a pagar: ", total);