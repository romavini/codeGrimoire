/////////////IMC//////////////////////////////
console.log("CALCULADORA DO ÍNDICE DE MASSA CORPORAL (IMC)\n");
console.log("Quer se identificar")
let apresentacao = prompt("S ou N ").toUpperCase();
console.log()//apenas para espaço
let nome = "Anônimo".toUpperCase()

if (apresentacao === "N") {
  console.log("Ok, vamos continuar\n")
} else if (apresentacao === "S") {
  nome = prompt("Qual seu nome? ").toUpperCase();
  console.log()//apenas para espaço
} else {
  console.log("Use S para se apresentar ou N para continuar sem apresentações")
}
console.log()//apenas para espaço

const peso = parseFloat(prompt("Qual seu peso (Kg) "));
console.log()//apenas para espaço
const altura = parseFloat(prompt("Qual sua altura (cm) "));
console.log()//apenas para espaço
const sexo = prompt("Qual seu sexo (M ou F) ").toUpperCase();
console.log()//apenas para espaço


//calculo IMC
const imc = parseFloat((peso / (altura ** 2) * 10000));
console.log()//apenas para espaço
console.log("Seu IMC é", imc.toFixed(2));

console.log("Quer saber qual classificação seu IMC está?");
const informacao = prompt("S ou N ").toUpperCase();
console.log()//apenas para espaço

if (informacao === "N") {
  console.log("Obrigado, até a proxima!")
} else if (informacao === "S") {
  ////////MASCULINO////////////
  if (sexo === "M") {
    if (imc >= 43) {
      console.log(nome, "Obesidade Grau III, o seu peso é índice de obesidade mórbida, o que poderá trazer agravamentos à sua saúde. Consulte o seu médico para conseguir ajuda.");
    }
    else if (imc >= 30) {
      console.log(nome + ",", "Obesidade Grau II, de acordo com o seu IMC, tem excesso de peso. Consulte o seu médico de família para iniciar uma programa de perda de peso e melhorar a sua saúde.");
    }
    else if (imc >= 25) {
      console.log(nome, "Obesidade Grau I, tem algum excesso de peso em relação à sua altura. Comece por praticar exercício físico adequado, e melhorar os seus hábitos alimentares. A mudança está nas suas mãos!");
    }
    else if (imc >= 20) {
      console.log(nome, "Peso Normal, de acordo com o cálculo do IMC, o seu peso está dentro da normalidade. Mantenha-o, seguindo uma dieta adequada e a praticando exercício físico com alguma regularidade.");
    }
    else {
      console.log(nome, "Abaixo do peso, segundo o cálculo do IMC, o cálculo entre o seu peso e altura é abaixo do recomendado. Este valor pode ser um indicativo de alguma carência nutricional.");
    }
  }

  ////////FEMININO////////////
  else if (sexo === "F") {
    if (imc >= 39) {
      console.log(nome, "Obesidade Grau III, o seu peso é índice de obesidade mórbida, o que poderá trazer agravamentos à sua saúde. Consulte o seu médico para conseguir ajuda.");
    }
    else if (imc >= 29) {
      console.log(nome, "Obesidade Grau II, de acordo com o seu IMC, tem excesso de peso. Consulte o seu médico de família para iniciar uma programa de perda de peso e melhorar a sua saúde.");
    }
    else if (imc >= 24) {
      console.log(nome, "Obesidade Grau I, tem algum excesso de peso em relação à sua altura. Comece por praticar exercício físico adequado, e melhorar os seus hábitos alimentares. A mudança está nas suas mãos!");
    }
    else if (imc >= 19) {
      console.log(nome, "Peso Normal, de acordo com o cálculo do IMC, o seu peso está dentro da normalidade. Mantenha-o, seguindo uma dieta adequada e a praticando exercício físico com alguma regularidade.");
    }
    else {
      console.log(nome, "Abaixo do peso, segundo o cálculo do IMC, o cálculo entre o seu peso e altura é abaixo do recomendado. Este valor pode ser um indicativo de alguma carência nutricional.");
    }
  }
  else {
    console.log("Campo sexo informado incorretamente, use M para masculino e F para feminino");
  }

}
else {
  console.log("Use S para saber sua classificação ou N para  não saber sua classificação");
}
