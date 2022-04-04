function retanguloColisao({retangulo1, retangulo2}) {
    return (retangulo1.caixaAtaque.posicao.x + retangulo1.caixaAtaque.largura >= retangulo2.posicao.x
            && retangulo1.caixaAtaque.posicao.x <= retangulo2.posicao.x + retangulo2.largura
            && retangulo1.caixaAtaque.posicao.y + retangulo1.caixaAtaque.altura >= retangulo2.posicao.y
            && retangulo1.caixaAtaque.posicao.y <= retangulo2.posicao.y + retangulo2.altura)
}

function determinarVencedor({jogadorA, jogadorB, tempoId}) {
    clearTimeout(tempoId)

    document.querySelector("#mensagem").style.display = "flex"

    if (jogadorA.vida === jogadorB.vida){
        document.querySelector("#mensagem").innerHTML = "Empate!"
    } else if (jogadorA.vida > jogadorB.vida){
        document.querySelector("#mensagem").innerHTML = "Jogador A ganhou!"
    } else if (jogadorA.vida < jogadorB.vida){           
        document.querySelector("#mensagem").innerHTML = "Jogador B ganhou!"
    }  
}

let tempo = 60
let tempoId

function diminuirTempo() {
    tempoId = setTimeout(diminuirTempo, 1000)

    if (tempo > 0) {
        tempo--

        document.querySelector("#tempo").innerHTML = tempo
    }

    if (tempo === 0) {
        determinarVencedor({jogadorA, jogadorB, tempoId})      
    }
}