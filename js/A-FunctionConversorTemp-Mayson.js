function celsius_fahren(temp) {
    return temp * 1.8 + 32;
  };
  
  function fahren_celsius(temp) {
    return (temp - 32) / 1.8;
  };
  
  console.log("Conversão de Celsius e Fahrenheit");
  console.log("=================================");
  
  let valorTemp = parseFloat(prompt("Informe o valor para conversão ="));
  
  while (isNaN(valorTemp)) {
    console.log("Para temperatura apenas números");
    valorTemp = parseFloat(prompt("Informe o valor para conversão ="));
  };
  
  console.log("=================================");
  console.log("1 - Celsius para Fahrenheit");
  console.log("2 - Fahrenheit para Celsius");
  
  let qtemp = parseInt(prompt("    Insira a opção ="));
  
  while (qtemp != 1 && qtemp != 2) {
    console.log("=================================");
    console.log("1 - Celsius para Fahrenheit");
    console.log("2 - Fahrenheit para Celsius");
    qtemp = parseInt(prompt("    Insira a opção ="));
  };
  
  if (qtemp === 1) {
    console.log("=================================");
    console.log("   ", celsius_fahren(valorTemp).toFixed(2), "Fahrenheit");
  }
  else if (qtemp === 2) {
    console.log("=================================");
    console.log(fahren_celsius(valorTemp).toFixed(2), "Celsius");
  };