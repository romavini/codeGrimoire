function retornaFahrenheit(temp){
    return temp * 1.8 + 32;
  }
  function retornaCelsius(temp){
    return (temp - 32) / 1.8;
  }
  
  
  console.log("Conversor de Celsius e Fahrenheit\n1 - Celsius para Fahrenheit\n2 - Fahrenheit para Celsius\n");
  
  let opc = parseFloat(prompt("Insira uma opção:"));
  
  while (opc !== 1 && opc !== 2){
    opc = parseFloat(prompt("Erro, insira uma opção válida!"));
  }
  
  let temp = parseFloat(prompt("Insira a temperatura a ser convertida"));
  
  if (opc === 1){
    let fahrenheit = retornaFahrenheit(temp);
    console.log("A temperatura em Fahrenheit é: " + fahrenheit.toFixed(1) + "F");
    
  } else if (opc === 2){
    let celsius = retornaCelsius(temp);
    console.log("A temperatura em Celsius é: " + celsius.toFixed(0) + "ºC");
  }