/*function SomaTotal(itens) {
    return itens.reduce((acumulador, valorAtual) => acumulador + valorAtual.preco, 0)
}
console.log(SomaTotal([{ nome: 'Samsung', categoria: 'Eletrônicos', preco: 92.45 },
    { nome: 'Cinema', categoria: 'Entretenimento', preco: 45.50 }
]))*/

function SomaTotal(itens) {
    return itens
        .map(item => item.preco)
        .reduce((acumulador, valorAtual) => acumulador + valorAtual)
}
console.log(SomaTotal([{ nome: 'Samsung', categoria: 'Eletrônicos', preco: 92.45 },
    { nome: 'Cinema', categoria: 'Entretenimento', preco: 45.50 },
    { nome: 'HP', categoria: 'Eletrônicos', preco: 150.0 },
    { nome: 'Cinema', categoria: 'Entretenimento', preco: 45.50 },
    { nome: 'HP', categoria: 'Eletrônicos', preco: 1900 }
]))