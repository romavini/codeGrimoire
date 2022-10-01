console.log('aventuras')
let pontuacao=0
console.log("quantos anos tem o cristo redentor ,valendo  50 pontos ")
console.log("1-200 anos ")
console.log("2-100 anos")
let resposta = prompt("escolha uma alternativas")
if (resposta === "2") {
  console.log("alternativa correta, ganhou 50 pontos")
  pontuacao = pontuacao + 50
} else {
  pontuacao=pontuacao -50
  console.log("vc errou, perdeu 50 pontos")
}
console.log("quantos anos de a cidade do RJ,valendo 20 postos")
console.log("1-578 anos ")
console.log("2-456 anos")
let resposta1 = prompt("escolha a alternativas")
if (resposta1 === "2") {
  console.log("parabens")
  console.log("sua pontuacao final🟢")
  pontuacao = pontuacao + 20
} else {
  pontuacao=pontuacao -20
  console.log('vc perdeu 20 pontos ')
  console.log("sua pontuacao final🟢")
                                               
}
console.log(pontuacao)
 