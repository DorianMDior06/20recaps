//Solicitar al usuario que ingrese su edad
let años = prompt("¿Cuántos años tienes?");

//Verificar si la persona es mayor o menor de edad
años = Number(años);
if (isNaN(años) || años <= 0) {
    alert("ingresar una edad válida.");
} else {
    if (años >= 18) {
        alert("Mayor de edad.");
    } else {
        alert("Menor de edad.");
    }
}