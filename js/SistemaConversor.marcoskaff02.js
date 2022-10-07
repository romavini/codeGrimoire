function retornaCelsius(fahrenheit) {
    return (fahrenheit - 32) / 1.8;
  };
  function retornaFahrenheit(celsius) {
    return (celsius * 1.8) + 32;
  };
  
  let temperatura = prompt("Informe a temperatura utilizada. C/F").toUpperCase();
  if (temperatura === "C") {
    let valorCelsius = parseFloat(prompt("Informe o valor"));
    let valorConvertidoF = retornaFahrenheit(valorCelsius);
    console.log("O valor da temperatura é:", valorConvertidoF);
  } else if (temperatura === "F") {
    let valorFahrenheit = parseFloat(prompt("Informe o valor"));
    let valorConvertidoC = retornaCelsius(valorFahrenheit);
    console.log("O valor da temperatura é:", valorConvertidoC);
  };