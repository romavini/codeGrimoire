function tabuada() {
    let valor = parseFloat(prompt("Exiba a tabuada de 1 ao 10 do valor recebido."));

    for (let contador = 1; contador <= 10; contador++) {
        const multiplic = valor * contador;
        console.log(`${valor} x ${contador} = ${multiplic}`);
    };
}

tabuada();