let valor =5

function verific (a){
    if (a>= 0)
        console.log(`O valor ${valor} é pósitivo`);
    else if (a < 0)
    console.log(`O valor ${valor} é negátivo`);
    else
        console.log("Valor inválido!")
}

verific(valor)