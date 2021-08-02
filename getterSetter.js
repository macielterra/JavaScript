const sequencia = {
    _valor: 1,
    get valor() { return this._valor++ },
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}

sequencia.valor = 487
console.log(sequencia.valor, sequencia.valor)