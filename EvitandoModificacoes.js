// Object.preventExtensions

const produto = Object.preventExtensions({
    nome: 'Borracha',
    preco: 2.30,
    tag: 'Promoção'
})
console.log('Extensível : ', Object.isExtensible(produto))

produto.nome = 'Caneta'
produto.descricao = 'Borracha Escolar Branca'
delete produto.tag
console.log(produto)

// Object.seal
const pessoa = { nome: 'Marcos', idade: '37' }
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))

pessoa.sobrenome = 'Paiva'
delete pessoa.nome
pessoa.idade = 45
console.log(pessoa)

// Object.Freeze = selado + PreventExtensios + edição