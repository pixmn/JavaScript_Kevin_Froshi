let weigh = parseFloat(prompt("Te calcularé el indice de masa corporal. ahora, ingrese su peso en kilogramos"));
let stature = parseFloat(prompt("Ahora ingrese su estatura actual en metros"));
let imc = weigh/stature*stature;

if (imc < 18.5){
alert("Bajo de peso, IMC de: " + imc)

} else if (18.5 <= imc < 25){
    alert("Peso normal, IMC de: " + imc)
}

    else if (25 <= imc < 30){
        alert("Sobre peso, IMC de: " + imc)

    } else if (imc >= 30){
        alert("Con obesidad, IMC de: " + imc)
    }
else alert("ok")