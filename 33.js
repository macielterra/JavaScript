let vetorDouble = [2.0, 4.5, 7.1, 8.9]
let vetorString = ['Dara', 'Maciel', 'Thor', 'Pedro']
let vetorInteiro = [15, 24, 36, 75]

function concatenar(...args) {
    resultado = []
    for (let i = 0; i < arguments.length; i++) {
        resultado = resultado.concat(arguments[i])
    }
    return resultado;
}

console.log(concatenar(vetorInteiro, vetorString))
console.log(concatenar(vetorDouble, vetorInteiro))