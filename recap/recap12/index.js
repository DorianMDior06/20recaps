//Solicitar al usuario que ingrese un número
let num = prompt("Ingresa un número:");

//Determinar si el número es par o impar
num = Number(num);
if (isNaN(num)) {
    alert("ingrese un número válido.");
} else {
    if (num % 2 === 0) {
        alert("El número " + num + " es par.");
    } else {
        alert("El número " + num + " es impar.");
    }
}