var cadena = "La casa de Antonio";

var longitudCadena = cadena.length;

var cadenaMayuscula = cadena.toUpperCase();
var cadenaMinuscula = cadena.toLowerCase();
var cadenaAlreves = cadena.split('').reverse().join();

document.write(longitudCadena + "<br>");
document.write(cadenaMayuscula + "<br>");
document.write(cadenaMinuscula + "<br>");
document.write(cadenaAlreves + "<br>");


/* OJO CON ESTO, REVERSE ES APLICABLE A ARREGLOS NO A CADENAS DE TEXTO PARA INVERTIR LA CADENA PRIMERO
HAY QUE CONVERTIRLA EN UN ARREGLO USANDO EL MÉTODO SPLIT, LUEGO SE REVEIERTE EL ARREGLO CON REVERSE Y 
FINALMENTE VOLVER A UNIR EL ARREGLO CON JOIN*/

//El método split() divide una cadena en una matriz.

//El método reverse() invierte una matriz.

//El método join() une elementos en una cadena.