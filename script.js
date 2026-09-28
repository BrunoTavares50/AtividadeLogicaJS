// 1.
// const nome = "Bruno"
// const idade = 22
// const cidade = "São Paulo"
// const profissao = "Garoto de Programa"

// console.log(`Meu nome é ${nome}, minha idade é ${idade} anos, moro em ${cidade} e, atualmente minha profissão é ${profissao}`);

// 2.
// const num1 = 5
// const num2 = 18

// console.log(`Soma: ${num1 + num2}`)
// console.log(`Subtracao: ${num1 - num2}`)
// console.log(`Multiplicacao: ${num1 * num2}`)
// console.log(`Divisao: ${num1 / num2}`)

// 3.
// const idade = 22

// let meses = idade * 12

// console.log(`Idade em meses: ${meses}`)

// 4.
// const nota = 5
// const nota2 = 18
// const nota3 = 10

// let media = (nota + nota2 + nota3) / 3

// console.log(`A média das notas é: ${media}`)

// 5.
// const idade = 22

// if (idade >= 18) {
//     console.log("Você é maior de idade")
// } else {
//     console.log("Você é menor de idade")
// }

// 6.
// const num = 5

// if (num > 0)
//     console.log("O número é positivo")
// else if (num < 0)
//     console.log("O número é negativo")
// else
//     console.log("O número é zero")

// 7.
// const num1 = 5

// if (num1 % 2 === 0) {
//     console.log("O número é par")
// }else {
//     console.log("O número é ímpar")
// }

// 8.
// const nota = 7
// const nota2 = 8

// const media = (nota + nota2) / 2

// if (media >= 7) {
//     console.log("Aprovado")
// }else if (media >= 5 && media < 7) {
//     console.log("Recuperação")
// }else {
//     console.log("Reprovado")
// }

// 9.
// const num1 = 5
// const num2 = 10

// if (num1 > num2) {
//     console.log(`O número ${num1} é maior que o número ${num2}`)
// } else if (num1 < num2) {
//     console.log(`O número ${num2} é maior que o número ${num1}`)
// } else {
//     console.log(`Os números ${num1} e ${num2} são iguais`)
// }

// 10.
// const num1 = 5
// const num2 = 10
// const num3 = 15

// if (num1 > num2 && num1 > num3) {
//     console.log(`O número ${num1} é o maior`)
// } else if (num2 > num1 && num2 > num3) {
//     console.log(`O número ${num2} é o maior`)
// } else {
//     console.log(`O número ${num3} é o maior`)
// }

// 11.
// const preco = 101
// const desconto = 10

// const precoComDesconto = preco - (preco * desconto / 100)

// if (preco > 100) {
//     console.log(`Preço Inicial: ${preco}`)
//     console.log(`Desconto aplicado: ${desconto}%`)
//     console.log(`Preço Final(com desconto): ${precoComDesconto}`)
// }

// 12.
// const idade = 22

// if (idade >= 18) {
//     console.log("Você pode acessar a área restrita")
// }else {
//     console.log("Você não pode acessar a área restrita")
// }

// 13.
// const nomes = ["Bruno", "João", "Maria", "Ana", "Pedro"]

// console.log(`Nomes: ${nomes}`)

// 14.
// const compras = ["Arroz", "Feijão", "Macarrão", "Leite", "Ovos"]

// console.log(`Total de itens na lista: ${compras.length}`)
// console.log(`Itens na lista: ${compras}`)

// 15.
// const pessoa = {
//     nome: "Gulosinho",
//     idade: 25,
//     cidade: "São Paulo",
//     profissao: "Carta de clash royale"
// }

// console.log(`Nome: ${pessoa.nome}`)
// console.log(`Idade: ${pessoa.idade}`)
// console.log(`Cidade: ${pessoa.cidade}`)
// console.log(`Profissão: ${pessoa.profissao}`)

// 16.
// const produto = {
//     nome: "Notebook",
//     preco: 2500,
//     categoria: "Eletrônicos",
//     disponibilidade: true
// }

// console.log(`Nome: ${produto.nome}`)
// console.log(`Preço: ${produto.preco}`)
// console.log(`Categoria: ${produto.categoria}`)
// console.log(`Disponibilidade: ${produto.disponibilidade}`)

// 17.
// const aluno1 = {
//     nome: "Bruno",
//     idade: 22,
// }

// const aluno2 = {
//     nome: "João",
//     idade: 18,
// }

// const aluno3 = {
//     nome: "Maria",
//     idade: 20,
// }

// console.log(`Nome: ${aluno1.nome}`)
// console.log(`Idade: ${aluno1.idade}`)
// console.log("-------------------")
// console.log(`Nome: ${aluno2.nome}`)
// console.log(`Idade: ${aluno2.idade}`)
// console.log("-------------------")
// console.log(`Nome: ${aluno3.nome}`)
// console.log(`Idade: ${aluno3.idade}`)
// console.log("-------------------")

// 18.
// const num1 = 5

// console.log(`O dobro de ${num1} é ${num1 * 2}`)

// 19.
// function calcularSoma(num1, num2) {
//     const soma = num1 + num2
//     return soma
// }

// console.log(`A soma de 5 e 10 é: ${calcularSoma(5, 10)}`)

// 20.
// function calcularMedia(nota1, nota2) {
//     const media = (nota1 + nota2) / 2
//     return media
// }

// console.log(`A média de 7 e 8 é: ${calcularMedia(7, 8)}`)

// 21.
// function Saudacao(nome) {
//     return `Olá, ${nome}! Bem-vindo(a)!`
// }

// console.log(Saudacao("Alice"))

// 22.
// for(let i = 1; i <= 10; i++)
// {
//     console.log("-----------------------")
//     for(let h = 1; h <= 10; h++)
//     {
//         const result = i * h;
//         console.log(`${i} X ${h} = ${result}`)
//     }
// }

// 23.
// const num = 0;

// for (let i = 1; i <= 20; i++) {
//     console.log(i)
// }

// 24.
// for (let i = 20; i >= 1; i--) {
//     console.log(i)
// }

// 25.
// for (let i = 1; i <= 50; i++) {
//     if (i % 2 === 0) {
//         console.log(i)
//     }
// }

// 26.
// const listaNumeros = [1, 2, 3, 4, 5]

// function somarLista(numeros) {
//     let soma = 0
//     for (let i = 0; i < numeros.length; i++) {
//         soma += numeros[i]
//     }
//     return soma
// }

// console.log(`A soma dos números da lista é: ${somarLista(listaNumeros)}`)

// 27.
// const listaNotas = [7, 8, 9, 6, 10]

// function calcularMediaLista(notas) {
//     let soma = 0
//     for (let i = 0; i < notas.length; i++) {
//         soma += notas[i]
//     }
//     return soma / notas.length
// }

// console.log(`A média das notas da lista é: ${calcularMediaLista(listaNotas)}`)

// 28.
// const produtos = {
//     nome: "Notebook",
//     preco: 2500,
//     quantidadeEstoque: 10
// }

// if (produtos.quantidadeEstoque > 0) {
//     console.log(`O produto ${produtos.nome} está disponível em estoque.`)
// } else {
//     console.log(`O produto ${produtos.nome} não está disponível em estoque.`)
// } 

// 29.
// const Nome = "Bruno"
// const nota1 = 7
// const nota2 = 8

// function calcularMedia(n1, n2) {
//     return (n1 + n2) / 2
// }

// if (calcularMedia(nota1, nota2) >= 7) {
//     console.log(`O aluno ${Nome} foi aprovado com média ${calcularMedia(nota1, nota2)}`)
// }else if (calcularMedia(nota1, nota2) >= 5 && calcularMedia(nota1, nota2) < 7) {
//     console.log(`O aluno ${Nome} está de recuperação com média ${calcularMedia(nota1, nota2)}`)
// }else {
//     console.log(`O aluno ${Nome} foi reprovado com média ${calcularMedia(nota1, nota2)}`)
// }

// 30.
const Alunos = {
    Nome: "Bruno",
    Nota1: 7,
    Nota2: 8,

    Nome2: "João",
    Nota3: 5,
    Nota4: 6,

    Nome3: "Maria",
    Nota5: 4,
    Nota6: 3
}

const media1 = (Alunos.Nota1 + Alunos.Nota2) / 2
const media2 = (Alunos.Nota3 + Alunos.Nota4) / 2
const media3 = (Alunos.Nota5 + Alunos.Nota6) / 2

if (media1 >= 7) {
    console.log(`O aluno ${Alunos.Nome} foi aprovado com média ${media1}`)
}else if (media1 >= 5 && media1 < 7) {
    console.log(`O aluno ${Alunos.Nome} está de recuperação com média ${media1}`)
}else {
    console.log(`O aluno ${Alunos.Nome} foi reprovado com média ${media1}`)
}

if (media2 >= 7) {
    console.log(`O aluno ${Alunos.Nome2} foi aprovado com média ${media2}`)
}else if (media2 >= 5 && media2 < 7) {
    console.log(`O aluno ${Alunos.Nome2} está de recuperação com média ${media2}`)
}else {
    console.log(`O aluno ${Alunos.Nome2} foi reprovado com média ${media2}`)
}

if (media3 >= 7) {
    console.log(`O aluno ${Alunos.Nome3} foi aprovado com média ${media3}`)
}else if (media3 >= 5 && media3 < 7) {
    console.log(`O aluno ${Alunos.Nome3} está de recuperação com média ${media3}`)
}else {
    console.log(`O aluno ${Alunos.Nome3} foi reprovado com média ${media3}`)
}
