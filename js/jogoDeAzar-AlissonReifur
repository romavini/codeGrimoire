console.log("\n\n\u001b[42m =🍀=💲=😎= CRAPS =🤑=💲=💻= \u001b[0m\n\n");
// VARIÁVEIS PRINCIPAIS
let caixa;
let aposta;
let marcoDeVitoria;
let jogoLigado = true;
let segundaRodada = false;
let dado1;
let dado2;
let rodada = 1;

  console.log("Olá meu querido apostador, vamos jogar.")

  console.log("Para começar, qual o seu nome?")
  let nome = prompt("=")

  while (nome == '') {
    console.log("\nInforme seu nome jogador, afinal um campeão precisa ser reconhecido?")
    nome = prompt("=")
  }

  console.log("\nVamos começar " + nome + " você ja conhece nossas regras?")
  let respostaRegras = parseInt(prompt("1 - SIM ou 2 - NÃO ="))

  while (respostaRegras == '' || isNaN(respostaRegras)) {
    respostaRegras = parseInt(prompt("1 - SIM ou 2 - NÃO ="))
  }
  if (respostaRegras === 2) {
    console.log("\nPrimeiramente, você aposta quantos reais voce quiser e, se você ganhar esse valor vai ser dobrado...")
    console.log("Voce ganha ou perde caso: ")
    console.log("1 - Se voce tirar 7 ou 11 na soma dos dois dados da primeira rodada.VOCE GANHA!!!")
    console.log("2 - Se tirar 2,3 ou 12 na primeira rodada. VOCE PERDE!")
    console.log("Dai em diante, se voce faz um marco da vitoria, que é esse numero da soma dos seus dados.")
    console.log("Ai seu objetivo é tirar esse numero novamente, MAS, se voce tirar o nume 7, você perde automaticamente.")
  }

  console.log("Bora lá então!?\n")
  console.log("Valor que quer colocar no caixa?")
  caixa = parseInt(prompt("$$ ="))

  while (caixa == "" || isNaN(caixa) || caixa < 0) {
    console.log("O caixa não pode ser letras, vazio e menor que 1")
    caixa = parseInt(prompt("$$ ="))
  }

while (jogoLigado) {

  aposta = parseInt(prompt("Quantos você quer apostar na primeira? ="))

  while (aposta == "" || isNaN(aposta) || aposta > caixa) {
    console.log("\nA aposta não pode ser letras, vazio e maior que caixa")
    aposta = parseInt(prompt("Valor da aposta ="))
  }

  //VALOR DOS DADOS
  console.log("------------------------------------------------------------------------------");
  console.log("                       \n\n\u001b[42m RODADA " + rodada + "\u001b[0m\n\n")
  console.log("------------------------------------------------------------------------------");
  prompt("\n\u001b[32m Aperte ENTER para jogar os dados!\u001b[0m\n");

  dado1 = parseInt(1 + Math.random() * 6);
  {
    if (dado1 === 1) {
      console.log("    ___________");
      console.log("   |\\          \\");
      console.log("   | \\     @    \\ <----- Você tirou 1 no primeiro dado.");
      console.log("   |  \\          \\");
      console.log("   |@  \\__________\\");
      console.log("   \\ @ |  @     @ | ");
      console.log("    \\ @|     @    | ");
      console.log("     \\ |  @     @ |");
      console.log("      \\|__________|");

    } else if (dado1 === 2) {
      console.log("    ___________");
      console.log("   |\\  @       \\");
      console.log("   | \\          \\ <----- Você tirou 2 no primeiro dado.");
      console.log("   |  \\       @  \\");
      console.log("   |@  \\__________\\");
      console.log("   \\ @ |          | ");
      console.log("    \\ @|     @    | ");
      console.log("     \\ |          |");
      console.log("      \\|__________|");

    } else if (dado1 === 3) {
      console.log("    ___________");
      console.log("   |\\  @       \\");
      console.log("   | \\     @    \\ <----- Você tirou 3 no primeiro dado.");
      console.log("   |  \\       @  \\");
      console.log("   |   \\__________\\");
      console.log("   \\ @ | @        | ");
      console.log("    \\  |          | ");
      console.log("     \\ |        @ |");
      console.log("      \\|__________|");

    } else if (dado1 === 4) {
      console.log("    ___________");
      console.log("   |\\  @    @  \\");
      console.log("   | \\          \\ <----- Você tirou 4 no primeiro dado.");
      console.log("   |  \\  @    @  \\");
      console.log("   |   \\__________\\");
      console.log("   \\ @ | @      @ | ");
      console.log("    \\  |     @    | ");
      console.log("     \\ | @      @ |");
      console.log("      \\|__________|");

    } else if (dado1 === 5) {
      console.log("    ___________");
      console.log("   |\\  @    @  \\");
      console.log("   | \\     @    \\ <----- Você tirou 5 no primeiro dado.");
      console.log("   |  \\  @    @  \\");
      console.log("   |@  \\__________\\");
      console.log("   \\ @ |  @    @  | ");
      console.log("    \\ @|  @    @  | ");
      console.log("     \\ |  @    @  |");
      console.log("      \\|__________|");

    } else if (dado1 === 6) {
      console.log("    ___________");
      console.log("   |\\  @    @  \\");
      console.log("   | \\  @    @  \\ <----- Você tirou 6 no primeiro dado.");
      console.log("   |  \\  @    @  \\");
      console.log("   |@  \\__________\\");
      console.log("   \\ @ |          | ");
      console.log("    \\ @|  @       | ");
      console.log("     \\ |        @ |");
      console.log("      \\|__________|");
    }

    dado2 = parseInt(1 + Math.random() * 6);
    if (dado2 === 1) {
      console.log("    ___________");
      console.log("   |\\          \\");
      console.log("   | \\     @    \\ <----- Você tirou 1 no segundo dado.");
      console.log("   |  \\          \\");
      console.log("   |@  \\__________\\");
      console.log("   \\ @ |  @     @ | ");
      console.log("    \\ @|     @    | ");
      console.log("     \\ |  @     @ |");
      console.log("      \\|__________|");

    } else if (dado2 === 2) {
      console.log("    ___________");
      console.log("   |\\  @       \\");
      console.log("   | \\          \\ <----- Você tirou 2 no segundo dado.");
      console.log("   |  \\       @  \\");
      console.log("   |@  \\__________\\");
      console.log("   \\ @ |          | ");
      console.log("    \\ @|     @    | ");
      console.log("     \\ |          |");
      console.log("      \\|__________|");

    } else if (dado2 === 3) {
      console.log("    ___________");
      console.log("   |\\  @       \\");
      console.log("   | \\     @    \\ <----- Você tirou 3 no segundo dado.");
      console.log("   |  \\       @  \\");
      console.log("   |   \\__________\\");
      console.log("   \\ @ | @        | ");
      console.log("    \\  |          | ");
      console.log("     \\ |        @ |");
      console.log("      \\|__________|");

    } else if (dado2 === 4) {
      console.log("    ___________");
      console.log("   |\\  @    @  \\");
      console.log("   | \\          \\ <----- Você tirou 4 no segundo dado.");
      console.log("   |  \\  @    @  \\");
      console.log("   |   \\__________\\");
      console.log("   \\ @ | @      @ | ");
      console.log("    \\  |     @    | ");
      console.log("     \\ | @      @ |");
      console.log("      \\|__________|");

    } else if (dado2 === 5) {
      console.log("    ___________");
      console.log("   |\\  @    @  \\");
      console.log("   | \\     @    \\ <----- Você tirou 5 no segundo dado.");
      console.log("   |  \\  @    @  \\");
      console.log("   |@  \\__________\\");
      console.log("   \\ @ |  @    @  | ");
      console.log("    \\ @|  @    @  | ");
      console.log("     \\ |  @    @  |");
      console.log("      \\|__________|");

    } else if (dado2 === 6) {
      console.log("    ___________");
      console.log("   |\\  @    @  \\");
      console.log("   | \\  @    @  \\ <----- Você tirou 6 no segundo dado.");
      console.log("   |  \\  @    @  \\");
      console.log("   |@  \\__________\\");
      console.log("   \\ @ |          | ");
      console.log("    \\ @|  @       | ");
      console.log("     \\ |        @ |");
      console.log("      \\|__________|");
    }
  }

  console.log()
  let somaDosDados = dado1 + dado2
  console.log("\nValor total: " + somaDosDados)
  console.log("------------------------------------------------------------------------------")

  //PRIMEIRA CONDIÇÃO DE VITÓRIA

  if (somaDosDados == 7 || somaDosDados == 11) {
    console.log("CAGAAADO! Você ganhou de primeira. Parabéns!");
    caixa = caixa + (aposta * 2);
    console.log("Seu caixa atual é: "+caixa);
    console.log("------------------------------------------------------------------------------")
  } else if (somaDosDados == 2 || somaDosDados == 3 || somaDosDados == 12) {
    console.log("Você é azarado. Perdeu toda sua aposta.");
    console.log()
    caixa = caixa - aposta ;
    console.log("Seu caixa atual é: "+caixa);
    console.log("------------------------------------------------------------------------------")

    //CRIAÇÃO DO MARCO DE VITÓRIA

  } else {
    console.log("Você não ganhou ou perdeu de primeira.");
    console.log("Não perdeu nada ou ganhou nada do que apostou. Agora as regras do jogo mudaram.");
    marcoDeVitoria = somaDosDados;
    console.log();
    console.log("\n\u001b[32m Seu MARCO DE VITÓRIA é: \u001b[0m\n " + marcoDeVitoria);
    console.log();
    console.log("Você deve rolar os dados e tirar o seu MARCO DE VITÓRIA novamente para vencer.");
    console.log("Caso você tire 7, você perde.");
    console.log();
    console.log("Boa Sorte!");
    rodada = rodada + 1;
    console.log("------------------------------------------------------------------------------")
    segundaRodada = true
  }
  //SEGUNDA ROLAGEM DE DADOS

  while (segundaRodada) {
    console.log("------------------------------------------------------------------------------")
    console.log("                         \n\u001b[42m RODADA " + rodada + "\u001b[0m\n")
    console.log("------------------------------------------------------------------------------")
    prompt("\n\n\u001b[32m Aperte ENTER para jogar os dados!\u001b[0m\n\n");

    dado1 = parseInt(1 + Math.random() * 6);
    {
      if (dado1 === 1) {
        console.log("    ___________");
        console.log("   |\\          \\");
        console.log("   | \\     @    \\ <----- Você tirou 1 no primeiro dado.");
        console.log("   |  \\          \\");
        console.log("   |@  \\__________\\");
        console.log("   \\ @ |  @     @ | ");
        console.log("    \\ @|     @    | ");
        console.log("     \\ |  @     @ |");
        console.log("      \\|__________|");

      } else if (dado1 === 2) {
        console.log("    ___________");
        console.log("   |\\  @       \\");
        console.log("   | \\          \\ <----- Você tirou 2 no primeiro dado.");
        console.log("   |  \\       @  \\");
        console.log("   |@  \\__________\\");
        console.log("   \\ @ |          | ");
        console.log("    \\ @|     @    | ");
        console.log("     \\ |          |");
        console.log("      \\|__________|");

      } else if (dado1 === 3) {
        console.log("    ___________");
        console.log("   |\\  @       \\");
        console.log("   | \\     @    \\ <----- Você tirou 3 no primeiro dado.");
        console.log("   |  \\       @  \\");
        console.log("   |   \\__________\\");
        console.log("   \\ @ | @        | ");
        console.log("    \\  |          | ");
        console.log("     \\ |        @ |");
        console.log("      \\|__________|");

      } else if (dado1 === 4) {
        console.log("    ___________");
        console.log("   |\\  @    @  \\");
        console.log("   | \\          \\ <----- Você tirou 4 no primeiro dado.");
        console.log("   |  \\  @    @  \\");
        console.log("   |   \\__________\\");
        console.log("   \\ @ | @      @ | ");
        console.log("    \\  |     @    | ");
        console.log("     \\ | @      @ |");
        console.log("      \\|__________|");

      } else if (dado1 === 5) {
        console.log("    ___________");
        console.log("   |\\  @    @  \\");
        console.log("   | \\     @    \\ <----- Você tirou 5 no primeiro dado.");
        console.log("   |  \\  @    @  \\");
        console.log("   |@  \\__________\\");
        console.log("   \\ @ |  @    @  | ");
        console.log("    \\ @|  @    @  | ");
        console.log("     \\ |  @    @  |");
        console.log("      \\|__________|");

      } else if (dado1 === 6) {
        console.log("    ___________");
        console.log("   |\\  @    @  \\");
        console.log("   | \\  @    @  \\ <----- Você tirou 6 no primeiro dado.");
        console.log("   |  \\  @    @  \\");
        console.log("   |@  \\__________\\");
        console.log("   \\ @ |          | ");
        console.log("    \\ @|  @       | ");
        console.log("     \\ |        @ |");
        console.log("      \\|__________|");
      }

      dado2 = parseInt(1 + Math.random() * 6);
      if (dado2 === 1) {
        console.log("    ___________");
        console.log("   |\\          \\");
        console.log("   | \\     @    \\ <----- Você tirou 1 no segundo dado.");
        console.log("   |  \\          \\");
        console.log("   |@  \\__________\\");
        console.log("   \\ @ |  @     @ | ");
        console.log("    \\ @|     @    | ");
        console.log("     \\ |  @     @ |");
        console.log("      \\|__________|");

      } else if (dado2 === 2) {
        console.log("    ___________");
        console.log("   |\\  @       \\");
        console.log("   | \\          \\ <----- Você tirou 2 no segundo dado.");
        console.log("   |  \\       @  \\");
        console.log("   |@  \\__________\\");
        console.log("   \\ @ |          | ");
        console.log("    \\ @|     @    | ");
        console.log("     \\ |          |");
        console.log("      \\|__________|");

      } else if (dado2 === 3) {
        console.log("    ___________");
        console.log("   |\\  @       \\");
        console.log("   | \\     @    \\ <----- Você tirou 3 no segundo dado.");
        console.log("   |  \\       @  \\");
        console.log("   |   \\__________\\");
        console.log("   \\ @ | @        | ");
        console.log("    \\  |          | ");
        console.log("     \\ |        @ |");
        console.log("      \\|__________|");

      } else if (dado2 === 4) {
        console.log("    ___________");
        console.log("   |\\  @    @  \\");
        console.log("   | \\          \\ <----- Você tirou 4 no segundo dado.");
        console.log("   |  \\  @    @  \\");
        console.log("   |   \\__________\\");
        console.log("   \\ @ | @      @ | ");
        console.log("    \\  |     @    | ");
        console.log("     \\ | @      @ |");
        console.log("      \\|__________|");

      } else if (dado2 === 5) {
        console.log("    ___________");
        console.log("   |\\  @    @  \\");
        console.log("   | \\     @    \\ <----- Você tirou 5 no segundo dado.");
        console.log("   |  \\  @    @  \\");
        console.log("   |@  \\__________\\");
        console.log("   \\ @ |  @    @  | ");
        console.log("    \\ @|  @    @  | ");
        console.log("     \\ |  @    @  |");
        console.log("      \\|__________|");

      } else if (dado2 === 6) {
        console.log("    ___________");
        console.log("   |\\  @    @  \\");
        console.log("   | \\  @    @  \\ <----- Você tirou 6 no segundo dado.");
        console.log("   |  \\  @    @  \\");
        console.log("   |@  \\__________\\");
        console.log("   \\ @ |          | ");
        console.log("    \\ @|  @       | ");
        console.log("     \\ |        @ |");
        console.log("      \\|__________|");
      }
    }

    somaDosDados = dado1 + dado2;
    console.log("\nValor total: " + somaDosDados);
    if (somaDosDados == (marcoDeVitoria - 1) || somaDosDados == (marcoDeVitoria + 2)) {
      console.log("Uh, quase!")
    }
    console.log("------------------------------------------------------------------------------")

    if (somaDosDados == marcoDeVitoria) {
      console.log("Parabéns, jovem! Você ganhou!");
      caixa = caixa + (aposta * 2);
      console.log("Seu caixa atual é: "+caixa);
      segundaRodada = false;

    } else if (somaDosDados == 7) {
      console.log("Você é azarado. Perdeu toda sua aposta.");
      caixa = caixa - aposta;
      console.log("Seu caixa atual é: "+caixa);
      segundaRodada = false;
    } else {
      prompt("\n\u001b[32m Aperte ENTER para jogar mais uma vez! \u001b[0m\n");
      console.log();
      rodada = rodada + 1;
    }
  }
  
  //OPÇÃO DE JOGAR DE NOVO

console.log("Independente do resultado, é sempre bom uma bebida!")
  console.log("Café ou uma Cerveja?")
  console.log("Digite 1 para café. Digite 2 para cerveja.");
  bebida1 = prompt("1 ou 2:")
  {
  if (bebida1 == 1) {
console.log("         ., '''''''''''''''''' ,. ");
console.log("       .'   .oooooo$$$$$ooooooo.   '. ");
console.log("     ::  ,$$$$$$$$$$$$$$$$$$$$$$,  ',");
console.log("     |;  '$$$$$$$$$$$$$$$$$$$$$$'    ''''''''''. ");
console.log("     |;     ''''''$$$$$'''''''       ,:''''':, | ");
console.log("     |;   '|                   |'    ||      | | ");
console.log("     |;   '|                   |'    ||      | | ");
console.log("     |;   '|       CAFÉ        |'    ||      | | ");
console.log("     |;   '|                   |'    ||      | | ");
console.log("     |;   '|                   |'    ':.....:' | ");
console.log("     |;   '|                   |'     ,,,,,,,,,' ");
console.log("     |;   '|                   |'    ; ");
console.log("     |;.   |                   |   .' ");
console.log("     '||,,,                   ,,,;' ");
console.log("        ''';;;;,,,,,,,,,,,;;;;''' ");
console.log("               ''''''''''' ");

  } else if (bebida1 == 2){

console.log("                         .sssssssss.");
console.log("                   .sssssssssssssssssss");
console.log("                 sssssssssssssssssssssssss");
console.log("                ssssssssssssssssssssssssssss");
console.log("                 @@sssssssssssssssssssssss@ss");
console.log("                 |s@@@@sssssssssssssss@@@@s|s");
console.log("          _______|sssss@@@@@sssss@@@@@sssss|s");
console.log("        /         sssssssss@sssss@sssssssss|s");
console.log("       /  .------+.ssssssss@sssss@ssssssss.|");
console.log("      /  /       |...sssssss@sss@sssssss...|");
console.log("     |  |        |.......sss@sss@ssss......|");
console.log("     |  |        |..........s@ss@sss.......|");
console.log("     |  |        |...........@ss@..........|");
console.log("      \  \       |............ss@..........|");
console.log("       \  '------+...........ss@...........|");
console.log("        \________ .........................|");
console.log("                 |.........................|");
console.log("                /...........................\ ");
console.log("               |.............................|");
  }
  }
  
  console.log("\n\u001b[32m Você quer jogar de novo?\u001b[0m\n");
  console.log();
  console.log("Digite S para SIM. Digite N para NÃO.");
  let resposta = prompt("S ou N:").toUpperCase();
  
  if (caixa == "0"){
    console.clear();
    console.log("Infelizmente você ficou sem dinheiro, volte outro dia para tentar a sorte");
  };
  
  if (resposta == "S") {
    rodada = 1;
    console.clear()
    console.log("\nSeu caixa é $$" + caixa);
  } else {
    console.clear()
    console.log("\nObrigado e até mais!");
    console.log("------------------------------------------------------------------------------");
    console.log("                          \n\n\u001b[42m FIM \u001b[0m\n\n"); console.log("------------------------------------------------------------------------------");
    jogoLigado = false;
    segundaRodada = false;
  };
};