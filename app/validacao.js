function verificaSeOChutePossuiValorValido(chute){
    const numero =+ chute

    if (seChuteForInvalido(numero)){
        elementoChute.innerHTML += `<div class="diga-um-numero">Precisa dizer um número de 0 até 100! </div>`
        return
    }

    if (seNumeroForMaiorOuMenorQueOPermitido(numero)){
        elementoChute.innerHTML += `Valor inválido! O número secreto está entre ${menorValor} e ${maiorValor}`
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML += `
        <h2 class="parabens">Parabéns! Você acertou!</h2>
        <h3 class="parabens">O Número secreto era ${numeroSecreto}</h3>

        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
        return
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-sharp fa-solid fa-down-long"></i></div>`
    } else {
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-sharp fa-solid fa-up-long"></i></div>`
    }
}

function seChuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function seNumeroForMaiorOuMenorQueOPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if(e.target.id =='jogar-novamente') {
        window.location.reload()
    }
})
