let mes=prompt("Introduce un mes:");
let estacion;

switch(mes.toLowerCase()){
    case "diciembre": case"enero": case"febrero":
    estacion="invierno";
    break;

    case "marzo": case"abril": case"mayo":
    estacion="primavera";
    break;

    case "junio": case"julio": case"agosto":
    estacion="verano";
    break;

    case "septiembre": case"octubre": case"noviembre":
    estacion="otoño";
    break;
}

alert("estamos en " + estacion)
