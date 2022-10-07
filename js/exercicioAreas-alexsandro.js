const PI = 3.14159;
const valorA = parseFloat(prompt("insira um valor A "));
const valorB = parseFloat(prompt("insira um valor B "));
const valorC = parseFloat(prompt("insira um valor C "));

const areaTriangulo = valorA * valorC / 2;
const areaCirculo = PI * valorC ** 2;
const areaTrapezio = (valorA + valorB) * valorC / 2;
const areaQuadrado = valorB * valorB;
const areaRetangulo = valorA * valorB;

console.log("TRIANGULO", areaTriangulo.toFixed(3));
console.log("CIRCULO", areaCirculo.toFixed(3));
console.log("TRAPEZIO", areaTrapezio.toFixed(3));
console.log("QUADRADO", areaQuadrado.toFixed(3));
console.log("RETANGULO", areaRetangulo.toFixed(3));
