let rodando = true
while (rodando) {

  console.log(" selecione a conversor de temperatura\n1 - Farenheit > Celcius \n2 - Celcius > Farenheit");
  let escolha = parseInt(prompt('insira sua escolha ='));
  for(i = 0; escolha != 1 && escolha != 2; i++){
    console.log("NUMERO INVALIDO!");
    console.log(" selecione a conversor de temperatura\n1 - Farenheit > Celcius \n2 - Celcius > Farenheit");
    escolha = parseInt(prompt('insira sua escolha ='));
  }
  let graus = parseFloat(prompt('insira a temperatura ='));

    function tempcelcius() {
      return Math.round((graus - 32) * 5 / 9)
    };

    function tempfar() {
      return Math.round((graus * 1.8) + 32)
    };

    if (escolha == 1) {
      let celcius = tempcelcius();
      console.log(celcius + " graus celsius");
    }
    else if (escolha == 2) {
      fare = tempfar()
      console.log(fare + " graus Farenheit");
    };


  };
  console.log("deseja fazer outra conversão? '1' para sim '2'para não")
  x = prompt("");
  if (x == 2) {
    rodando = false
  }
