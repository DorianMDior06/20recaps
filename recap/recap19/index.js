function sumarTresNumeros(num1, num2, num3) {
    return num1 + num2 + num3;
  }
  let num1 = parseFloat(prompt("Ingresa el primer número:"));
  let num2 = parseFloat(prompt("Ingresa el segundo número:"));
  let num3 = parseFloat(prompt("Ingresa el tercer número:"));
  let resultado = sumarTresNumeros(num1, num2, num3);
  
  alert("La suma de los tres números es: " + resultado);