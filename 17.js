function calcSalario(salarioAtual, categoria) {

    switch (categoria) {
        case 'A':
            return salarioAtual * 1.10
        case 'B':
            return salarioAtual * 1.15
        case 'C':
            return salarioAtual * 1.20
        default:
            return 'Plano Inválido'
    }
}
console.log(calcSalario(1800, 'B'))
console.log(calcSalario(2300, 'd'))
console.log(calcSalario(1800, 'A'))