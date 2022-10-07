const PI = 3.14159;


valorA = parseFloat(prompt("Valor de A"))
valorB = parseFloat(prompt("Valor de B"))
valorC = parseFloat(prompt("Valor de C"))
console.log()
console.log("TRIANGULO: " + ((valorA * valorC) / 2).toFixed(3))
console.log("CIRCULO: " + (valorC ** 2 * PI).toFixed(3))
console.log("TRAPEZIO: " + (((valorA + valorB) * valorC) / 2).toFixed(3))
console.log("QUADRADO: " + (valorB * valorB).toFixed(3))
console.log("RETANGULO: " + (valorA * valorB).toFixed(3))