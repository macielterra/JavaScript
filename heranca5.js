console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function() {
    return this.split('').reverse().join('')
}
console.log('Eu Amo minha Esposa'.reverse())

Array.prototype.first = function() {
    return this[0]
}
console.log([1, 2, 3, 4, 5, 6, 4, 5, 6].first())
console.log(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'].first())

String.prototype.toString = function() {
    return 'Lascou tudo'
}
console.log('Escola Cod3r'.reverse())