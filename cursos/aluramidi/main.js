const listaDeTeclas = document.querySelectorAll('.tecla');

for (i=0; i < listaDeTeclas.length; i++){
    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];
    const idAudio = '#som_' + instrumento;

    tecla.onclick = () => tocaSom(idAudio, tecla);

    tecla.onkeydown = (evento) => {
        if(evento.code.includes('Enter', 'Space')){
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = (evento) => {
        if(evento.code.includes('Enter', 'Space')){
            tecla.classList.remove('ativa');    
        }
    }
}

function tocaSom (idElementoAudio){  
    const elemento = document.querySelector(idElementoAudio);
    
    if(elemento === null || elemento.localName != 'audio') return;

    elemento.play();
}
