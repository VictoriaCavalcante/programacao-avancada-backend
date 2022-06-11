const n = 10
if(n > 10){
    console.log('Teste de entrada do if.')
}

const texto = 0
if(texto === '0'){ //triple equals compara também o tipo dos dados
    console.log("Os dados são iguais.")
}
else if(true){
    console.log('Segundo if - if aninhado')
}
else//condição que nunca acontecerá
    console.log('Saída...')

//oparador ternário
const resultado = n > 20 ? true : false //se n > 20, resultado = true, se não, resultado = false;
console.log(resultado)
console.log(typeof resultado)

//repetição do tipo enquanto
let contador = 0
const lista = [1, 7, 3, 64, 2, 0]
while(contador < lista.length){
    console.log('O elemento da vez é ' + lista[contador] + '.')//impressão de dados + texto mesclados
    contador++
}

console.log('')

const outraLista = ['a', 'b', 'c', 'd', 'e', 'c']
//repetição: início, condição, passo
for(let contador = 0; contador < outraLista.length; contador++){
    console.log('O elemento da vez é ' + outraLista[contador] + '.')
}

const testeLiteral = (`\`` === "`") //comparação com resultado true porque a barra não conta
console.log(testeLiteral)

const a=3, b=5
console.log('Oito é ' + (a+b) + ' \n e não ' + (2*a+b))
console.log(`Oito é ${(a+b)} e não ${2*a+b}`) //uma maneira diferente de saída de dados

//método de listas-arrays-vetores
const nomes =['Abimael', 'Cleyciane', 'Paulo', 'Victória']
nomes.forEach(function(nome){ //maneira de percorrer os objetos do vetor
    console.log(nome)
})
//abaixo aplicações dos conceitos já vistos
const nomesModificados = nomes.map(function(nome){
    if(nome === 'Paulo')
        return (nome = 'O Grande')
    else
        return nome
})

nomesModificados.forEach(function(nome){
    console.log(nome)
})

const numerosGrandes = ['60', '1', '9', '17', '99', '94'].filter(function(numero){
    return (numero>10)
})
console.log(numerosGrandes)
numerosGrandes.forEach(function(numeros){
    console.log(numeros)
})

console.log(numerosGrandes.reduce(function(total, numero){
    return parseInt(total)+parseInt(numero)
}))