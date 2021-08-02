function transformaDecimal(transforma_decimal) {
    valoremReais = `R$ ${transforma_decimal.toFixed(2).toString().replace(".",",")}`
    console.log(valoremReais)
}
transformaDecimal(2.112 + 0.21)