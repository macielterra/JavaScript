const pai = { nome: 'Gilson', corCabelo: 'Crespo' }

const filho = Object.create(pai)
filho.nome = 'Michel'

const neto = Object.create(pai, {
    nome: { value: 'David', writable: false, enumerable: true }
})

console.log(neto.nome)
neto.nome = 'Pedro'
console.log(`${neto.nome} tem cabelo ${neto.corCabelo}`)

console.log(Object.keys(filho))
console.log(Object.keys(neto))

for (let key in neto) {
    neto.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança: ${key}`)
}