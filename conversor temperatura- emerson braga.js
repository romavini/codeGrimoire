function celsiusParaFahrenheit (celsius){
    return celsius * 1.8 + 32  
  }
  function FahrenheitParaCelsius(fahrenheit){
    return (fahrenheit - 32) / 1.8
  }
  
  console.log("para conversao de celsius para fahrenheit digite 1 ou digite 2 para conversao de fahrenheit para celsius")
  let escolha = parseInt(prompt(""))
  if (escolha == 1 ){
    let celsius = parseFloat(prompt("insira valor celsius"))
    console.log(celsiusParaFahrenheit(celsius))
  }
  else if (escolha == 2 ){
    let fahrenheit = parseFloat(prompt("insira valor Fahrenheit"))
    console.log (FahrenheitParaCelsius(fahrenheit))
  }