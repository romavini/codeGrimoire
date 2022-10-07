let fatorial = parseInt(prompt("Insira o valor para o fatorial"));
let resultado = 1;

for (let i = 1; i <= fatorial; i++) {
  resultado = resultado * i;
};
alert(resultado);