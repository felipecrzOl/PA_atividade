const listaDeAlunos = [
    {nome: 'Ana',nota: 5.0 },
    {nome: 'Bruno',nota: 10.0},
    {nome: 'Maria',nota: 2.0},
    {nome: 'Marta',nota:7.0 },
    {nome: 'Cecília',nota:6.0 }
]

console.log('\nMostre todos os alunos, seus nomes e suas notas: ')
listaDeAlunos .forEach(l => console.log(`Nome: ${l.nome} Nota: ${l.nota}`)
);

console.log('\nMostre a média geral da turma: ')
const mediaNota = listaDeAlunos.reduce((soma,l) => soma+l.nota,0) /listaDeAlunos.length
console.log(`O resultado da media total é: ${mediaNota}`);

console.log('\nMostre o nome e nota dos alunos com nota abaixo de 7.0: ')
const mediaBaixa = listaDeAlunos.filter(l=> l.nota < 7)
mediaBaixa.forEach(l=> console.log(`As medias baixas são: ${l.nota}`))

console.log('\nMostre apenas o nome dos alunos com nota maior ou igual a 7.0: ')
const  mediaAlta = listaDeAlunos.filter(l=> l.nota >=7)
mediaAlta.forEach(l=> console.log(`As medias altas foram: ${mediaAlta}`))

console.log('\nMostre o nome e a nota do aluno Bruno: ')
const mediaBruno = listaDeAlunos.find(l=> l.nome === 'Bruno')
console.log(`O aluno ${mediaBruno} foi encontrado!`)

console.log('\nSome todas as notas: ')

console.log('\nListe todos os nomes dos alunos, sem mostrar suas notas: ')