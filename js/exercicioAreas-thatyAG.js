const PI = 3.14159;

console.log("ensira lavor A");
let a = prompt("");
a = parseFloat(a);
console.log("ensira valor B");
let b = prompt("");
b = parseFloat(b);
console.log("ensira valor C");
let c = prompt("");
c = parseFloat(c);

let triangulo = (a * c) / 2;
let circulo = (PI) * c ** 2;
let trapezio = (a + b) * c / 2;
let quadrado = b * b;
let retangulo = a * b;

console.log("triangulo: ", triangulo.toFixed(3));
console.log("circulo: ", circulo.toFixed(3));
console.log("trapezio: ", trapezio.toFixed(3));
console.log("quadrado: ", quadrado.toFixed(3));
console.log("retangulo: ", retangulo.toFixed(3));