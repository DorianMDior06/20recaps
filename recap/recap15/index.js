//Solicitar al usuario que ingrese un número
let num = prompt("Ingresa un número:");

//Verificar si el número está entre 10 y 20
num = Number(numero);
if (isNaN(numero)) {
    alert("ingresa un número válido.");
} else {
    if (num >= 10 && num <= 20) {
        alert("El número " + num + " está entre 10 y 20.");
    } else {
        alert("El número " + nume + " no está entre 10 y 20.");
    }
}