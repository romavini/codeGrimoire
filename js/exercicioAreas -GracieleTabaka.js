const PI = 3.14159;

let ValorA = parseFloat(prompt("insira o valor de 'A'"));
let ValorB = parseFloat(prompt("insira o valor de 'B'"));
let ValorC = parseFloat(prompt("insira o valor de 'C'"));

AreaTriangulo = (ValorA * ValorC)/2;
AreaCirculo = PI * (ValorC**2);
AreaTrapezio = ((ValorA + ValorB) * ValorC) / 2;
AreaQuadrado = ValorB**2;
AreaRetangulo = ValorA * ValorB;

console.log("TRIANGULO:", AreaTriangulo.toFixed(3));
console.log("CIRCULO:", AreaCirculo.toFixed(3));
console.log("TRAPEZIO:", AreaTrapezio.toFixed(3));
console.log("QUADRADO:", AreaQuadrado.toFixed(3));
console.log("RETANGULO:", AreaRetangulo.toFixed(3));