let soma = 0;
for (let bimestre = 1; bimestre <= 4; bimestre++) {
  console.log(bimestre + "º", "bimestre");

  //Recebe a nota do bimestre pela primeira vez
  const nota = parseFloat(prompt("Nota do " + bimestre + "º " + "bimestre"));

  //Pede a nota novamente se necessário
  while (nota < 0 || nota > 100 || isNaN(nota)) {
    nota = parseFloat(prompt("Erro, insira novamente a nota do " + bimestre + "º " + "bimestre"));
  }

  //Guarda a soma das notas para o cálculo da média
  soma = soma + nota;
  media = soma / 4;
};
if (media >= 70) {
  console.log("Parabéns! Você foi aprovado! Sua média foi:" + media);
} else {
  console.log("REPROVADO! 😠 Sua média foi:" + media);
}