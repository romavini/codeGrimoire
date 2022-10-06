const PI = 3.14159;
const A = parseFloat(prompt("A"));
const B = parseFloat(prompt("B"));
const C = parseFloat(prompt("C"));

let AreaTrianguloRetangulo = (A * C) / 2;
let AreaCirculo = PI * C ** 2;
let AreaTrapezio = (A + B) * C / 2;
let AreaQuadrado = B * B;
let AreaRetangulo = A * B;

console.log("TRIANGULO: ", AreaTrianguloRetangulo.toFixed(3));
console.log("CIRCULO: ", AreaCirculo.toFixed(3));
console.log("TRAPEZIO: ", AreaTrapezio.toFixed(3));
console.log("QUADRADO: ", AreaQuadrado.toFixed(3));
console.log("RETANGULO: ", AreaRetangulo.toFixed(3));
