//mensaje de alerta
window.onload = function() {
    alert("Página que contiene un reloj digital");
    mostrarHora(); //hora actual
    setInterval(mostrarHora, 1000); // actualizar la hora cada segundo
};

//mensaje alerta cuando se abandona la página
window.onbeforeunload = function() {
    return "Página cancelada";
};

//funcion para mostrar la hora actual
function mostrarHora() {
    var fecha = new Date();
    var horas = fecha.getHours();
    var minutos = fecha.getMinutes();
    var segundos = fecha.getSeconds();

    //horas, minutos y segundos tengan dos dígitos
    if (horas < 10) horas = '0' + horas;
    if (minutos < 10) minutos = '0' + minutos;
    if (segundos < 10) segundos = '0' + segundos;

    // Mostrar la hora
    document.getElementById("reloj").textContent = horas + ':' + minutos + ':' + segundos;
}
