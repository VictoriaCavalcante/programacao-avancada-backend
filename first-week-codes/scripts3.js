//funções
//como declarar e escrever funções
function minhaFuncao(){
    console.log('Estou dentro da função.')
}
//e como chama-las
minhaFuncao()

const funcao = function minhaFuncao(nome, sobrenome){
    console.log(typeof nome)
    return (`${nome} ${sobrenome}`)
}

const nome = 'Victoria'
const sobrenome = 'Cavalcante'

console.log(funcao(nome, sobrenome))
minhaFuncao(10, 20)

console.log(typeof funcao)

//arrow function - funções flecha
const soma = (a,b) => a+b

console.log(soma(5, 3))

const lista = ['aaa','b','c','d']

console.log(lista.map((elemento) => elemento.length))

//clousures - fechamentos

let x = 10
//duas funções reduzidas
let fora = () => ( (x=7), () => x+5 )()
console.log(fora())

console.log(typeof fora())