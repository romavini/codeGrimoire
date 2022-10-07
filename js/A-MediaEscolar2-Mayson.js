let notas = 0;
let totalNotas = 0;
let recomecar = true;

while (recomecar == true) {
  alert("              CALCULADORA DE MÉDIAS")
  alert("----------------------------------------------")
  
  let qtdNotas = parseInt(prompt("Qual a quantidade de notas a serem informadas ="))
  
  while (qtdNotas < 2 || isNaN(qtdNotas)) {
    console.log("\nA quantidade de nota não pode ser vazio ou menor que 2");
    qtdNotas = parseInt(prompt("Informe a quantidade de notas a serem informadas ="))
  }

  for (let nota = 1; nota <= qtdNotas; nota++) {
    notas = parseFloat(prompt("- Informe a nota " + nota + " ="));
    while (notas < 0 || notas > 100 || isNaN(notas)) {
      alert("\n** Nota não pode ser menor que 0 e/ou maior 100 **\n");
      notas = parseFloat(prompt("- Informe a nota " + nota + " ="));
    }
    totalNotas += notas;
  }

  const media = totalNotas / qtdNotas;

  alert("- A média das notas informadas é => " + media);

  if (media < 70) {
    alert("-------------------------------------------------")
    alert("- Média insuficiente para aprovação (REPROVADO)\n");
  } else {
    alert("----------------------------------------------")
    alert("- Média suficiente para aprovação (APROVADO)\n");
  };


  let resp = prompt("N + enter para sair ou enter para novamente");

  if (resp.toUpperCase() === "N") {
    alert("\nAté a próxima!")
    recomecar = false;
  };
};
