const valor = parseInt(prompt("Insira o valor para saber o fatorial"));
let valorFatorial = 1;

if (valor === 0) {
  console.log(valor + "! =", 1);
} else if (valor > 0) {
  for (let i = 1; i <= valor; i++) {
    valorFatorial *= i;

  };
  console.log(valor + "! =", valorFatorial);

} else {
  console.log("Não existe fatorial nagativo");
};
