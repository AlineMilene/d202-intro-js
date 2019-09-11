// DECLARAÇÃO DE VARIAVEIS:
// (palavras reservada para criar variável)

var variavel1; // não usar (escolpo)
let variavel2; // melhor jeito 
const variavel3 = 3; // momentos específicos (constante)

// ATRIBUIÇÃO

var variavel4 = 12;
let variavel5 = "estação hack";
const variavel6 = true;

// TIPOS DE DADOS

let exemplo;
exemplo = "Aline"; // texto
exemplo = 17; // inteiro
exemplo = 1.68; // double
exemplo = true; // boolean
exemplo = false; // boolean

let saboresDePizza;

saboresDePizza = ["brocolis", "baiana", "portuguesa", "mussarela", "strogonff"]; 

let fagner = ["Mauricio", 18, true, "Santana", ["pé de moleque", "mousse", "pudim"]]; 
// criação de lista
// lista dentro de lista e tipos de variaveis diferentes dentro da lista
// abrir lista dentro de lista Fagner [4][2]
// saboresDePizza.push("chocolate") --> empurrar novo sabor
// saboresDePizza.pop() --> tira o ultimo
// saboresDePizza.pop("brocolis") --> escolho qual tirar
// saboresDePizza.length --> tamanho da lista

let fayra = {
    sobrenome: 'Miranda',
    idade: 25,
    viva: true,
    cidade: 'Osasco',
    hobbies: ["dança", "desenho", "leitura"],
};
// CRIAÇÃO DE OBJETO
// nome em vez de número para pesquisar na lista
// fayra.sobrenome --> acessar as coisas
// fayra.irmaos = 1 --> criar uma chave irmaos
// fayra.hobbies.push("coaching") --> adicionar uma chave na lista de hobbies

let barbara = {
    sobrenome: 'Moreira',
    idade: 19,
    viva: true,
    bairro: "Freguesia do Ó",
    hobbies: ["otaku", "dorameira", "capopeira"],
    amiga: fayra
}

// OPERADORES RELACIONAIS 
// == --> comparação
// == --> compração tipo de dados e valor
// != --> diferente
// !== --> diferente tipo de dados e valor
// >= --> maior igual
// <= --> menor igual
// ! --> 'not', não
//  && --> e
// || --> ou


// ESTRUTURAS
/*
                *** ELSE E IF***
if(condicao){
    codigo executado quando a condição é verdadeira
}
else if(){
    codigo executado caso o primeiro não seja atendido
}
else{
    condigo executado se as condicoes forem falsas
}
*/

// ENTRADAS DO NAVEGADOR
// prompt

// SAÍDA DO NAVEGADOR
// alert
// console.log

// ESTRUTURAS DE REPETIÇÃO
/* 
       **** Enquanto = while ****
while(condicao){
    codigo a ser repetido
}
*/


//           **** EXERCICIO 1 - LOGIN ****
// let usuario = "estacaohack";
// let senha = "coach";
// let saldo = 1000;

//     let putUsuario = prompt("Digite o seu usuário");
    
// if(usuario == putUsuario){
//     let putSenha = prompt("Digite a sua senha");
//     if(senha == putSenha){
//         let saque = Number(prompt("Digite o valor desejado para saque: "));
//         if(saque <= saldo){
//             alert("Saque realizado com sucesso")
//             saldo = saldo - saque
//             alert(`Seu novo saldo é ${saldo}`);
//         }
//         else{
//             alert("Saldo insuficiente!");
//         }
//     }
//     else{
//         alert("Senha incorreta!");
//     }
// }
// else{
//     alert("Usuario incorreto!")
// }

// let numero = 0;

// while(numero <= 10){
//     console.log(7 * numero);
//     numero++;
// }

let usuario = "estacaohack";
let senha = "coach";
let tentativas = 1;

while(tentativas <=3){
    let usuarioDigitado = prompt("Digite o seu usuário");
    let senhaDigitada = prompt("Digite a sua senha");

    if(usuario == usuarioDigitado && senha == senhaDigitada){    
        alert("Você logou!")
        tentativas = 5;
    }
    else{
        alert("Usuario e/ou senha incorretos!")
        tentativas++; 
        if(tentativas == 4){
            alert("Conta bloqueada")
        }
    }
}







