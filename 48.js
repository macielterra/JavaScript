/*function filtrarNumeros(array) {
    const resultado = []
    for (let i of array)
        if (typeof i == 'number')
            resultado.push(i)

    return resultado
}

console.log(filtrarNumeros([1, 'Terra', true, 456.4, "Maciel"]))*/

/*function filtrarNumeros(array) {
    const resultado = []
    for (let item of array)
        if (typeof item == 'boolean')
            resultado.push(item)

    return resultado
}
console.log(filtrarNumeros([1, 'Terra', true, 456.4, "Maciel"]))*/

/*function filtrarNumeros(array) {
    return array.filter(item => typeof item == 'number')
}
console.log(filtrarNumeros([1, 'Terra', true, 456.4, "Maciel"]))*/

function filtrarNumeros(array) {
    return array.filter(item => typeof item === 'string' || typeof item == 'number')
}
console.log(filtrarNumeros([1, 'Terra', true, 456.4, "Maciel"]))