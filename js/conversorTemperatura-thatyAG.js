console.log("1 celcius para fahrenheit, 2 fahrenheit para celcius");
function celciusparaFahrenheit(grauc) {
  return grauc * 1.8 + 32;
};
function fahrenheitparaCelcius(grauf) {
  return (grauf - 32) / 1.8;
};

let operaçao = prompt("escolha uma funcionalidade");
operaçao = parseFloat(operaçao)
console.log("ensira uma temperatura");
let temperatura = prompt("");
temperatura = parseFloat(temperatura);

if (operaçao === 1) {
  // celcius para fahrenheit
  opiçao1 = celciusparaFahrenheit(temperatura)
  console.log(opiçao1)
} else if (operaçao === 2) {
  //fahrenheit para celcius
  opiçao2 = fahrenheitparaCelcius(temperatura)
  console.log(opiçao2)
} else {
  "operaçao invalida"
  console.log("operaçao invalida")
};