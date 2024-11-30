function calcularIVA(precio) {
    let iva = precio * 0.12;
    let precioConIVA = precio + iva;
    alert(`El precio total con IVA es: ${precioConIVA}`);
  }
  
  let precioProducto = parseFloat(prompt("Por favor, ingresa el precio del producto:"));
  
  calcularIVA(precioProducto);
  