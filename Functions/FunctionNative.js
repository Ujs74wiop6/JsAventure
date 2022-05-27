// array.pop()
var frutas = ["Bananas", "Uva", "Maçã", "Laranja"]
// além de remover a função pop, retorna o valor removido!
var ultimaFruta = frutas.pop() // "Laranja"
console.log(frutas)
// [ "Bananas", "Uva", "Maçã"]

// array.push()
var frutas = ["Bananas", "Uva", "Maçã", "Laranja"]
frutas.push("Goiaba")
console.log(frutas)
// ["Bananas", "Uva", "Maçã", "Laranja", "Goiaba" ]

//array.indexOf()
var frutas = ["Bananas", "Uva", "Maçã", "Laranja"]
console.log(frutas.indexOf('Melancia'))
//Irá retornar -1, pois não existe nenhum elemento que dê o match
console.log(frutas.indexOf('Uva'))
//Irá retornar 1, pois é a posição que a uva se encontra

//Math.random()
Math.random() // retorna 0.4031609856267999
Math.random() * 50 // retorna 20.158049281
Math.round(Math.random() * 50) // retornou 20
console.log(Math.random(1))

//Math.min()
Math.min(16, 10, 15) // retorna 10
console.log(Math.min(16, 10, 15))
//Math.max()
Math.max(16, 10, 15) // retorna 16
console.log(Math.max(16, 10, 15))

//String.repeat()
var bomDia = "Bom dia! "
bomDia.repeat(3) // retorna "Bom dia! Bom dia! Bom dia! "
console.log(bomDia.repeat(3))

//String.toUpperCase()
var bomDia = "Bom dia"
bomDia.toUpperCase() // retorna "BOM DIA"
console.log(bomDia.toUpperCase())