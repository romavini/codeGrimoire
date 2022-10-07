const PI = 3.14159;
const A = parseFloat(prompt("Informe o valor de A:"));
const B = parseFloat(prompt("Informe o valor de B:"));
const C = parseFloat(prompt("Informe o valor de C:"));

let triangulo = (A * B) / 2;
let Circulo = PI * (C ** 2);
let Trapezio = ((A + B) * C) / 2;
let Quadrado = B * B;
let Retangulo = A * B;

console.log("TRIANGULO:", triangulo.toFixed(3));
console.log("CIRCULO:", Circulo.toFixed(3));
console.log("TRAPEZIO:", Trapezio.toFixed(3));
console.log("QUADRADO:", Quadrado.toFixed(3));
console.log("RETANGULO:", Retangulo.toFixed(3));