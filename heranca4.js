function MeuObjeto() {}
console.log(MeuObjeto.prototype)

const obj = new MeuObjeto
const obj1 = new MeuObjeto

console.log(obj.__proto__ === obj1.__proto__)
console.log(MeuObjeto.prototype === obj.__proto__)

MeuObjeto.prototype.nome = 'Pedro'
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}

obj.falar()
obj1.nome = 'Maciel'
obj1.falar()

const obj2 = {}
obj2.__proto__ = MeuObjeto.prototype
obj2.nome = 'Obj2'
obj2.falar()

//Resumindo 
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)