/*function soma(vez) {
    let resultado = ''
    for (let i = 0; i < vez; i++) {
        resultado += 'V' + '-' + 'V'

    }
    return resultado
}
console.log(soma(50))*/

function soma(vez) {
    return Array(vez).fill('+').join(' ')
}
console.log(soma(9))

function simboloMais(quant) {
    return "__".repeat(quant)
}
console.log(simboloMais(20))