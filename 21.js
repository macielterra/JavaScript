function planoSaude(idade) {
    let fixo = 100
    if (idade < 10) {
        return fixo + 80
    } else if (idade < 30) {
        return fixo + 50
    } else if (idade < 60) {
        return fixo + 95
    } else if (idade > 60) {
        return fixo + 130
    } else
        return 'Idade inválida'

}
console.log(planoSaude(1))
console.log(planoSaude(40))
console.log(planoSaude(18))
console.log(planoSaude())
console.log(planoSaude(80))