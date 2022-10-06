alert("Sequência Fibonacci");
let qtd = parseInt(prompt("Tamanho da sequência"));
let fim = 1;
let antesFim = 0;
let resultado;

for (let i = 0; i < qtd; i++) {
  if (i <= 1) {
    alert(i);
  } else {
    resultado = fim + antesFim;
    antesFim = fim;
    fim = resultado;
    alert(fim);
  };
};