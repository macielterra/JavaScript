const notas = [10, 4.5, 7.0, 9.4, 5.1, 6]

for (let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Maciel',
    sobrenome: 'Paiva',
    idade: 39,
    peso: 82,
    altura: 1.84,

}

for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}