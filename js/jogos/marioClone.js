//import plataforma from '../../img/marioClone/platform.png'

const canvas            = document.querySelector('canvas')
const contexto          = canvas.getContext('2d')
const gravidade         = 0.5
const plataformaCaminho = "../../img/marioClone/platform.png"
const colinaCaminho     = "../../img/marioClone/hills.png"
const fundoCaminho      = "../../img/marioClone/background.png"
const pequenaCaminho    = "../../img/marioClone/platformSmallTall.png"
const correndoEsquerda  = "../../img/marioClone/spriteRunLeft.png"
const correndoDireita   = "../../img/marioClone/spriteRunRight.png"
const esperandoEsquerda = "../../img/marioClone/spriteStandLeft.png"
const esperandoDireita  = "../../img/marioClone/spriteStandRight.png"

canvas.width  = 1024
canvas.height = 576

class Jogador {
    constructor() {
        this.posicao    = {x: 100, y: 100}
        this.velocidade = {x: 0, y: 0}
        this.aceleracao = 10
        this.forca      = 15
        this.largura = 66
        this.altura  = 150
        this.quadros = 0
        this.molduras = {
            esperando: {
                esquerda: criarImagem(esperandoEsquerda),
                direita:criarImagem(esperandoDireita),
                corteLargura: 177,
                largura: 66
            },
            correndo: {
                esquerda: criarImagem(correndoEsquerda),
                direita: criarImagem(correndoDireita),
                corteLargura: 341,
                largura: 127.875
            }
        }

        this.molduraAtual      = this.molduras.esperando.direita
        this.corteLarguraAtual = this.molduras.esperando.corteLargura
    }

    desenhar() {
        this.quadros++

        if (this.quadros > 59 && this.molduraAtual === this.molduras.esperando.direita
            || this.quadros > 59 && this.molduraAtual === this.molduras.esperando.esquerda) {
            this.quadros = 0
        } else if (this.quadros > 29 && this.molduraAtual === this.molduras.correndo.direita
            || this.quadros > 29 && this.molduraAtual === this.molduras.correndo.esquerda) {
            this.quadros = 0
        }

        contexto.drawImage(
            this.molduraAtual, 
            this.corteLarguraAtual * this.quadros, 
            0, 
            this.corteLarguraAtual, 
            400, 
            this.posicao.x, 
            this.posicao.y, 
            this.largura, 
            this.altura
        )
        //contexto.fillStyle = 'red'
        //contexto.fillRect(this.posicao.x, this.posicao.y, this.largura, this.altura)
    }

    atualizar() {
        this.desenhar()

        this.posicao.y += this.velocidade.y
        this.posicao.x += this.velocidade.x

        if (this.posicao.y + this.altura + this.velocidade.y <= canvas.height) {
            this.velocidade.y += gravidade
        }

    }
}

class Plataforma {
    constructor({x, y, imagem}) {
        this.posicao = {x, y}
        this.imagem  = imagem
    }

    desenhar() {
        this.largura = this.imagem.width
        this.altura  = this.imagem.height
        contexto.drawImage(this.imagem, this.posicao.x, this.posicao.y)
        //contexto.fillStyle = 'blue'
        //contexto.fillRect(this.posicao.x, this.posicao.y, this.largura, this.altura)
    }
}

class ObjetoGenerico {
    constructor({x, y, imagem}) {
        this.posicao = {x, y}
        this.imagem  = imagem
    }

    desenhar() {
        this.largura = this.imagem.width
        this.altura  = this.imagem.height
        contexto.drawImage(this.imagem, this.posicao.x, this.posicao.y)
        //contexto.fillStyle = 'blue'
        //contexto.fillRect(this.posicao.x, this.posicao.y, this.largura, this.altura)
    }
}

function criarImagem(imagemCaminho) {
    const imagem = new Image()

    imagem.src = imagemCaminho

    return imagem
}

let jogador             = new Jogador()
let plataformas         = []
let objetosGenericos    = []
let teclas              = {}
let rolagemDeslocamento = 0
let pequenaImagem       = criarImagem(pequenaCaminho)
let plataformaImagem    = criarImagem(plataformaCaminho)
let fundoImagem         = criarImagem(fundoCaminho)
let colinaImagem        = criarImagem(colinaCaminho)
let teclaAtual          = ""
let pulando             = false

function inicio() {
    jogador = new Jogador()
    plataformas = [
        new Plataforma({x:  577 * 4 + 300 + 577 - 288, y: 270, imagem: pequenaImagem}),
        new Plataforma({x: -1, y: 470, imagem: plataformaImagem}),
        new Plataforma({x: 577, y: 470, imagem: plataformaImagem}),
        new Plataforma({x: 577 * 2 + 100, y: 470, imagem: plataformaImagem}),
        new Plataforma({x: 577 * 3 + 300, y: 470, imagem: plataformaImagem}),
        new Plataforma({x: 577 * 4 + 300, y: 470, imagem: plataformaImagem}),
        new Plataforma({x: 577 * 5 + 700, y: 470, imagem: plataformaImagem})
    ]
    objetosGenericos = [
        new ObjetoGenerico({x: -1, y: -1, imagem: fundoImagem}), 
        new ObjetoGenerico({x: 0, y: 0, imagem: colinaImagem})
    ]
    teclas = {
        esquerda: { pressionada: false },
        baixo: { pressionada: false },
        direita: { pressionada: false },
        cima: { pressionada: false },
    }
    rolagemDeslocamento = 0
}

function animar() {
    requestAnimationFrame(animar)

    contexto.fillStyle = 'white'
    contexto.fillRect(0, 0, canvas.width, canvas.height)

    objetosGenericos.forEach((objetoGenerico) => {
        objetoGenerico.desenhar()
    })

    plataformas.forEach((plataforma) => {
        plataforma.desenhar()
    })

    jogador.atualizar()

    if ((teclas.esquerda.pressionada && jogador.posicao.x > 100)
        || teclas.esquerda.pressionada && rolagemDeslocamento === 0 && jogador.posicao.x > 0) {
        jogador.velocidade.x = -jogador.aceleracao
    } else if (teclas.direita.pressionada && jogador.posicao.x < 400) {
        jogador.velocidade.x = jogador.aceleracao
    } else {
        jogador.velocidade.x = 0

        if (teclas.esquerda.pressionada && rolagemDeslocamento > 0) {
            rolagemDeslocamento -= jogador.aceleracao

            objetosGenericos.forEach((objetoGenerico) => {
                objetoGenerico.posicao.x += jogador.aceleracao * .66
            })
            
            plataformas.forEach((plataforma) => {
                plataforma.posicao.x += jogador.aceleracao
            })
        } else if (teclas.direita.pressionada) {
            rolagemDeslocamento += jogador.aceleracao

            objetosGenericos.forEach((objetoGenerico) => {
                objetoGenerico.posicao.x -= jogador.aceleracao * .66
            })

            plataformas.forEach((plataforma) => {
                plataforma.posicao.x -= jogador.aceleracao
            })
        }

        console.log(rolagemDeslocamento)
    }

    //troca de molduras
    if (teclas.direita.pressionada 
        && teclaAtual === "direita" 
        && jogador.molduraAtual !== jogador.molduras.correndo.direita) {
        jogador.quadros = 1
        jogador.molduraAtual = jogador.molduras.correndo.direita
        jogador.corteLarguraAtual = jogador.molduras.correndo.corteLargura
        jogador.largura = jogador.molduras.correndo.largura
    } else if (teclas.esquerda.pressionada 
        && teclaAtual === "esquerda" 
        && jogador.molduraAtual !== jogador.molduras.correndo.esquerda) {
        jogador.quadros = 1
        jogador.molduraAtual = jogador.molduras.correndo.esquerda
        jogador.corteLarguraAtual = jogador.molduras.correndo.corteLargura
        jogador.largura = jogador.molduras.correndo.largura
    } else if (!teclas.direita.pressionada 
        && teclaAtual === "direita" 
        && jogador.molduraAtual !== jogador.molduras.esperando.esquerda) {
        jogador.quadros = 1
        jogador.molduraAtual = jogador.molduras.esperando.direita
        jogador.corteLarguraAtual = jogador.molduras.esperando.corteLargura
        jogador.largura = jogador.molduras.esperando.largura
    } else if (!teclas.esquerda.pressionada 
        && teclaAtual === "esquerda" 
        && jogador.molduraAtual !== jogador.molduras.esperando.esquerda) {
        jogador.quadros = 1
        jogador.molduraAtual = jogador.molduras.esperando.esquerda
        jogador.corteLarguraAtual = jogador.molduras.esperando.corteLargura
        jogador.largura = jogador.molduras.esperando.largura
    }
    
    //detecção colisão plataforma    
    plataformas.forEach((plataforma) => {
        if (jogador.posicao.y + jogador.altura <= plataforma.posicao.y
            && jogador.posicao.y + jogador.altura + jogador.velocidade.y >= plataforma.posicao.y
            && jogador.posicao.x + jogador.largura >= plataforma.posicao.x
            && jogador.posicao.x <= plataforma.posicao.x + plataforma.largura
        ) {
            jogador.velocidade.y = 0

            pulando = false
        }
    })

    //condição de vitória
    if (rolagemDeslocamento > 3230) {
        console.log("você ganhou!")
    }
    
    //condição de derrota
    if (jogador.posicao.y > canvas.height) {
        console.log("você perdeu!")
        inicio()
    }
}

inicio()
animar()

addEventListener('keydown', ({key}) => {
    console.log(key)
    switch(key) {
        case "ArrowLeft":
            //console.log('esquerda')
            teclas.esquerda.pressionada = true
            teclaAtual = "esquerda"
            break
        case "ArrowDown":
            //console.log('baixo')
            teclas.baixo.pressionada = true
            break
        case "ArrowRight":
            //console.log('direita')
            teclas.direita.pressionada = true
            teclaAtual = "direita"
            break
        case "ArrowUp":
            //console.log('cima')
            if (!pulando) {
                jogador.velocidade.y -= jogador.forca
                
                pulando = true
            }
            break
    }
})

addEventListener('keyup', ({key}) => {
    switch(key) {
        case "ArrowLeft":
            //console.log('esquerda')
            teclas.esquerda.pressionada = false
            break
        case "ArrowDown":
            //console.log('baixo')
            teclas.baixo.pressionada = false
            break
        case "ArrowRight":
            //console.log('direita')
            teclas.direita.pressionada = false
            break
        case "ArrowUp":
            //console.log('cima')
            break
    }
})