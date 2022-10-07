function retornaTempFahrenheitxCelsius(temperatura) {
    return ((temperatura - 32) / 1.8)
  }
  function retornaTempClesiusxFarenheit(temperatura) {
    return (temperatura * 1.8 + 32);
  }
  
  let TemperaturaUsuario = parseFloat(prompt("Temperatura"));
  let opc = parseFloat(prompt("Escolha uma opção: 1 para F, 2 para C"));
  
  if (opc === 1) {
    let TemperaturaFarehnheit = retornaTempClesiusxFarenheit(TemperaturaUsuario)
    console.log(TemperaturaFarehnheit)
  } else if (opc === 2) {
    let TemperaturaCelsius = retornaTempFahrenheitxCelsius(TemperaturaUsuario)
    console.log(TemperaturaCelsius)
  };
  