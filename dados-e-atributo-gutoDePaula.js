function apresentarInstruções() {
    console.log("-----------------------------------------------------------------")
    console.log("                            INSTRUÇÕES"                           )
    console.log("-----------------------------------------------------------------")
    console.log("Vamos rolar os dados para gerar os atributos do seu personagem.");
    console.log("\u001b[31mForça\u001b[0m, \u001b[32mDestreza\u001b[0m, \u001b[33mConstituição\u001b[0m, \u001b[34mInteligência\u001b[0m, \u001b[35mSabedoria\u001b[0m, \u001b[36mCarisma\u001b[0m.");
    prompt("");
    console.log("Cada atributo é gerado pela rolagem de quatro dados de seis lados, sendo o menor deles é descartado.");
    console.log("Quanto maior o resultado dos 3 maiores dados, melhor o atributo.")
    prompt("");
    console.log("Repetimos isso seis vezes, uma vez para cada atributo:");
    prompt("");
    console.log("VOCÊ ESCOLHE qual dos seis valores vai colocar em cada atributo.");
    console.log("Caso o valor fique muito baixo, você poderá rolar novamente o atributo mais baixo.");
    prompt("");
    prompt("Vamos começar.");
    prompt("");
    console.clear();
  }
  
  function escolherModo(){
   console.log("Clássico: Você lança 3 dados e soma o resultado deles.")
   console.log("Padrão: Você rola 4 dados, soma os 3 maiores e ignore o menor.")
   console.log("Heróico: Você lança 2 dados, acrescente 6 à soma deles.")
    
  }
  
  function rolarDadosAtributo(contador) {
    
    let dado1 = parseInt(1 + Math.random() * 6);
    let dado2 = parseInt(1 + Math.random() * 6);
    let dado3 = parseInt(1 + Math.random() * 6);
    let dado4 = parseInt(1 + Math.random() * 6);
  
    let menorValor = (Math.min(dado1, dado2, dado3, dado4));
    let somaDosDados = dado1 + dado2 + dado3 + dado4;
    let atributo = somaDosDados - menorValor;
  
    let modificador = parseInt((atributo-10)/2);
  
    console.log("Você obteve ", dado1, dado2, dado3, dado4);
    console.log("O menor valor é dos dados é ", menorValor);
    
    console.log("O ATRIBUTO", contador, "é", atributo);
    prompt("")
    
    return {dado1, dado2, dado3, dado4, menorValor, atributo, modificador};
  
  }
  
  apresentarInstruções();
  
  //ROLAGENS
  
  let rolagem = rolarDadosAtributo(1);
  let atributo1 = rolagem.atributo;
  let modificador1 = rolagem.modificador;
  
  rolagem = rolarDadosAtributo(2);
  let atributo2 = rolagem.atributo;
  let modificador2 = rolagem.modificador;
  
  rolagem = rolarDadosAtributo(3);
  let atributo3 = rolagem.atributo;
  let modificador3 = rolagem.modificador;
  
  rolagem = rolarDadosAtributo(4);
  let atributo4 = rolagem.atributo;
  let modificador4 = rolagem.modificador;
  
  rolagem = rolarDadosAtributo(5);
  let atributo5 = rolagem.atributo;
  let modificador5 = rolagem.modificador;
  
  rolagem = rolarDadosAtributo(6);
  let atributo6 = rolagem.atributo;
  let modificador6 = rolagem.modificador;
  
  //MODIFICADORES TOTAIS
  
  let totalDosModificadores = (modificador1 + modificador2 + modificador3 + modificador4 + modificador5 + modificador6);
  
  console.log("O atributo", atributo1, "tem o modificador/bônus de "+modificador1+ ".");
  console.log("O atributo", atributo2, "tem o modificador/bônus de "+modificador2+ ".");
  console.log("O atributo", atributo3, "tem o modificador/bônus de "+modificador3+ ".");
  console.log("O atributo", atributo4, "tem o modificador/bônus de "+modificador4+ ".");
  console.log("O atributo", atributo5, "tem o modificador/bônus de "+modificador5+ ".");
  console.log("O atributo", atributo6, "tem o modificador/bônus de "+modificador6+ ".");
  
  prompt("");
  console.log("A soma dos modificadores/bônus é", totalDosModificadores);
  
  while (totalDosModificadores < 6){
  
    console.log("O total dos modificadores ficou abaixo da média, que é 6.");
    let menorAtributo = Math.min(atributo1, atributo2, atributo3, atributo4, atributo5, atributo6);
    console.log("Vamos rolar o menor atributo ("+menorAtributo+") novamente.");
    prompt("");
    let rolagem7 = rolarDadosAtributo("novo");
    let atributo7 = rolagem7.atributo;
    let modificador7 = rolagem7.modificador;
    
    
  
    if (menorAtributo == atributo1) {
      
      atributo1 = atributo7;
      modificador1 = modificador7;
        
    } else if (menorAtributo == atributo2){
  
      atributo2 = atributo7;
      modificador2 = modificador7;
      
    } else if (menorAtributo == atributo3){
  
      atributo3 = atributo7;
      modificador3 = modificador7;
      
    } else if (menorAtributo == atributo4){
  
      atributo4 = atributo7;
      modificador4 = modificador7;
      
    } else if (menorAtributo == atributo5){
  
      atributo5 = atributo7;
      modificador5 = modificador7;
      
    } else if (menorAtributo == atributo6){
  
      atributo6 = atributo7;
      modificador6 = modificador7;
      
    }
  console.clear();
  console.log("O atributo", atributo1, "tem o modificador/bônus de "+modificador1+ ".");
  console.log("O atributo", atributo2, "tem o modificador/bônus de "+modificador2+ ".");
  console.log("O atributo", atributo3, "tem o modificador/bônus de "+modificador3+ ".");
  console.log("O atributo", atributo4, "tem o modificador/bônus de "+modificador4+ ".");
  console.log("O atributo", atributo5, "tem o modificador/bônus de "+modificador5+ ".");
  console.log("O atributo", atributo6, "tem o modificador/bônus de "+modificador6+ ".");
  
  totalDosModificadores = (modificador1 + modificador2 + modificador3 + modificador4 + modificador5 + modificador6);
    
  prompt("");
  console.log("A NOVA soma dos modificadores/bônus é", totalDosModificadores+".");
    
  }