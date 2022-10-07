function CelsiusParaFahrenheit(celsius) {
    return celsius * 1.8 + 32
  }
  function FahrenheitParaCelsius(Fahrenheit) {
    return (Fahrenheit - 32) / 1.8
  }
  
  console.log("Para conversão de Celsisus para Fahrenheit digite 1 ou digite 2 para conversão de fahrenheit para Celsius")
  let escolha = parseInt(prompt(""))
  
  if (escolha == 1) {
    let celsius = parseFloat(prompt("insira valor de celsius"))
    console.log(CelsiusParaFahrenheit(celsius))
  } else if (escolha == 2) {
    fahrenheit = parseFloat(prompt("insira valor de fahrenheit"))
    console.log(FahrenheitParaCelsius(fahrenheit))
  }