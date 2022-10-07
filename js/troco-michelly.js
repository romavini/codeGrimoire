
function retornaTroco(preço, pago) {
    return pago - preço;
  }
  function retornaFaltante(preço,pago){
    return preço-pago;
  }
  
  let valorProd = parseFloat(prompt("valor produto"));
  let valorpago = parseFloat(prompt("valorpago"));
  if (valorpago > valorProd) {
  
    let troco = retornaTroco(valorProd, valorpago);
    console.log("seu troco é:R$" + troco);
  } else if (valorpago < valorProd) {
    let faltante = retornaFaltante(valorProd, valorpago);
    console.log("esta faltando R$" + faltante);
  } else {
    console.log("imprimindo o papel")
  }
  