function conversaoFahrenheit(celsius) {
    return celsius * 1.8 + 32
  };
  function conversaoCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  };
  
  console.log("Conversão de temperatura!!!");
  let temp = parseFloat(prompt("Insira a Temperatura"));
  while (isNaN(temp)) {
    console.log("Insira apenas números para temperatura");
    temp = parseFloat(prompt("="));
  }
  console.log("Digite 1 para transformar °Celsius em °Fahrenheit");
  console.log("Digite 2 para transformar °Fahrenheit em °Celsius");
  let opcao = parseInt(prompt("Escolha uma opção"));
  
  while (opcao != 1 && opcao != 2) {
    console.log("Digite apenas 1 ou 2");
    console.log("Digite 1 para transformar °Celsius em °Fahrenheit");
    console.log("Digite 2 para transformar °Fahrenheit em °Celsius");
    opcao = parseInt(prompt("Escolha uma opção"))
  }
  
  
  if (opcao == 1) {
    //°Fahrenheit
    let celFah = conversaoFahrenheit(temp);
    console.log("Sua temperatura em Fahrenheit é", celFah.toFixed(2), ("°"));
  }
  else if (opcao == 2) {
    //°Celsius
    let fahCel = conversaoCelsius(temp);
    console.log("Sua temperatura em Celsius é", fahCel.toFixed(2), ("°"));
  }
  else {
    console.log("Opção invalida insira 1 ou 2");
  }