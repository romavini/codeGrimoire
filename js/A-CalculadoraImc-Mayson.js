console.log("Olá! Vamos calcular seu índice de Massa Corpórea (IMC)?")

const nome = prompt("Informe seu nome");
const peso = parseFloat(prompt("Me informe seu peso"));
const altura = parseFloat(prompt("Me informe sua altura"));
const sexo = prompt("Me informe seu sexo (M ou F)");

const imc = (peso / altura ** 2);

if (sexo === "M" || sexo === "m") {
  if (imc >= 39) {
    console.log(nome, ", obesidade Grau III, seu IMC é", imc);
  }
  else if (imc >= 29) {
    console.log(nome, ", obesidade Grau II, seu IMC é", imc);
  }
  else if (imc >= 24) {
    console.log(nome, ", obesidade Grau I, seu IMC é", imc);
  }
  else if (imc >= 19) {
    console.log(nome, ", peso Normal, seu IMC é", imc);
  }
  else {
    console.log(nome, ", abaixo do peso, seu IMC é", imc);
  }
}

else if (sexo === "F" || sexo === "f") {
  if (imc >= 43) {
    console.log(nome, ", obesidade Grau III, seu IMC é", imc);
  }
  else if (imc >= 30) {
    console.log(nome, ", obesidade Grau II, seu IMC é", imc);
  }
  else if (imc >= 25) {
    console.log(nome, ", obesidade Grau I, seu IMC é", imc);
  }
  else if (imc >= 20) {
    console.log(nome, ", peso Normal, seu IMC é", imc);
  }
  else {
    console.log(nome, ", abaixo do peso, seu IMC é", imc);
  }
}

else {
  console.log("Campo sexo informado incorretamente")
};