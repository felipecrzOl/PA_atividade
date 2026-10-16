let idade = 20;
let numero = '20';

console.log('=COMPARAÇÃO=');
console.log('=Comparando conteúdo=');
console.log(`São iguais? ${idade === numero}`);

console.log('=Comparando tipo e conteúdo=');
console.log(`São iguais? ${idade != numero}`);

console.log('\n= DIFERENÇA =');
conole.log('= Comparando tipo e conteúdo =');
console.log(`São diferentes? ${idade !== numero}`);

console.log('\n= AND =')
console.log(`V and V = ${true && true}`);
console.log(`V and F = ${true && false}`);
console.log(`F and F = ${false && false}`);

console.log('\n= OR =');
console.log(`V or V = ${true || true}`);
console.log(`V or F = ${true || false}`);
console.log(`F or V = ${false || true}`);
console.log(`F or F = ${false || false}`);