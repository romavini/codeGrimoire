const PI = 3.14159;
const A = parseFloat(prompt("A:"));
const B = parseFloat(prompt("B:"));
const C = parseFloat(prompt("C:"));

const Tri = A * C / 2;
const Cir = PI * C ** 2;
const Tra = (A + B) * C / 2;
const Qua = B ** 2;
const Ret = A * B;
console.log("TRIÂNGULO: " + Tri.toFixed(3), "\nCÍRCULO: " + Cir.toFixed(3), "\nTRAPÉZIO: " + Tra.toFixed(3), "\nQUADRADO: " + Qua.toFixed(3), "\nRETANGULO: " + Ret.toFixed(3));