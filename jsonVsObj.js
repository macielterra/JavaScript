const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }
console.log(JSON.stringify(obj))

console.log(JSON.parse('{"a":1, "b":2,"c":"string","d":[],"e":true,"f":{}}'))
console.log(Object.keys(obj))
console.log(Object.values(obj))