let base = parseInt(prompt("Insira um valor para a base"));
let expo = parseInt(prompt("Insira um valor para o expoente"));
let resultado = 1;

for (let i = 1; i <= expo; i++) {
  resultado = resultado * base;
  //alert(resultado);
};

alert(resultado);