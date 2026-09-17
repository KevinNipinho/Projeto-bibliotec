const livros = document.querySelectorAll(".livro");

const botaoAnterior = document.getElementById("pagina-anterior");
const botaoPosterior = document.getElementById("pagina-posterior")
const numeroPagina = document.querySelector(".pagina-atual")
const quantidadeLivros = document.querySelector(".quantidade-livros")

// Configuração de paginação 

// Define quantos livros serão mostrados em cada página

const livrosPorPagina = 4;

// Guarda qual página está sendo exibida, começando na página 1
let paginaAtual = 1;

// Calculando um total de páginas
// Divide a quantidade total d elivros pela quantidade de livros por página
// Math.ceil() -> arredonda o resultado para cima

/*
    Exemplo:
    10 livros / 4 por página = 2.5
    Math.ceil() = 2.5 arredondado pra cima -> 3 páginas
*/
const totalPaginas = Math.ceil(livros.length / livrosPorPagina);

// Função responsável por mostrar a página (atualizar os elementos)

function mostrarPagina() {

    
    const inicio = (paginaAtual - 1) * livrosPorPagina;
    
    const fim = inicio + livrosPorPagina;
    
    livros.forEach((livro, posicao) => {
        if (posicao >= inicio && posicao < fim) {
            livro.style.display = "grid";
            
        }
        else {
            livro.style.display = "none";
        }
    });
    
    numeroPagina.textContent = paginaAtual;

    let ultimoLivro = fim;

    if(ultimoLivro > livros.length) {
        ultimoLivro = livros.length;
    }

    quantidadeLivros.textContent = `Mostrando ${ultimoLivro} de ${livros.length} livros`;
    
}

botaoPosterior.addEventListener("click", () => {
    if(paginaAtual < totalPaginas){
        paginaAtual++;
        mostrarPagina(); // Atualiza os livros exividos na tela
    }
})

botaoAnterior.addEventListener("click", () =>{
    if(paginaAtual > 1) {
        paginaAtual--;
        mostrarPagina(); 
    }
})

mostrarPagina();


