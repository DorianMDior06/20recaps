//Preguntar si el usuario tiene una cuenta
let tieneCuenta = prompt("¿Tiene una cuenta? (si/no)").toLowerCase();

//Verificar respuestas afirmativas
if (tieneCuenta === "si") {
    let conoceContraseña = prompt("¿Conoce la contraseña? (si/no)").toLowerCase();
    
    if (conoceContraseña === "si") {
        alert("Acceso concedido");
    } else {
        alert("Acceso denegado");
    }
} else {
    alert("Acceso denegado");
}