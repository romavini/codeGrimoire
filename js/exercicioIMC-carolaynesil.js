const nome = prompt("Como é o seu nome");
const peso = parseInt(prompt("Qual é o seu peso"));
const altura = parseFloat(prompt("Qual é a sua altura?"));

IMC = peso / altura ** 2

if (IMC < 18.5) { console.log("Você está Abaixo do Peso Recomendo uma Nutricionista") }
else if (IMC <= 24.9) { console.log("Você está com o Peso Ideal Continue assim") }
else if (IMC <= 29.9) { console.log("Você está Sobrepeso Recomendo uma Prática de Exercícios Físicos") }
else if (IMC <= 34.9) { console.log("Você está com Obesidade Grau I Faça caminhada todos os dias") }
else if (IMC <= 39.9) { console.log("Você está com Obesidade Grau II Recomendo ir ao médico") }
else if (IMC > 40.0) { console.log("Você está com OBESIDADE GRAU III Vá ao médico urgentemente") }