window.onload = function() {
  document.getElementById('nom').focus();
  document.getElementById('opciones').addEventListener('change', seleccionar);
  document.getElementById('obs').addEventListener('keypress', limita);
  document.getElementById('formulario').addEventListener('submit', enviar_formulario);
  //recordad que el submit se hace sobre el formulario, no sobre el bot�n enviar
}

function seleccionar() {
  var longitud = this.getElementsByTagName('option').length;
  var indice = this.selectedIndex;
  var valor = this.value;

  var result = "La longitud de la lista es: " + longitud + "\n" +
               "El indice seleccionado es: " + indice + "\n" +
               "El valor indice seleccionado es: " + valor;
                   
      alert(result);
  }


  function limita(elEvento) {
      var evento = elEvento || window.event;
      var elemento = document.getElementById("obs");
      if(elemento.value.length >= 150) {
        alert('Has superado los 150 caracteres');
        evento.preventDefault();
      }
  }



function enviar_formulario(elEvento) {
      var evento = elEvento || window.event;
      valor = document.getElementById('tlf').value;
      if(!(/^\d{9}$/.test(valor)) ) {
          alert('El tfno no tiene 9 digitos');
          evento.preventDefault();
      }else if (document.getElementById('dni').value =="") {
          alert("El campo dni esta vacio");
          evento.preventDefault();
        }
  }
