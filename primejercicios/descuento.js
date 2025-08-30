let compra = parseFloat(prompt("Ingrese valor total de compra"));
if (compra >= 100 && compra <=199){
    diezcuento = compra - (compra * 0.10);
    alert("Tienes un 10% de descuento, por lo que tienes que pagar: " + diezcuento)
} else if (compra >= 200){
    veintescuento = compra - (compra * 0.20);
        alert("Tienes un 20% de descuento, por lo que tienes que pagar: " + veintescuento)
}
else {
    alert("no tienes descuento");
}

//ternario
(compra >= 100 && compra <=199)? alert("Tienes un 10% de descuento, por lo que tienes que pagar: " + diezcuento): (compra >= 200)? alert("Tienes un 20% de descuento, por lo que tienes que pagar: " + veintescuento):alert("no tienes descuento");