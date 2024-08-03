
// utilizando o método Math

/*
-> Math.sqrt() para raiz quadrada
* var x = 10 / 2 * Math.sqrt(9) -4
alert(x)
* */

/*
-> Math.abs() para valores absolutos
*var x = 10 / 2 * Math.sqrt(9) - 120
var y = Math.abs(x)
alert(y)
* */

var x = 5
var y = 2
total = x / y

alert(
    " O resultado de 5 - 2, será: " + total + "\n" +
    "Se aplicarmos o método Math.ceil() a essa conta, teremos o valor: " + Math.ceil(total)
)