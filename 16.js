function calculo(num1, sinal, num2) {

    switch (sinal) {
        case '+':
            return num1 + num2
        case '-':
            return num1 - num2
        case '/':
            return num1 / num2
        case '*':
            return num1 * num2
        default:
            return 'Símbolo inválido'
    }
}
console.log(calculo(4, '-', 5))
console.log(calculo(4, '/', 5))
console.log(calculo(9, '*', 5))
console.log(calculo(15, '+', 5))