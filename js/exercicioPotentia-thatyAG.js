console.log("ensira um valor");
let base = prompt("");
base = parseInt(base);
console.log("ensira um espoente");
let expo = prompt("");
expo = parseInt(expo);
let resultado = 1;

for (let i = 1; i <= expo; i++) {
  resultado = base * resultado
  console.log(resultado)
};