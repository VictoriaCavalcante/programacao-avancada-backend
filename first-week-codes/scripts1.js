console.log("Hello, world, Javascript!")
//maneiras de declarar variáveis e constantes
var x = 10
let y = 50
const z = "''"

//tribuindo valor a variável
y = 20
console.log(y) //similar a printf
if(true){ //condição
    let y = 15
    console.log(y)
}
console.log(y)

const nome = "Victória" //atribuindo valor de String
console.log(nome)
console.log(typeof nome) //verificação de tipo da constante

const idade = 21 //atribuindo valor numerico
console.log(idade)
console.log(typeof idade)

const peso = 54.45
console.log(peso)
console.log(typeof peso)

const nada = null
console.log(nada)
console.log(typeof nada)

const indefinido = null
console.log(indefinido)
console.log(typeof indefinido)

const vouf = true
console.log(vouf)
console.log(typeof vouf)

const vetor = ['Java', 10, "PHP"] //tipo de dado vetor
console.log(vetor)
console.log(typeof vetor)
console.log(vetor.length)

const usuario = { //tipo de dado objeto
    email: 'eu@email.com',
    senha: 'teste123',
    nome: 'Victor',
    idade: 31
}

console.log(usuario)

const nomenome = 'Victor Vieira'
console.log(nomenome.length) //maneira de pegar o tamanho da String marcada
console.log(nomenome.toUpperCase())//colocando String em MAIÚSCULO
console.log(nomenome.toLowerCase())//colocando String em minúsculo
const nomeMaiusculo = nomenome.toUpperCase()
console.log(nomeMaiusculo)
console.log(nomeMaiusculo[0])
console.log(nomeMaiusculo[nomeMaiusculo.length-1])
console.log(nomeMaiusculo.slice(0,6))

//arrays, vetores, listas
const lista = ['aa', 'b', 'c', 'd', 'e'] //lista de strings
console.log(lista)
console.log(lista.length)
console.log(lista[2])
console.log(typeof lista)
lista[5] = 'f'
console.log(lista[5])
lista[0] = 'x'
console.log(lista)
//lista = 'Testando atribuição de texto para lista'
lista.push('g') //add valor em lista
console.log(lista)
lista.pop()//retirando valor em lista
console.log(lista)
lista.shift() //tira o primeiro da lista
lista.shift()
console.log(lista)
lista.unshift('ab') //add no início da lista
console.log(lista)

//objects literals - estruturas que descrema entidade
const produto = {
    nome: "Camisa",
    preco: 9.99,
    emEstoque: true,
    size: ['P', 'M', 'G'],
    'Cor': 'azul'

}
console.log(produto)
console.log(produto['preco'])

//destructing - recurso para objetos para extrair conteúdo de dentro deles
const {preco, emEstoque } = produto
console.log(preco)
console.log(emEstoque)

const [char1, char2] = lista
console.log(char1)
console.log(char2)

//JSON - JavaScript Object Notation
const doguinho = {
    nome: 'Scooby',
    idade: 10
}

const json = JSON.stringify(doguinho)
console.log(json)