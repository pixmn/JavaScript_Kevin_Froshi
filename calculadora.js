let entrada1 = parseFloat(prompt("Esto es una calculadora simple. Ingrese un número"));
let operador = prompt("Ingrese lo que quiere hacer, solo se aceptan: Sumas (+), Restas (-), Multiplicaciones (*), Divisiones(/), Elevar (^) y ya, si coloca otro signo esto no funcionará. ");
let entrada2 = parseFloat(prompt("Ahora ingrese el segundo numero con el cual hacer la operación"));

let resultado;
resultado = parseFloat();
(operador === "+")? resultado = entrada1 + entrada2:(operador === "-")? resultado = entrada1 - entrada2: (operador === "*")? resultado = entrada1 * entrada2:(operador === "/")? resultado = entrada1 / entrada2:(operador === "^")? resultado = entrada1 ** entrada2:resultado = null || alert("Hiciste algo mal, recuerda ingresar solo un operador y solo los que están disponibles, sino, otra vez verás este mensaje");

if (resultado !== undefined){
alert(entrada1 + operador + entrada2 + "=" + resultado)
}
//la idea es que funcione, no que el codigo sea perfecto, además, haré otro que queda mejor con el if, con el ? parece no ser tan organizado, enreda mucho en cosas largas 