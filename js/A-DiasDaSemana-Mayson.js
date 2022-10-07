console.log("Informe um número de 1 a 7:");
const numberDay = parseFloat(prompt(""));

if (numberDay === 1){
  console.log("Domingo");
}else if (numberDay === 2){
  console.log("Segunda");
}else if (numberDay === 3){
  console.log("Terça");
}else if (numberDay === 4){
  console.log("Quarta");
}else if (numberDay === 5){
  console.log("Quinta");
}else if (numberDay === 6){
  console.log("Sexta");
}else if (numberDay === 7){
  console.log("Sábado");
}else{
  console.log("Você não informou um valor válido.");
};