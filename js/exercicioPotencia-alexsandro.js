const base = parseFloat(prompt("insira um número de base"));
const expoente = parseFloat(prompt("insira um número expoente"));

let resultado = 1;

for (let i = 1; i <= expoente; i++) {
  resultado = base * resultado
}
console.log(resultado);
