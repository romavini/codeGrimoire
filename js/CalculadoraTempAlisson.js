function temperaturaCelsius(temperatura){
    return temperatura * 1.8 +32
  }
  
  function temperaturaFah(temperatura){
    return (temperatura - 32) / 1.8
  }
  
  let temperatura = parseFloat(prompt("valor da temperatura"))
  while (isNaN(temperatura) ){
    console.log("Valor de temperatura invalido, só numeros são validos")
    temperatura = parseFloat(prompt("valor da temperatura"))
  }
  let originalT = parseFloat(prompt("Digite 1 para tranformar de Celsius para Fahrenheit ou 2 de Fahrenheit para Celsius"))
  while (originalT != 1 && originalT != 2 && isNaN(originalT)) {
    console.log("Valor de conversão errado, valores aceitos é 1 ou 2!!!!")
    originalT = parseInt(prompt("Digite 1 para tranformar de Celsius para Fahrenheit ou 2 de Fahrenheit para Celsius"))
  }
  if (originalT == 1){
    let temperaturaFah = temperaturaCelsius(temperatura)
    console.log("Sua temperatura em Fahrenheit é: " + temperaturaFah)
  } else if (originalT == 2 ){
    let temperaturaCelsius = temperaturaFah(temperatura)
    console.log("Sua temperatura em Celsius é: " + temperaturaCelsius)
  }
  