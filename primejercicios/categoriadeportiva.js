let edad = parseInt(prompt("Digite la edad: "));
if (edad > 0 && edad <= 12 ) {
    alert("Pertenece a la categoria infantil");
}
else if (edad >= 13 && edad <= 17){
alert("Pertenece a la categoria adolescente");
}
else if (edad >= 18 && edad <= 59){
    alert("Pertenece a la categoria adulto");
}
else if (edad >= 60){
    alert("Pertenece a la categoria adulto mayor")
}

else { 
    console.log("Número invalido, vuelva a ingresar")
}
//operador ternario
(edad > 0 && edad <= 12 )? alert("Infantil"):(edad >= 13 && edad <= 17)? alert("Pertenece a la categoria adolescente"):(edad >= 18 && edad <= 59)? alert("Pertenece a la categoria adulto"):(edad >= 60)? alert("Pertenece a la categoria adulto mayor"): alert("Número invalido, vuelva a ingresar")