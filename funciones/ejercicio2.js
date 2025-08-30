function suma(num1, num2) {
    let resultado = num1 + num2;
    alert(num1 + " + " + num2 + " = " +resultado);
}
function resta(num1, num2) {
    let resultado = num1 - num2;
    alert(num1 + " - " + num2 + " = "+resultado);
}


function multiplicacion (num1, num2)
{
    let resultado = num1 * num2;
    alert(num1 + " * " + num2 + " = " +resultado);
}

function division (num1, num2)
{
    let resultado = num1 / num2;
    alert(num1 + " / " + num2 + " = " +resultado);
}

function division (num1, num2)
{
    let resultado = num1 % num2;
    alert(num1 + " % " + num2 + " = " +resultado);
}

let n1 = parseFloat(prompt("Digite su primer numero"));
let n2 = parseFloat(prompt("Digite su numero 2"));
suma (n1, n2);
resta(n1, n2);
multiplicacion(n1, n2);
division(n1, n2);
