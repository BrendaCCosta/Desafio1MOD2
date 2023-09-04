// 01 - crie uma condição composta com uma variável dia e a condição verifica se está de dia mostre 'claro'
// senão mostre está 'de noite'

let dia = "claro"

if (dia == "claro") {
  console.log("Está claro!")
} else {
  console.log("Está de noite!")
}

// 02 - Crie um loop for() que exiba apenas números pares até o 20 no console.log()

for (let contador = 0; contador <=20; contador+=2) {
  console.log(contador)
}

// 03 - crie uma função que exiba uma mensagem no console


function mensagem () {
  console.log("Hello World!")
}

mensagem ();

// 04 - crie uma função que receba o seu nome como (parâmetro) e exiba no console

function mostrarNome (brenda) {
  console.log(`${brenda}`)
}

mostrarNome(`Eu amo música!`)

// 05 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console

function biografia (nome , idade, estiloMusical) {
   console.log(`Olá meu nome é ${nome}, tenho ${idade} e meu estilo musical favorito é ${estiloMusical}`)
}

biografia ("Brenda", "20 anos", "Pop")

// 06 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console

function entretenimento (filme, musica) {
  console.log(`O filme ${filme} tem uma música muito bonita chamada ${musica}`)
}

entretenimento ("Nasce uma Estrela", "Shallow")

// 07 - crie uma função que retorne o triplo do número recebido no parâmetro da função

function triplicador (n) {
  return n*3
}
console.log(triplicador(7))

// 08 - crie uma função que  verifique se uma  variável é true ou false

let verificar = false

function verificador () {
  if (verificar == true) {
    console.log("é verdadeiro")
  } else {
    console.log("é falso")
  }
}

verificador ()

// 09 - Crie um array que receba 5 itens e exiba no console.

let comidas = ["pizza", "lasanha", "hamburguer", "Strogonoff", "Churrasco"]
console.log(comidas)

// 10 - Utilize um método para adicionar um nome ao inicio do array.

let nomes = ["Arthur", "Beatriz", "William"]
nomes.unshift("Brenda")
console.log(nomes)

// 11 - Utilize um método para remover o último nome do array.

let esportes = ["futebol", "basquete", "golf"]
esportes.push("natação")
console.log(esportes)

// 12 - Utilize um método para adicionar dois nomes ao fim do array.a

let names = ["João", "Carla", "Matheus" ]
names.push("Maria","Victor")
console.log(names)

// 13 - Utilize um método para remover o primeiro nome do array.

let jogos = ["The Sims", "Stardew Valley", "LOL"]
jogos.shift()
console.log(jogos)


// 14 - Utilize um método para organizar em ordem crescente o seguinte array:

 let numbers = [7,5,6,3,8,9,2,1,4]
 numbers.sort()
 console.log(numbers)

// 15 - Crie um objeto que receba ao menos três propriedades sobre você.


// 16 - Adicione uma nova propriedade sem alterar seu objeto inicial.
// 17 - Remova uma propriedade desse objeto.
// 18 - Mostre no console todas as propriedades desse objeto.
// 19 - Crie um array  chamado "cadastro" contendo ao menos 5 objetos.
// Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos.
// Na propriedade amigos, adicione ao menos 4 amigos.
// 20 - Mostre no console o nome de um amigo de cada lista.
