let nome = prompt("Seu nome =").toUpperCase();

while (nome.length <= 3){
  alert("Nome tem de ter ao menos 3 letras");
  nome = prompt("Seu nome =").toUpperCase();
}

let anos = parseInt(prompt("Qual sua idade ="));

while (anos < 0 || anos > 150){
  alert("Idade não pode ser menor que 0 e maior que 150");
  anos = parseInt(prompt("Qual sua idade ="));
};

let salario = parseFloat(prompt("Qual seu sálario ="));

while (salario < 0){
  alert("Sálario não pode ser menor que 0");
  salario = parseFloat(prompt("Qual seu sálario ="));
};

let genero = prompt("Qual seu sexo (M) ou (F) =").toUpperCase();

while (genero !== "M" && genero !== "F"){
  alert("Sexo não pode ser diferente de M ou F");
  genero = prompt("Qual seu sexo (M) ou (F) =").toUpperCase();
};

let estado = prompt("Estado civil (S), (C), (V) ou (D)").toUpperCase();

while (estado != "S" && estado != "C" && estado != "V" && estado != "D"){
  alert("Estado Civil não pode ser diferente de S, C, V ou D");
  estado = prompt("Estado civil (S), (C), (V) ou (D)").toUpperCase();
};

alert("_________________________________________________________");
alert("|                     FICHA CADASTRAL                   |");
alert("_________________________________________________________");
alert("| NOME : " + nome );
alert("_________________________________________________________");
alert("| IDADE: " + anos + "                SÁLARIO: " + salario );
alert("_________________________________________________________");
alert("| GENERO: " + genero + "         ESTADO CIVIL: " + estado );
alert("_________________________________________________________");