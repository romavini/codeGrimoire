let nome = prompt("Nome do aluno")
let soma = 0
for (let bimestre = 1; bimestre < 5; bimestre++) {
  nota = parseFloat(prompt("Nota do bimestre " + bimestre + ":"));
  while (nota < 0 || nota > 100 || isNaN(nota)) {
    nota = parseInt(prompt("Nota do bimestre " + bimestre + ":"));
  }
  soma = soma + nota
}
const MED = soma / 4

if (MED >= 70) {
  alert("Sua média é: " + MED + ", " + nome + ", você foi aprovado");

}
else if (MED >= 50) {
  alert("Sua média é: " + MED + ", " + nome + ", você esta de exame");

} else {
  alert("Sua média é: " + MED + ", " + nome + ", PARABENS!!! você foi reprovado");

};
