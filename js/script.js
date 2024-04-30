// console.log("Olá, mundo!");

// const btnElemento = document.getElementById("botao");
// btnElemento.addEventListener("click", function(){
//     console.log("Clicaram no meu butao!!")
// });

// document.getElementById("botao").addEventListener("click", function(){
//     console.log("Clicaram no meu butao!!")
// })

// var nome = "João";
// let sobrenome = "Silva";
// console.log("Nome completo: " + nome + " " + sobrenome);
// const idade = 20;
// console.log("Idade: " + idade)

// Hoisting:
// var nome = "João";
// let sobrenome = "Silva";

// if(true){
//     let nome = "Marcos"
// }

// console.log(nome)

// if(true){
//     let nome = "Marcos"
//     console.log(nome)
// }

// Tipos de Dados:
let tiposDeDados = [
    "Number", 
    "String", 
    "Boolean", 
    "Null", 
    "Undefined", 
    "Object", 
    "Array", 
    "Function"
]


//Recuperando a lista ul através do id
let listaTiposDeDados = document.getElementById("tipo-dados");

tiposDeDados.forEach((tipo)=>{
    //Criando um elemento <li> para inserir na <ul>
    let itemLista = document.createElement("li");
    //Adicionando o texto do tipo de dado
     itemLista.innerText = tipo;
     //Inserindo o elemento <li> na <ul>
     listaTiposDeDados.appendChild(itemLista);
});

// tiposDeDados.forEach((tipo)=>{
//     console.log(tipo);
// });
//               ==^
// tiposDeDados.forEach(function(tipo){
//     console.log(tipo);
// });

// console.table(tiposDeDados)
