function coverterparacelcius(temperatura) {
    return (temperatura * 1.8 + 32)
  }
  function converterparaFahrenhei(temperatura) {
    return (temperatura - 32 / 1.8)
  }
  console.log("1 para converter para celcius");
  console.log("2 para converter para Fahrenheit");
  let opc = prompt("opc");
  opc = parseInt(opc);
  let temperatura = prompt("insira temperatura");
  temperatura = parseInt(temperatura);
  if (opc === 1) {
  let celcius =  coverterparacelcius(temperatura)
    console.log(celcius)
  
  } else if (opc === 2) {
  let Fahrenheit =  converterparaFahrenhei(temperatura)
  console.log(Fahrenheit)  
    
  
  }
  