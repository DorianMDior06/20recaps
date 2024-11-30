//Solicitar al usuario que ingrese su edad
let años = prompt("¿Cuántos años tienes?");

//Verificar si la edad es 18 o más
años = Number(años);

if (años >= 18) {
    alert("Puedes votar");
} else {
    alert("No puedes votar aún");
}
