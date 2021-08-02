function valorExtenso(valor) {
    switch (valor) {
        case 0:
            return 'Zero'
        case 1:
            return 'Um'
        case 2:
            return 'Dois'
        case 3:
            return 'Tres'
        case 4:
            return 'Quatro'
        case 5:
            return 'Cinco'
        default:
            return 'Valor Inválido'
    }
}
console.log(valorExtenso(3))
console.log(valorExtenso(0))
console.log(valorExtenso(4))
console.log(valorExtenso(5))
console.log(valorExtenso(2))
console.log(valorExtenso())