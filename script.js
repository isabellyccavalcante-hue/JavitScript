//console.log() mostra uma informação no console
console.log("Olá, Mundo!"); 
console.log(6 + "  7")

console.log("Olá, Mundo!"); 
console.log(typeof 22)
console.log(typeof 10.5) //number
console.log(typeof true) //boolean
console.log(typeof false) //boolean

//váriavel
// const não pode ter seu valor alterado durante o programa
const nome = "Isabelly";
console.log(nome);

// let pode ter seu valor alterado durante o programa
let idade = 19;
console.log(idade);

console.log("Olá " + nome + ", que tem " + idade + "anos.");

idade = 20;
console.log(idade);


console.log(`Olá ${nome}, que tem ${idade} anos.`);

//vàriavel 2
// const não pode ter seu valor alterado durante o programa
const nome2 = "Nany";
console.log(nome2);

// let pode ter seu valor alterado durante o programa
let peso = 52;
console.log(peso);

console.log(`Olá ${nome2}, que tem ${peso} kilos.`);

peso = 53;
console.log(peso)

console.log(`Olá ${nome2}, que tem ${peso} kilos.`);

//Métodos de string
const texto = "Travesseiro"

//conta quantos caracteres a string tem
console.log(texto.length)

//Altera todas as letras para maiusculo
console.log(texto.toUpperCase())

//Altera todas as letras para minúsculo
console.log(texto.toLowerCase())

const nome_completo = "Isabelly Christini Santana Cavalcante"

console.log(nome_completo.includes("Santana")) // true

console.log(10 > 5) //true
console.log(10 < 5) //false
console.log(10 >= 10) //true
console.log(10 <= 5) //false
console.log("10" == 10) //true
console.log("10" === 10) //false
console.log("10" !== 5) //true

const idadePessoa = 17

console.log(idadePessoa >= 18) //false
console.log(idadePessoa >= 16) //true

//váriavel 3
const nome_completo1 = "Santana"
const nome_completo2 = "santana"
console.log("Santana" == "santana")

// coletamos a idade da pessoa
let pessoaIdade = 19;
// verificar se a idade é maior ou igual a 18
if(pessoaIdade >= 18){
    // se maior ou igual a 18 entã ela é maior de idade
    console.log("Já pode Ser Preso HAHAHAHA!")                                                                  
}else{
    // senão, então ela é menor de idade
    console.log("Não vai pra balada!😂😂😂")
}


// coletamos a idade da pessoa
let idadeVotacao = 16
// verificamos se a idade da pessoa é maior que 70
if (idadeVotacao > 70) {
    console.log("Você não é obrigado a votar!")
} else if (idadeVotacao >= 18) {
    // senão se a idade da pessoa for maior ou igual a 18
    console.log("Você tem que votar obrigatoriamente!")
} else if (idadeVotacao >= 16) {
    // senão se a idade da pessoa for maior ou igual a 16
    console.log("Você não é obrigado a votar, mas caso queira pode!")
} else {
    // senão for nenhuma das alternativas anteriores
    console.log("Você NÃO pode votar!")
}

// Parte 1 — Decisões simples

// 01 — Aprovação escolar
let media = 8;
if (media >= 7) {
  console.log("Aprovado!");
} else {
  console.log("Reprovado!");
}

//  02 — Comparação de dois números
let número1 = 5;
let número2 = 5;

if (número1 = 5 > 5) { 
    console.log("O primeiro é maior"); 
} else if (número2 = 5 > 5) {
    console.log("O segundo é maior");  
} else {
    console.log("Houve empate");       
}

// 03 — Verificação de senha
let senha = prompt("Digite a senha:");

if (senha == "senai123") {
    alert("Acesso autorizado");
} else {
    alert("Senha incorreta");
}

// Parte 2 — Múltiplos caminhos

// 04 — Classificação de temperatura
const temperatura = 29; 

if (temperatura < 18) {
    console.log("Frio");
} else if (temperatura <= 27) {
    console.log("Agradável");
} else {
    console.log("Quente");
}

//05 — Classificação de nota
let nota = 0; 

if (nota >= 9) {
    console.log("Excelente");
} else if (nota >= 7) {
    console.log("Bom");
} else if (nota >= 5) {
    console.log("Regular");
} else {
    console.log("Insuficiente");
}

//06 — Dia da semana
const semana = 7;

if (semana == 1) {
    console.log("Domingo");
} else if (semana == 2) {
    console.log("Segunda");
} else if (semana == 3) {
    console.log("Terça");
} else if (semana == 4) {
    console.log("Quarta");
} else if (semana == 5) {
    console.log("Quinta");
} else if (semana == 6) {
    console.log("Sexta");
} else if (semana == 7) {
    console.log("Sabádo");
}else {
    console.log("Dia Inválido");
}