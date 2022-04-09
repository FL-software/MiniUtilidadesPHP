const canvas = document.querySelector('canvas')
const contexto = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const placar = document.querySelector('#placar')
const iniciarJogo = document.querySelector('#iniciarJogo')
const modal = document.querySelector('#modal')
const placarFinal = document.querySelector('#placarFinal')

class Jogador {
    constructor(x, y, raio, cor) {
        this.x = x
        this.y = y
        this.raio = raio
        this.cor = cor
    }

    desenhar() {
        contexto.beginPath()
        
        contexto.arc(this.x, this.y, this.raio, 0, Math.PI * 2, false)

        contexto.fillStyle = this.cor

        contexto.fill()
    }
}

class Projetil {
    constructor(x, y, raio, cor, velocidade) {
        this.x = x
        this.y = y
        this.raio = raio
        this.cor = cor
        this.velocidade = velocidade
    }

    desenhar() {
        contexto.beginPath()
        
        contexto.arc(this.x, this.y, this.raio, 0, Math.PI * 2, false)

        contexto.fillStyle = this.cor

        contexto.fill()
    }

    atualizar() {
        this.desenhar()
        this.x += this.velocidade.x
        this.y += this.velocidade.y
    }
}

class Inimigo {
    constructor(x, y, raio, cor, velocidade) {
        this.x = x
        this.y = y
        this.raio = raio
        this.cor = cor
        this.velocidade = velocidade
    }

    desenhar() {
        contexto.beginPath()
        
        contexto.arc(this.x, this.y, this.raio, 0, Math.PI * 2, false)

        contexto.fillStyle = this.cor

        contexto.fill()
    }

    atualizar() {
        this.desenhar()
        this.x += this.velocidade.x
        this.y += this.velocidade.y
    }
}

const friccao = 0.99

class Particula {
    constructor(x, y, raio, cor, velocidade) {
        this.x = x
        this.y = y
        this.raio = raio
        this.cor = cor
        this.velocidade = velocidade
        this.alfa = 1
    }

    desenhar() {
        contexto.save()

        contexto.globalAlpha = this.alfa

        contexto.beginPath()
        
        contexto.arc(this.x, this.y, this.raio, 0, Math.PI * 2, false)

        contexto.fillStyle = this.cor

        contexto.fill()
        
        contexto.restore()
    }

    atualizar() {
        this.desenhar()

        this.velocidade.x *= friccao
        this.velocidade.y *= friccao
        this.x += this.velocidade.x
        this.y += this.velocidade.y
        this.alfa -= 0.01
    }
}

const x = canvas.width / 2
const y = canvas.height / 2

let jogador = new Jogador(x, y, 10, 'white')
let projeteis = []
let inimigos = []
let particulas = []
let animacaoId
let pontos = 0

function iniciar() {
    jogador = new Jogador(x, y, 10, 'white')
    projeteis = []
    inimigos = []
    particulas = []
    pontos = 0
    placar.innerHTML = pontos
    placarFinal.innerHTML = pontos
}

function aparecerInimigos() {
    setInterval(() => {
        const raio = Math.random() * (30 - 4) + 4
        let x
        let y
        if (Math.random() < 0.5) {
            x = Math.random() < 0.5 ? 0 - raio : canvas.width + raio
            y = Math.random() * canvas.height
        } else {
            x = Math.random() * canvas.width
            y = Math.random() < 0.5 ? 0 - raio : canvas.height + raio
        }

        const cor = `hsl(${Math.random() * 360}, 50%, 50%)`
        const angulo = Math.atan2(canvas.height /2 - y, canvas.width /2 - x)
        //console.log("angulo inimigo: " + angulo)
        
        const velocidade = {
            x: Math.cos(angulo),
            y: Math.sin(angulo)
        }

        inimigos.push(new Inimigo(x, y, raio, cor, velocidade))

        //console.log('inimigo criado!')
        //console.log(inimigos)
    }, 1000);
}

function animar() {
    animacaoId = requestAnimationFrame(animar)

    contexto.fillStyle = 'rgba(0, 0, 0, 0.1)'

    contexto.fillRect(0, 0, canvas.width, canvas.height)
    
    jogador.desenhar()

    particulas.forEach((particula, index) => {
        if (particula.alfa < 0) {
            particulas.splice(index, 1)
        } else { 
            particula.atualizar()
        }
    })

    projeteis.forEach((projetil, projetilIndice) => {
        projetil.atualizar()

        //remove projetil por sair dos limites da tela
        if (projetil.x + projetil.raio < 0
            || projetil.x - projetil.raio > canvas.width
            || projetil.y + projetil.raio < 0
            || projetil.y - projetil.raio > canvas.height
        ) {
            setTimeout(() =>{
                projeteis.splice(projetilIndice, 1)
            }, 0)
        }
    })

    inimigos.forEach((inimigo, inimigoIndice) => {
        inimigo.atualizar()

        const distanciaJogador = Math.hypot(jogador.x - inimigo.x, jogador.y - inimigo.y)
        //console.log('distancia entre jogador e inimigo: ' + distancia)

        //fim de jogo
        if (distanciaJogador - inimigo.raio - jogador.raio < 1){
           //console.log('Fim de jogo')
           
           cancelAnimationFrame(animacaoId)
           
           modal.style.display = 'flex'
           placarFinal.innerHTML = pontos
        }

        projeteis.forEach((projetil, projetilIndice) => {
            const distancia = Math.hypot(projetil.x - inimigo.x, projetil.y - inimigo.y)

            //console.log('distancia entre projetil e inimigo: ' + distancia)

            //quando um projetil toca um inimigo
            if (distancia - inimigo.raio - projetil.raio < 1){
                //console.log('colisão projetil e inimigo, remover da tela')
                
                //incrementa nosso placar
                pontos += 100
                placar.innerHTML = pontos
                //console.log(pontos)

                //cria explosões
                for (let i = 0; i < inimigo.raio * 2; i++) {
                    particulas.push(new Particula(
                        projetil.x, 
                        projetil.y, 
                        Math.random() * 2, 
                        inimigo.cor, 
                        {
                            x: (Math.random() - 0.5) * (Math.random() * 6), 
                            y: (Math.random() - 0.5) * (Math.random() * 6)
                        })
                    )
                }

                if (inimigo.raio - 10 > 5) {
                    gsap.to(inimigo, {
                        raio: inimigo.raio - 10
                    })

                    setTimeout(() =>{
                        projeteis.splice(projetilIndice, 1)
                    }, 0)
                } else {
                    //remove da cena totalmente
                    pontos += 250
                    placar.innerHTML = pontos

                    setTimeout(() =>{
                        inimigos.splice(inimigoIndice, 1)
                        projeteis.splice(projetilIndice, 1)
                    }, 0)
                }
            }
        })
    })
}


addEventListener('click', (event) =>{
    //console.log(projeteis)
    //console.log("clique X: " + event.clientX)
    //console.log("clique Y: " + event.clientY)

    const angulo = Math.atan2(
        event.clientY - canvas.height / 2 - 40, //-40 para alinhar devido ao título
        event.clientX - canvas.width / 2
    )
    //console.log("angulo projetil: " + angulo)
    
    const velocidade = {
        x: Math.cos(angulo) * 5,
        y: Math.sin(angulo) * 5
    }

    projeteis.push(
        new Projetil(canvas.width / 2, canvas.height / 2, 5, 'white', velocidade)
    )
})

iniciarJogo.addEventListener('click', () => {
    //console.logo("clicou no Iniciar Jogo")
    iniciar()
    animar()
    aparecerInimigos()

    modal.style.display = 'none'
})