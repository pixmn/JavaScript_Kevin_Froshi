let temp = parseFloat(prompt("Ingrese la temperatura actual"));
(temp < 15)? alert("Temperatura fría") : (temp >= 15 && temp <= 25)? alert("Temperatura agradable") : (temp >= 26 && temp <= 35)? alert("Es caluroso"): (temp > 35)? alert("Está muy caluroso"):alert("Datos invalidos. por favor, refresque la pagina");
