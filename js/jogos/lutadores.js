const quadro  = document.querySelector('canvas')
const contexto = quadro.getContext('2d')

quadro.width = 1024
quadro.height = 576

contexto.fillRect(0, 0, quadro.width, quadro.height)

const gravidade = 0.7

const fundoDeTela = new Figura({
    posicao: {x: 0, y: 0},
    caminhoImagem: '../../img/lutadores/background.png'
})

const loja = new Figura({
    posicao: {x: 600, y: 128},
    caminhoImagem: '../../img/lutadores/shop.png',
    escala: 2.75,
    molduras: 6
})

const jogadorA = new Lutador({
    posicao: {x: 0, y: 0},
    velocidade: {x: 0, y: 0},
    caminhoImagem: '../../img/lutadores/samuraiMack/Idle.png',
    molduras: 8,
    escala:2.5,
    deslocamento: {x: 215, y: 157},
    figuras: {
        ocioso: {
            caminhoImagem: '../../img/lutadores/samuraiMack/Idle.png',
            molduras: 8
        },
        corre: {
            caminhoImagem: '../../img/lutadores/samuraiMack/Run.png',
            molduras: 8
        },
        pula: {
            caminhoImagem: '../../img/lutadores/samuraiMack/Jump.png',
            molduras: 2
        },
        cai: {
            caminhoImagem: '../../img/lutadores/samuraiMack/Fall.png',
            molduras: 2
        },
        ataque1: {
            caminhoImagem: '../../img/lutadores/samuraiMack/Attack1.png',
            molduras: 6
        },
        tomaDano: {
            caminhoImagem: '../../img/lutadores/samuraiMack/Take Hit - white silhouette.png',
            molduras: 4
        },
        morte: {
            caminhoImagem: '../../img/lutadores/samuraiMack/Death.png',
            molduras: 6
        }
    },
    caixaAtaque: {
        deslocamento: {
            x: 100,
            y: 50
        },
        largura: 160,
        altura: 50
    }
})

const jogadorB = new Lutador({
    posicao: {x: 400, y: 100},
    velocidade: {x: 0, y: 0},
    caminhoImagem: '../../img/lutadores/kenji/Idle.png',
    molduras: 4,
    escala:2.5,
    deslocamento: {x: 215, y: 167},
    figuras: {
        ocioso: {
            caminhoImagem: '../../img/lutadores/kenji/Idle.png',
            molduras: 4
        },
        corre: {
            caminhoImagem: '../../img/lutadores/kenji/Run.png',
            molduras: 8
        },
        pula: {
            caminhoImagem: '../../img/lutadores/kenji/Jump.png',
            molduras: 2
        },
        cai: {
            caminhoImagem: '../../img/lutadores/kenji/Fall.png',
            molduras: 2
        },
        ataque1: {
            caminhoImagem: '../../img/lutadores/kenji/Attack1.png',
            molduras: 4
        },
        tomaDano: {
            caminhoImagem: '../../img/lutadores/kenji/Take hit.png',
            molduras: 3
        },
        morte: {
            caminhoImagem: '../../img/lutadores/kenji/Death.png',
            molduras: 7
        }
    },
    caixaAtaque: {
        deslocamento: {
            x: -170,
            y: 50
        },
        largura: 170,
        altura: 50
    }
})

const teclas = {
    a: { pressionada: false },
    d: { pressionada: false },
    SetaEsquerda: { pressionada: false },
    SetaDireita: { pressionada: false },
}

diminuirTempo()

function animar() {
    window.requestAnimationFrame(animar)

    contexto.fillStyle = 'black'
    contexto.fillRect(0, 0, quadro.width, quadro.height)

    fundoDeTela.atualiza()

    loja.atualiza()
    contexto.fillStyle = 'rgba(255, 255, 255, 0.15)'
    contexto.fillRect(0, 0, quadro.width, quadro.height)

    jogadorA.atualiza()
    jogadorA.velocidade.x = 0

    //movimento jogadorA    
    if (teclas.a.pressionada && jogadorA.ultimaTecla === 'a') {
        jogadorA.velocidade.x = -5
        jogadorA.trocaFigura('corre')
    } else if (teclas.d.pressionada && jogadorA.ultimaTecla === 'd') {
        jogadorA.velocidade.x = 5
        jogadorA.trocaFigura('corre')
    } else {
        jogadorA.trocaFigura('ocioso')
    }

    if (jogadorA.velocidade.y < 0) {
        jogadorA.trocaFigura('pula')
    } else if (jogadorA.velocidade.y > 0) {
        jogadorA.trocaFigura('cai')
    }

    jogadorB.atualiza()
    jogadorB.velocidade.x = 0

    //movimento jogadorB
    if (teclas.SetaEsquerda.pressionada && jogadorB.ultimaTecla === 'SetaEsquerda') {
        jogadorB.velocidade.x = -5
        jogadorB.trocaFigura('corre')
    } else if (teclas.SetaDireita.pressionada && jogadorB.ultimaTecla === 'SetaDireita') {
        jogadorB.velocidade.x = 5
        jogadorB.trocaFigura('corre')
    } else {
        jogadorB.trocaFigura('ocioso')
    }

    if (jogadorB.velocidade.y < 0) {
        jogadorB.trocaFigura('pula')
    } else if (jogadorB.velocidade.y > 0) {
        jogadorB.trocaFigura('cai')
    }

    //detecção de colisão ataque JogadorA
    if (retanguloColisao({retangulo1: jogadorA, retangulo2: jogadorB}) 
        && jogadorA.estaAtacando && jogadorA.molduraAtual === 4) {
        jogadorB.tomaDano()

        jogadorA.estaAtacando = false

        //document.querySelector('#vidaJogadorB').style.width = jogadorB.vida + "%"        
        gsap.to('#vidaJogadorB', {
            width: jogadorB.vida + "%"
        })
    }

    //se jogadorA errou
    if (jogadorA.estaAtacando && jogadorA.molduraAtual === 4) {
        jogadorA.estaAtacando = false
    }
    
    if (retanguloColisao({retangulo1: jogadorB, retangulo2: jogadorA}) 
        && jogadorB.estaAtacando && jogadorB.molduraAtual === 2) {
        jogadorA.tomaDano()

        jogadorB.estaAtacando = false

        //document.querySelector('#vidaJogadorA').style.width = jogadorA.vida + "%"        
        gsap.to('#vidaJogadorA', {
            width: jogadorA.vida + "%"
        })
    }

    //se jogadorB errou ataque JogadorB
    if (jogadorB.estaAtacando && jogadorB.molduraAtual === 2) {
        jogadorB.estaAtacando = false
    }

    //fim de jogo baseado em vida
    if (jogadorB.vida <= 0 || jogadorA.vida <= 0) {
        determinarVencedor({jogadorA, jogadorB, tempoId})
    }
}

animar()

window.addEventListener('keydown', (event) => {
    //console.log('Tecla pressionada: ' + event.key);
    if (!jogadorA.morto) {
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
        }
    }

    if (!jogadorB.morto) {
        switch(event.key) {
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
    }
})

window.addEventListener('keyup', (event) => {
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

function reiniciar() {
    window.location.reload();
}