const PI = 3.14159;
const A = parseFloat(prompt("Informe valor A ="));
const B = parseFloat(prompt("Informe valor B ="));
const C = parseFloat(prompt("Informe valor C ="));

const triangulo = parseFloat((A * C) / 2);
console.log("\nTRIANGULO : " + triangulo.toFixed(3));
const circulo = parseFloat(PI * (C ** 2));
console.log("CIRCULO : " + circulo.toFixed(3));
const trapezio = parseFloat(((A + B) * C) / 2);
console.log("TRAPEZIO : " + trapezio.toFixed(3));
const quadrado = B ** 2;
console.log("QUADRADO : " + quadrado.toFixed(3));
const retangulo = A * B;
console.log("RETANGULO : " + retangulo.toFixed(3));