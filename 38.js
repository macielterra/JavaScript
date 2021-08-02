function salBruto(horasTrab, valorHora) {
    const salarioBruto = (horasTrab * valorHora)
    const salarioLiquido = salarioBruto * salarioBruto * 0.30

    return `Salário igual a R$ ${salarioLiquido}`
}
console.log(salBruto(40, 35))