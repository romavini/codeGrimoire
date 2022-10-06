const PI = 3.14159;
const constA = parseFloat(prompt("Insira valor de \"A\" em Metros"));
const constB = parseFloat(prompt("Insira valor de \"B\" em Metros"));
const constC = parseFloat(prompt("Insira valor de \"C\" em Metros"));

const areaTri = (constA * constC) / 2;
const areaCirc = (constC ** 2) * PI;
const areaTrapez =  (constA + constB) * constC / 2;
const areaQuadra = constB ** 2;
const areaRetan = constA * constB;

console.log(areaTri.toFixed(3));
console.log(areaCirc.toFixed(3));
console.log(areaTrapez.toFixed(3));
console.log(areaQuadra.toFixed(3));
console.log(areaRetan.toFixed(3));
