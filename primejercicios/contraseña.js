let contraseña = prompt("Ingrese su contraseña, se verificará si es segura (min 8)");
if (contraseña.length >= 8){
    alert("La contraseña ingresada es segura");
} else {
    alert("Contraseña insegura, muy corta");
}

//ternario
(contraseña.length >= 8)? alert("La contraseña ingresada es segura"):alert("Contraseña insegura, muy corta");