function numeros(num, num1) {
    let resultado = 0

    for (i = 0; i < num1; i++) {
        resultado += num
    }
    return resultado
}
console.log(numeros(45, 450))