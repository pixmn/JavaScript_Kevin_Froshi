let nota1 = parseFloat(prompt( "Esto te calculará si apruebas, recuperas o repruebas. Ingresa la primera nota"));

let nota2 = parseFloat(prompt( "Ingresa segunda nota"));

let nota3 = parseFloat(prompt( "Ingresa tercera nota"));

let notatal = (nota1+nota2+nota3)/3;

(notatal >= 3)? alert("Apruebas con: " + notatal):(notatal <= 2.9 && notatal >= 2)? alert("Recuperas con: " + notatal):(notatal < 2)? alert("Repruebas con: " + notatal):alert(null); //null porque no me sale la alerta, estot en android con termux y navegadores de movil