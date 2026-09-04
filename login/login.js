
// console.log("Hello world!!");

// alert("Hello world!!")

// var nome = "blabla" - PROIBIDO, DA MUITOS PROBLEMAS

// let nome = "blabla"
// console.log(nome)
// nome = "billy"
// console.log(nome)


const senha = document.getElementById("input-senha");
const btnSenha = document.querySelector("#mostrar-senha");

btnSenha.addEventListener("click", function() {

    // if(senha.type == "password")
    // {
    //  senha.type = "text";   
    // }
    // else
    // {
    //     senha.type = "password";
    // }

    senha.type = senha.type == "password" ? "text" : "password";
});