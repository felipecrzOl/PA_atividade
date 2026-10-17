//Segunda atividade

function opera (a,b,c){
    if (a == b)
    return ((a+b)/c)
    else
        return ((a*b)/c)
}

let result = opera(10,2,4)
console.log(`Resultado da opeção: ${result}`)

let a = 10;
let b = 10;
let c;

if (a===b)
    c = a+b;
else
    c = a*b;

console.log(`a = ${a}`)
console.log(`b = ${b}`)
console.log(`c = ${c}`)