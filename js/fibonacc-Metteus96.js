let seq = prompt("Quantos valores da sequecia de Fiabonacci você deseja ver?");
let soma;
let ultm = 1;
let penult = 0;

while (seq < 0 || isNaN(seq)) {
  seq = prompt("Quantos valores da sequecia de Fiabonacci você deseja ver?");
};

for (var i = 0; i <= seq; i++) {
  if(i <= 1){
   console.log(i);  
    
  } else {
 soma = ultm + penult;
 penult = ultm;
 ultm = soma;
 console.log(soma);
  };
};