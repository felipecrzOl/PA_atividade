const usuarios = [
        {nome: 'Marta', idiade: 30},
        {nome: 'Jsé', idiade: 40},
        {nome: 'Maria', idiade: 50},
        {nome: 'Marcela', idiade: 60}
]

console.log('\nExibindo todos os usúarios do vetor: ')
usuarios.forEach(u => console.log(`${u.nome} tem ${u.idiade} anos.`))

console.log('\nFiltrando usuários com idade acima de 50 anos: ')
const maiorDeCinquenta = usuarios.filter (u => u.idade >= 50)
maiorDeCinquenta.forEach(u => console.log(`${u.nome} tem ${u.idade} anos.`))

console.log('\nExibindo apenas os nomes.')
const nomes = usuarios.map(u => u.nome)
nomes.forEach(u =>console.log(`${u};`))

console.log('\nEncontrando um usuário.')
const usuarioEncontrado = usuarios.find(u => u.nome === 'Marta')
console.log(usuarioEncontrado)
console.log(`${usuarioEncontrado.nome} tem ${usuarioEncontrado.idade} anos`)

console.log('\nMostra a soma de todas as idades: ')
const somaIdades = usuarios.reduce((total,u) => total + u.idiade, 0)
console.log(`Total das idades: ${somaIdades}`)