rodando = true;
while(rodando){
console.log("Conversão de Celsius e Fahrenheit \n1 - Fahrenheit para Celsius \n2 - Celsius para Fahrenheit ");
let opc = prompt("Insira a opção");
function tempcelcius(graus){
return Math.round((graus - 32) * 5 / 9)
};
function tempfar(graus){
return Math.round((graus * 1.8) + 32)
};
if (opc == 1) {
console.log("selecionado Fahrenheit para Celsius");
  let graus = parseFloat(prompt('insira a temperatura ='));
  let celcius = tempcelcius(graus);
  console.log(celcius + "° graus celsius");
} else if(opc == 2){
  console.log("selecionado Celsius para Fahrenheit");
  let graus = parseFloat(prompt('insira a temperatura ='));
fare = tempfar(graus);
  console.log(fare + "° graus Fahrenheit");
} else {
console.log('como errou isso infeliz');
  console.log("⠀⠀⠀⠀⠀⠀⠀⣀⠤⠒⠒⠒⢤⣀⠤⠄⠠⢤⠀⠀⠀⠀⠀⠀")
console.log("⠀⠀⠀⠀⠀⢀⠞⠁⠠⠔⠒⠒⠒⢵⡤⠤⠤⠤⠧⣀⠀⠀⠀⠀")
console.log("⠀⠀⠀⠀⡤⡞⠀⠀⣀⡠⠔⣂⣉⡭⠽⣒⣊⡭⣭⡭⢕⡄⠀⠀")
console.log("⠀⠀⠀⡜⠀⠀⠀⠀⠉⢛⠭⣰⣿⣿⣦⠯⠤⠼⠿⠿⡴⠃⠀⠀")
console.log("⠀⠀⡼⠀⠀⠀⠀⠀⠀⠀⠉⠽⠛⠋⠁⠐⠢⠔⠒⢮⠀⠀⠀⠀")
console.log("⠀⠀⠃⠀⠀⠀⠀⢀⡤⠤⡤⣄⣀⣀⡀⠀⣠⢦⢀⡠⢧⠀⠀⠀")
console.log("⠀⠀⢣⡀⠀⠀⠀⢼⣶⡍⡏⢹⣐⣒⣒⣳⢯⢹⣒⣲⠋⠀⠀⠀")
console.log("⠀⠀⠀⢈⡲⠤⠤⣀⡇⡧⡇⣸⠚⡇⢀⡇⠀⢸⠀⠀⠀⠀⠀⠀")
console.log("⠀⣠⠚⠉⠀⠀⠀⢠⠇⠁⠥⢸⠀⡇⠀⡇⢰⢸⠀⠀⠀⠀⠀⠀")
console.log("⠴⠁⠀⠀⠀⠀⠀⢸⢀⡀⢀⠀⠀⢰⢠⠃⠈⡎⡗⢤⣀⠀⠀⠀")
console.log("⠀⠀⠀⠀⠀⠀⠀⠼⠀⠀⠀⠀⠀⠸⠜⠀⠀⠠⠇⠀⠀⠉⠑⠢")
};
console.log("deseja fazer outra conversão? \n1 - Sim \n2 - Não");
x = prompt("")
if(x == 1 ){
  rodando = true
}else{
  rodando = false
};
              };
