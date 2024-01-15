let precio=parseFloat(prompt("Introduce tu precio:"));

const iva = 0.21;

let precioiva=precio*iva;

let preciototal=precioiva+precio;

alert(preciototal.toFixed(2));



