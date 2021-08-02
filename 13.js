function diaSemana(num) {
    switch (num) {
        case 1:
            return 'Fim de Semana'
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return 'Dia Util'
        case 7:
            return 'Fim de Semana'
        default:
            return 'Dia Inválido'
    }
}
console.log(diaSemana(7))
console.log(diaSemana(9))
console.log(diaSemana(4))