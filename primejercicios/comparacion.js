let num1 = parseInt(prompt("A continuación deberá escribir 3 numeros y se calculará cual de ellos es el mayor, digite su primer número: "));
let num2 = parseInt(prompt("Digite su segundo numero: "));
let num3 = parseInt(prompt("Digite su tercer numero: "));

function maximo(num1, num2, num3){

    return Math.max(num1, num2, num3);
}
alert("El numero mayor de los numeros ingresados es: " + maximo (num1, num2, num3));