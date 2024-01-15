
// parseInt te pasa a numeros 

let numero;
let mayor100=0;
let suma=0;
for(var i=0;i<5;i++){
    let numero=parseInt(prompt("Introduce tu numero:"));

    suma += numero;

if (numero>100){
    ++mayor100;
}

}

alert("la suma de los números es: " + suma + "y hay " + mayor100 + "mayores de 100")

