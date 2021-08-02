function calculaBissexto(ano) {
    if (ano <= 0) {
        return false
    } else if (ano % 400 == 0) {
        return true
    } else if (ano % 100 == 0) {
        return false
    } else if (ano % 4 == 0) {
        return true
    } else {
        return false
    }
}
console.log(calculaBissexto(0))
console.log(calculaBissexto(4))
console.log(calculaBissexto(8))
console.log(calculaBissexto(13))
console.log(calculaBissexto(100))
console.log(calculaBissexto(200))
console.log(calculaBissexto(400))
console.log(calculaBissexto(800))
console.log(calculaBissexto(2020))
console.log(calculaBissexto(2021))