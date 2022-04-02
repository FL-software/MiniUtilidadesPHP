const quadro  = document.querySelector('canvas')
const contexto = quadro.getContext('2d')

quadro.width = 1024
quadro.height = 576

contexto.fillRect(0, 0, quadro.width, quadro.height)

const gravidade = 0.7

class Figura {
    constructor({posicao, velocidade, cor = 'red', deslocamento}) {
        this.posicao = posicao
        this.velocidade = velocidade
        this.largura = 50
        this.altura = 150
        this.ultimaTecla
        this.caixaAtaque = {
            posicao: {
                x: this.posicao.x,
                y: this.posicao.y
            },
            deslocamento: deslocamento,
            largura: 100,
            altura: 50,
        }
        this.cor = cor
        this.estaAtacando
        this.vida = 100
    }

    desenha() {
        //corpo
        contexto.fillStyle = this.cor
        contexto.fillRect(this.posicao.x, this.posicao.y, this.largura, this.altura)

        //caixa de ataque
        if (this.estaAtacando) {
            contexto.fillStyle = 'green'
            contexto.fillRect(this.caixaAtaque.posicao.x, this.caixaAtaque.posicao.y, this.caixaAtaque.largura, this.caixaAtaque.altura)
        }       
    }

    atualiza() {
        this.desenha()

        this.caixaAtaque.posicao.x = this.posicao.x + this.caixaAtaque.deslocamento.x
        this.caixaAtaque.posicao.y = this.posicao.y
        this.posicao.x += this.velocidade.x
        this.posicao.y += this.velocidade.y

        if (this.posicao.y + this.altura + this.velocidade.y >= quadro.height) {
            this.velocidade.y = 0
        } else {
            this.velocidade.y += gravidade
        }
    }

    ataque() {
        this.estaAtacando = true

        setTimeout(() => {
            this.estaAtacando = false
        }, 100)
    }
}

const jogadorA = new Figura({
    posicao: {
        x:0,
        y:0
    },
    velocidade: {
        x:0,
        y:0
    },
    deslocamento: {
        x: 0,
        y: 0
    }
})

const jogadorB = new Figura({
    posicao: {
        x:400,
        y:100
    },
    velocidade: {
        x:0,
        y:0
    },
    cor: 'blue',
    deslocamento: {
        x: -50,
        y: 0
    }
})

const teclas = {
    a: { pressionada: false },
    d: { pressionada: false },
    SetaEsquerda: { pressionada: false },
    SetaDireita: { pressionada: false },
}

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

function diminuirTempo(){
    tempoId = setTimeout(diminuirTempo, 1000)

    if (tempo > 0){
        tempo--

        document.querySelector("#tempo").innerHTML = tempo
    }

    if (tempo === 0){
        determinarVencedor({jogadorA, jogadorB, tempoId})      
    }
}

diminuirTempo()

function animar() {
    window.requestAnimationFrame(animar)

    contexto.fillStyle = 'black'
    contexto.fillRect(0, 0, quadro.width, quadro.height)

    jogadorA.atualiza()
    jogadorA.velocidade.x = 0

    //movimento jogadorA
    if (teclas.a.pressionada && jogadorA.ultimaTecla === 'a') {
        jogadorA.velocidade.x = -5
    } else if (teclas.d.pressionada && jogadorA.ultimaTecla === 'd') {
        jogadorA.velocidade.x = 5
    }

    jogadorB.atualiza()
    jogadorB.velocidade.x = 0

    //movimento jogadorB
    if (teclas.SetaEsquerda.pressionada && jogadorB.ultimaTecla === 'SetaEsquerda') {
        jogadorB.velocidade.x = -5
    } else if (teclas.SetaDireita.pressionada && jogadorB.ultimaTecla === 'SetaDireita') {
        jogadorB.velocidade.x = 5
    }

    //detecção de colisão
    if (retanguloColisao({retangulo1: jogadorA, retangulo2: jogadorB}) && jogadorA.estaAtacando) {
        jogadorA.estaAtacando = false
        
        jogadorB.vida -= 20

        document.querySelector('#vidaJogadorB').style.width = jogadorB.vida + "%"
    }
    
    if (retanguloColisao({retangulo1: jogadorB, retangulo2: jogadorA}) && jogadorB.estaAtacando) {
        jogadorB.estaAtacando = false

        jogadorA.vida -= 20

        document.querySelector('#vidaJogadorA').style.width = jogadorA.vida + "%"
    }

    //fim de jogo baseado em vida
    if (jogadorB.vida <= 0 || jogadorA.vida <= 0){
        determinarVencedor({jogadorA, jogadorB, tempoId})
    }
}

animar()

window.addEventListener('keydown', (event)=>{
    console.log('Tecla pressionada: ' + event.key);

    switch(event.key) {
        //teclas jogadorA
        case 'a':
            teclas.a.pressionada = true
            jogadorA.ultimaTecla = 'a'
            break
        case 'd':
            teclas.d.pressionada = true
            jogadorA.ultimaTecla = 'd'
            break
        case 'w':
            jogadorA.velocidade.y = -20
            break
        case 'v':
            jogadorA.ataque()
            break
        //teclas jogadorB
        case 'ArrowLeft':
            teclas.SetaEsquerda.pressionada = true
            jogadorB.ultimaTecla = 'SetaEsquerda'
            break
        case 'ArrowRight':
            teclas.SetaDireita.pressionada = true
            jogadorB.ultimaTecla = 'SetaDireita'
            break
        case 'ArrowUp':
            jogadorB.velocidade.y = -20
            break
        case '0':
            jogadorB.ataque()
            break
    }
})

window.addEventListener('keyup', (event)=>{
    switch(event.key) {
        //teclas jogadorA
        case 'a':
            teclas.a.pressionada = false
            break
        case 'd':
            teclas.d.pressionada = false
            break
        //teclas jogadorB
        case 'ArrowLeft':
            teclas.SetaEsquerda.pressionada = false
            break
        case 'ArrowRight':
            teclas.SetaDireita.pressionada = false
            break
    }
})