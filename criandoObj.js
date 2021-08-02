/*
// usando notação literal
const obj1 = {}
console.log(obj1)

//Object em JS
const obj2 = new Object
console.log(obj2)

// Funções Construtoras
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 5.99, 0.10)
const p2 = new Produto('Carro', 25000, 0.15)

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

//Função Factory
function CriarFunc(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const func1 = CriarFunc('maciel', 1800, 3)
const func2 = CriarFunc('Dara', 1450, 2)

console.log(func1.getSalario(), func2.getSalario().toFixed(2))
console.log(func1)
console.log('Salario >', func1.getSalario())

// Object.create

const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)
*/
// Uma função famosa que retorna um objeto

const fromJson = JSON.parse('{"info": "Meu nome é Maciel"}')
console.log(fromJson.info)