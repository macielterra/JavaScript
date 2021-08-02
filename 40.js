/*function maiorMenor(valor1, valor2) {
    if (valor1 > valor2) {
        console.log(`Valor1 ${valor1} é maior que Valor2 ${valor2}`)
    } else {
        if (valor1 < valor2) {
            console.log(`Valor2 ${valor2} é maior que Valor1 ${valor1}`)
        } else {
            console.log('os Valores são iguais')
        }
    }
}
console.log(maiorMenor(45, 24))
console.log(maiorMenor(10, 24))
console.log(maiorMenor(4, 4))*/

function maiorOuIgual(num, num2) {
    if (typeof num != typeof num2) return false
    return num >= num2
}
console.log(maiorOuIgual(10, 10))