const botoes = document.querySelectorAll('.btn');

botoes.forEach(btn => btn.addEventListener('click', filtrarLivros));

function filtrarLivros(){
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value;

    let livrosFiltrados = livros.filter(livro => {
        return categoria == 'disponivel' ? livro.quantidade > 0 : livro.categoria == categoria
    })
    
    exibirLivrosNaTela(livrosFiltrados)    

    if(categoria == 'disponivel') {
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados);

        elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
            <div class="livros__disponiveis">
                <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
            </div>
        `
    }
} 