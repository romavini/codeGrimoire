
let penultimo = 0;
let ultimo = 1;

let numeroFibo;

console.log("Digite até qual passo da sequência Fibonacci você quer ver.")
const passo = parseInt(prompt("Passo"))

console.log()
for (let i = 0; i <= passo; i++) {
  if (i <= 1) {
    console.log(i)
  } else {
    numeroFibo = ultimo + penultimo;
    console.log(numeroFibo);
    penultimo = ultimo;
    ultimo = numeroFibo;

  }
}