const PI = 3.14159;
A = parseFloat(prompt("A"));
B = parseFloat(prompt("B"));
C = parseFloat(prompt("C"));
console.log("triangulo:"+ ( A * C / 2).toFixed(3) );
console.log("circulo:",( PI * C ** 2).toFixed(3));
console.log("trapezio:", ((A + B) * C / 2).toFixed(3))
console.log("quadrado:",(B * B).toFixed(3));
console.log("retangulo:",(A * B).toFixed(3));
