alert("1-celcius para farenheite");
alert("2-farenheite para celcius");
let opc = prompt("escolha");
opc = parseInt(opc);
let temperatura = prompt("insira temperatura");
temperatura = parseInt(temperatura);
if (opc === 1) {
  alert(temperatura * 1.8 + 32);
} else if (opc === 2) {
  alert((temperatura - 32) / 1.8);
} else {
  alert("opçao invalida");
};