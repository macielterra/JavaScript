function vetor(objeto) {
    const result = []
    for (let chave in objeto)
        result.push([chave, objeto[chave]])
    return result
}
console.log(vetor({ nome: 'Maciel', profissao: 'Eng. de software' }))

function vetor1(objeto) {
    const chaves = Object.keys(objeto)
    const resultado = chaves.map(chave => [chave, objeto[chave]])
    return resultado
}
console.log(vetor({ nome: 'Maciel', profissao: 'Eng. de software' }))

function vetor2(objeto) {
    return Object.entries(objeto)
}
console.log(vetor({ nome: 'Maciel', profissao: 'Eng. de software' }))