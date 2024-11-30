//Solicitar al usuario que ingrese un número
let num = parseFloat(prompt("Ingresa un número:"));

//Verificar si el número es positivo
if (num > 0) {
  alert("El número " + num + " es positivo.");
} else if (num < 0) {
  alert("El número " + num + " es negativo.");
} else {
  alert("El número es cero.");
}