function fizzbuzz (num)
{
if (num > 1 && num < 100)
{
    if (num % 3 === 0 && num % 5 === 0){
        alert("fizzbuzz")
    }
        else if (num % 3 === 0){
            alert("fizz");
        }
            else if (num % 5 === 0){
                alert("buzz")
            }
        }
}






let num = parseFloat(prompt("Ingrese un numero, haré algo"));
fizzbuzz(num);