const v1 = parseInt(prompt("Insira o valor inicial"));
const v2 = parseInt(prompt("Insira o valor final")); 
let contador = v1;

if (v1 < v2) {
  diferenca = v2 - v1
} else {
  diferenca = v1 - v2
}
for (let i = 0; i <= diferenca; i++) {
  if (contador % 2 === 0) {
    console.log(contador);
  }
  if (v1 < v2) {
    contador++;
  } else {
    contador--;
  }
}