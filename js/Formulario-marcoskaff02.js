let nome = prompt("Digite seu nome");
while (nome.length <= 3) {
  nome = prompt("Digite seu nome");
}
let idade = parseInt(prompt("Digite sua idade"));
while (idade <= 0 || idade > 150) {
  idade = parseInt(prompt("Digite sua idade"));
}
let salario = parseFloat(prompt("Informe o seu salário"));
while (salario <= 0) {
  salario = parseFloat(prompt("Informe o seu salário"));
}
let sexo = prompt("Informe o sexo f/m");
while (sexo !== "f" && sexo !== "m") {
  sexo = prompt("Informe o sexo f/m");
}
let estadoCivil = prompt("Informe seu estado civil s/c/v/d ");
while (estadoCivil !== "s" && estadoCivil !== "c" && estadoCivil !== "v" & estadoCivil !== "d"){
  estadoCivil = prompt("Informe seu estado civil s/c/v/d ");
}