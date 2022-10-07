let loop = true;

while (loop){ 
function retornaCelsius(entrada) {
return (entrada - 32) / 1.8;
}

function retornaFahrenheit(entrada) {
return (entrada * 1.8 + 32);
}

//introdução para o usuário
  
console.log("Escolha uma das opções abaixo:");
console.log("---------------------------------------------------------")
console.log("Opção 1: transformar graus Celsius em graus Fahrenheit.");
console.log("Opção 2: transformar graus Fahrenheit em graus Celsius");
console.log("---------------------------------------------------------")
console.log();

//usuário escolhe o que quer converter

let vOpcao = parseInt(prompt("Número da opção "));
console.log();
while (isNaN(vOpcao)) {
  console.log("1 ou 2");
  vOpcao = parseInt(prompt("Número da opção "))
}

//calculo da conversão, dependente da opção do usuário
if (vOpcao == 1) {
  vGrau = parseInt(prompt("Insira a temperatura em Celsius:"))
  while (isNaN(vGrau)) {
  console.log("O valor deve ser númerico");
  vGrau = parseInt(prompt("Insira a temperatura em Celsius:"));
}
  vResposta = retornaFahrenheit(vGrau);
  console.log();
  console.log(vGrau, "graus Celsius equivale a", vResposta.toFixed(2), "Fahrenheit.");
  
} else if (vOpcao == 2) {
  vGrau = parseInt(prompt("Insira a temperatura em Fahrenreit:"))
  while (isNaN(vGrau)) {
  console.log("O valor deve ser númerico");
  vGrau = parseInt(prompt("Insira a temperatura em Fahrenreit:"));
}
  vResposta = retornaCelsius(vGrau);
  console.log();
  console.log(vGrau, "graus Fahrenheit equivale a", vResposta.toFixed(2), "em Celsius.");
  
} else {
  console.log("Resposta inválida");
}
  
console.log();
console.log("Quer converter novamente?")
let desligaLoop = parseInt(prompt("Digite 1 para SIM. Digite 2 para NÃO."));
  while(isNaN(desligaLoop)){
    console.log("A resposta deve ser numérica.")
    desligaLoop = parseInt(Prompt("Digite 1 para SIM. Digite 2 para NÃO."))
  }
 if(desligaLoop === 2){
   console.clear();
   loop = false;
   console.log("Até mais.")
 } else {
   console.clear();
  
 }
}