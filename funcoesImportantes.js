const pessoa = {
    nome: 'Maciel',
    idade: 39,
    peso: 80,

}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))
console.log(pessoa)

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
});

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '04/09/1981'
})
console.log(pessoa.dataNascimento)
pessoa.dataNascimento = '01/01/2021'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))