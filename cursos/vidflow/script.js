const containerVideos = document.querySelector('.videos__container');


async function buscarEMostrarVideos(){
    try{
        const busca = await fetch("http://localhost:3000/videos");
        const videos = await busca.json();
    
        videos.forEach(video => {
            if(video.categoria == '') throw new Error('Vídeo sem categoria');

            containerVideos.innerHTML += `
            <li class="videos__item">
                <iframe src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>
                <div class="descricao-video">
                    <img src="${video.imagem}" alt="Logo do Canal" class="img-canal">
                    <h3 class="titulo-video">${video.titulo}</h3>
                    <p class="titulo-canal">${video.descricao}</p>
                    <p class="categoria" hidden>${video.categoria}</p>
                </div>
            </li>
            `; 
        })
    } catch(error){
        containerVideos.innerHTML = `<p>Houve um erro ao carregar os videos: ${error}</p>`; 
    }

}

buscarEMostrarVideos();


const barraDePesquisa = document.querySelector('.pesquisar__input');

barraDePesquisa.addEventListener('input', filtrarPesquisa);

function filtrarPesquisa() {
    const videos = document.querySelectorAll('.videos__item');
    let valorFiltro = barraDePesquisa.value.toLowerCase();

    videos.forEach((video) => {
        let titulo = video.querySelector('.titulo-video').textContent.toLowerCase();

        video.style.display = valorFiltro ? titulo.includes(valorFiltro) ? 'block' : 'none' : 'block'
    })
}

const botaoCategoria = document.querySelectorAll('.superior__item');

botaoCategoria.forEach(botao => {
    let categoria = botao.getAttribute('name');
    botao.addEventListener('click', () => filtrarPorCategoria(categoria))
})

function filtrarPorCategoria(filtro) {
    const videos = document.querySelectorAll('.videos__item');

    videos.forEach(video => {
        let categoria = video.querySelector('.categoria').textContent.toLowerCase();
        let valorFiltro = filtro.toLowerCase()
        video.style.display = (!categoria.includes(valorFiltro) && valorFiltro != 'tudo')  ? 'none' : 'block';
    })
}