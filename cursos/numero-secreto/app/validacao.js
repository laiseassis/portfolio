function verificaSeChutePossuiValorValido(chute){
    const numero = +chute; //o mais na frente já transforma o numero em inteiro

    if(chuteForInvalido(numero)){
        elementoChute.innerHTML += '<div>Valor Inválido</div>';
        return
    }

    if(numeroForMaiorOuMenorQuePermitido(numero)){
        elementoChute.innerHTML += `<div>Valor Inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>`;
        return
    }

    if(chute == numeroSecreto){
        document.body.innerHTML = `
            <h2>Você acertou!</h2><br>
            <h3>O número secreto era ${numeroSecreto}</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
        recognition.stop();
        return
    } else if(chute < numeroSecreto){
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`
    } else if(chute > numeroSecreto){
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>`
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQuePermitido(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente'){
        window.location.reload();
    }
})
