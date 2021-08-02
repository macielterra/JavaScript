/*function veto(item, quant) {
    let resultado = []

    for (i = 0; i < quant; i++) {
        resultado.push(item)
    }
    return resultado
}
console.log(veto('Cebola', 5))
console.log(veto(78, 10))*/

function repetir(item, quant) {
    return Array(quant).fill(item)
}
console.log(repetir('Dara', 6))