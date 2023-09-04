// 01 - crie uma condição composta com uma variável dia e a condição verifica se está de dia mostre 'claro'
// senão mostre está 'de noite'

let dia = "claro"

if (dia == "claro") {
  console.log("Está claro!")
} else if (dia == "escuro"){
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
  }else if (verificar == false) { 
    console.log("é falso")
  }
}

verificador ()

// 