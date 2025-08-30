let num = parseFloat(prompt("Ingrese el numero para verificar si es divisible por 3 y 5 al mismo tiempo"));
if (num % 15 === 0){
    alert("El número " + num + " es divisible por 3 y 5")
}
else {alert("El número " + num + " no es divisible por 3 y 5")
}

//ternario
(num % 15 === 0)? alert("El número " + num + " es divisible por 3 y 5"):alert("El número " + num + " no es divisible por 3 y 5");