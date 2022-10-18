console.log("Escolha o intervalo que você deseja identificar os numeros pares");
let numbF = parseInt(prompt("qual o primeiro numero do intervalo?:"));
let numbE = parseInt(prompt("qual o ultimo numero do intervalo?:"));

if (numbF < numbE) {
  for (let i = numbF; i <= numbE; i++) {
    if (i % 2 === 0) {
      alert(i);
    }
  }

} else if (numbF > numbE) {
  for (let i = numbF; i >= numbE; i--) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
};