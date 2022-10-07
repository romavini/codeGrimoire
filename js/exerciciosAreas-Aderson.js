const pi = 3.14159;
let a = parseFloat(prompt("Insira um valor para representar A"));
let b = parseFloat(prompt("Insira um valor para representar B"));
let c = parseFloat(prompt("Insira um valor para representar C"));
console.log()////apenas para dar espaço na apresentação////

console.log("A área do triângulo retângulo que tem A por base e C por altura.")
let triangulo = ((a * c) / 2) //base * altura / 2
console.log("Triângulo", triangulo.toFixed(3))
console.log()////apenas para dar espaço na apresentação////

console.log("A área do círculo de raio C.")
let circulo = pi * c ** 2 //pi * r²
console.log("Círculo", circulo.toFixed(3))
console.log()////apenas para dar espaço na apresentação////

console.log("A área do trapézio que tem A e B por bases e C por altura.")
let trapezio = ((a + b) * c) / 2 //BASE + base * altura /2
console.log("Trapézio", trapezio.toFixed(3))
console.log()////apenas para dar espaço na apresentação////

console.log("A área do quadrado que tem lado B")
let quadrado = b ** 2// largura²
console.log("Quadrado", quadrado.toFixed(3))
console.log()////apenas para dar espaço na apresentação////

console.log("A área do retângulo que tem lados A e B.")
let retangulo = a * b // base *  altura
console.log("Retângulo", retangulo.toFixed(3))
console.log()////apenas para dar espaço na apresentação////