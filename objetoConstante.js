const pessoa = { nome: 'Maciel' }
pessoa.nome = 'Michel'

console.log(pessoa.nome)

Object.freeze(pessoa)
pessoa.nome = 'Terra'

console.log(pessoa.nome)

const pessoaConstante = Object.freeze({ nome: 'Dara' })

console.log(pessoaConstante.nome)