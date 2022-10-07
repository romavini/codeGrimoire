alert("Qual tabuada você deseja conferir?");
const num1 = parseFloat(prompt("Numero:"));
alert("Qual intervalo da tabuado você deseja ver?");
const inicio = parseFloat(prompt("primeiro valor do intervalo:"));
const final = parseFloat(prompt("Segundo valor do invervalo:"));

let inicialM = inicio

if (inicio < final) {
  diferenca = final - inicio
} else {
  diferenca = inicio - final
}

for (let i = 0; i <= diferenca; i++) {

  alert(inicialM * num1);
  {
    if (inicio < final) {
      inicialM++;
    } else {
      inicialM--;
    }
  }
};