function fatorial(numero) {
    if (numero == 0) {
        return 1
    } else {
        return numero * fatorial(numero - 1)
    }
}
console.log(fatorial(9))
console.log(fatorial(0))
console.log(fatorial(1))