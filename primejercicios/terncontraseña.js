let contraseña = prompt("Ingrese su contraseña, se verificará si es segura (min 8)");
(contraseña.length >= 8)? alert("La contraseña ingresada es segura"):alert("Contraseña insegura, muy corta");