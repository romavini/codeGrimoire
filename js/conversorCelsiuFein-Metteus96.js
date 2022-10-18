restart = true;
while (restart) {
  function conversaoFahrenheit(celsius) {
    return celsius * 1.8 + 32;
  };
  function conversaoCelsius(Fahrenheit) {
    return (Fahrenheit - 32) * 5 / 9;
  };

  console.log("Precione 1 para converter Celsius para Fahrenheit\nPrecione 2 para converter Fahrenheit para Celsius");

  let opcao = parseInt(prompt("Opção:"));
  while (opcao !== 1 && opcao !== 2 || isNaN(opcao)) {
    console.log("Opção invalida!!!");
    opcao = parseInt(prompt("selecione um Opção valida:"));
  };

  let temperatura = parseFloat(prompt("Temperatura:"));
  while (isNaN(temperatura)) {
    console.log("Opção invalida!!!");
    temperatura = parseFloat(prompt("Selecione uma Temperatura:"));
  };

  if (opcao === 1) {
    let convFahren = conversaoFahrenheit(temperatura);
    console.log(temperatura + "ºC em Fahrenheit é", convFahren.toFixed(2) + "ºF");
  } else if (opcao === 2) {
    let convCelsius = conversaoCelsius(temperatura);
    console.log(temperatura + "ºF em Celsius é", convCelsius.toFixed(2) + "ºC");
  };
  console.log("Deseja fazer uma nova converção?\nPrecione [Enter] para sim\nE \"N\" para não")
  restart = prompt("opção:")
  if (restart.toUpperCase() === "N") {
    console.log("See U Later S2!!!")
    restart = false
  } else {
    restart = true
  };
};