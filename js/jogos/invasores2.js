const placar = document.querySelector('#placar')
const canvas = document.querySelector('canvas')
const contexto = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

class Jogador {
    constructor() {
        this.velocidade = {
            x: 0,
            y: 0
        }
        this.rotacao = 0
        this.opacidade = 1

        const imagem = new Image()

        imagem.src = '../../img/invasores2/spaceship.png'
        imagem.onload = () => {
            const escala = 0.15

            this.imagem = imagem
            this.largura = imagem.width * escala
            this.altura = imagem.height * escala
            this.posicao = {
                x: canvas.width / 2 - this.largura /2,
                y: canvas.height - this.altura,
            }
        }        
    }

    desenhar() {
        //contexto.fillStyle = 'red'
        //contexto.fillRect(this.posicao.x, this.posicao.y, this.largura, this.altura)

        contexto.save()

        contexto.globalAlpha = this.opacidade

        contexto.translate(
            this.posicao.x + this.largura / 2, 
            this.posicao.y + this.altura / 2
        )

        contexto.rotate(this.rotacao)

        contexto.translate(
            -this.posicao.x - this.largura / 2, 
            -this.posicao.y - this.altura / 2
        )

        contexto.drawImage(
            this.imagem, 
            this.posicao.x, 
            this.posicao.y, 
            this.largura, 
            this.altura
        )

        contexto.restore()
    }

    atualizar() {
        if(this.imagem)
        {
            this.desenhar()

            this.posicao.x += this.velocidade.x
        }
    }
}

class Inimigo {
    constructor({posicao}) {
        const imagem = new Image()

        imagem.src = '../../img/invasores2/invader.png'
        imagem.onload = () => {
            const escala = 1

            this.imagem = imagem
            this.largura = imagem.width * escala
            this.altura = imagem.height * escala
            this.posicao = {
                x: posicao.x,
                y: posicao.y,
            }
        }        
    }

    desenhar() {
        //contexto.fillStyle = 'red'
        //contexto.fillRect(this.posicao.x, this.posicao.y, this.largura, this.altura)

        contexto.save()

        contexto.drawImage(
            this.imagem, 
            this.posicao.x, 
            this.posicao.y, 
            this.largura, 
            this.altura
        )

        contexto.restore()
    }

    atualizar({velocidade}) {
        if(this.imagem)
        {
            this.desenhar()

            this.posicao.x += velocidade.x
            this.posicao.y += velocidade.y
        }
    }

    atirar(projeteisInimigo) {
        projeteisInimigo.push(new ProjetilInimigo ({
            posicao: {
                x: this.posicao.x + this.largura / 2,
                y: this.posicao.y + this.altura
            },
            velocidade: {
                x: 0,
                y: 5
            }
        }))
    }
}

class Projetil {
    constructor({posicao, velocidade}) {
        this.posicao = posicao
        this.velocidade = velocidade
        this.raio = 4
    }

    desenhar() {
        contexto.beginPath()

        contexto.arc(this.posicao.x, this.posicao.y, this.raio, 0, Math.PI * 2)

        contexto.fillStyle = 'red'

        contexto.fill()

        contexto.closePath()
    }

    atualizar() {
        this.desenhar()

        this.posicao.x += this.velocidade.x
        this.posicao.y += this.velocidade.y
    }
}

class Particula {
    constructor({posicao, velocidade, raio, cor, desaparece}) {
        this.posicao = posicao
        this.velocidade = velocidade
        this.raio = raio
        this.cor = cor
        this.opacidade = 1
        this.desaparece = desaparece
    }

    desenhar() {
        contexto.save()

        contexto.globalAlpha = this.opacidade

        contexto.beginPath()

        contexto.arc(this.posicao.x, this.posicao.y, this.raio, 0, Math.PI * 2)

        contexto.fillStyle = this.cor

        contexto.fill()

        contexto.closePath()

        contexto.restore()
    }

    atualizar() {
        this.desenhar()

        this.posicao.x += this.velocidade.x
        this.posicao.y += this.velocidade.y

        if (this.desaparece) {
            this.opacidade -= 0.01
        }
    }
}

class ProjetilInimigo {
    constructor({posicao, velocidade}) {
        this.posicao = posicao
        this.velocidade = velocidade
        this.largura = 3
        this.altura = 10
    }

    desenhar() {
        contexto.fillStyle = 'white'
        contexto.fillRect(this.posicao.x, this.posicao.y, this.largura, this. altura)
    }

    atualizar() {
        this.desenhar()

        this.posicao.x += this.velocidade.x
        this.posicao.y += this.velocidade.y
    }
}

class Grade {
    constructor() {
        this.posicao = {
            x: 0,
            y: 0
        }
        this.velocidade = {
            x: 3,
            y: 0
        }
        this.inimigos = []

        const colunas = Math.floor(Math.random() * 10 + 5)
        const linhas = Math.floor(Math.random() * 5 + 2)

        this.largura = colunas * 30

        for (let x = 0; x < colunas; x++) {
            for (let y = 0; y < linhas; y++) {

                this.inimigos.push(
                    new Inimigo({
                        posicao: {
                            x: x * 30,
                            y: y * 30
                        }
                    })
                )         
            }
        }
        //console.log(this.inimigos)
    }

    atualizar() {
        this.posicao.x += this.velocidade.x
        this.posicao.y += this.velocidade.y
        this.velocidade.y = 0

        if (this.posicao.x + this.largura >= canvas.width || this.posicao.x <= 0) {
            this.velocidade.x = -this.velocidade.x
            this.velocidade.y = 30
        }
    }
}

const jogador = new Jogador()
const projeteis = []
const grades = []
const projeteisInimigo =[]
const particulas = []
const teclas = {
    direita: { pressionada: false },
    esquerda: { pressionada: false },
    espaco: { pressionada: false }
}
let quadros = 0
let intervaloAletorio = Math.floor(Math.random() * 500) + 500
//console.log("Intervalo aleatório: " + intervaloAletorio)
let jogo = {
    fim: false,
    ativo: true,
}
let pontos = 0

for (let i = 0; i < 100; i++) {
    particulas.push(new Particula({
        posicao: {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height
        },
        velocidade: {
            x: 0,
            y: 0.3
        },
        raio: Math.random() * 2,
        cor: 'white'
    }))
}

function criarParticulas({objeto, cor, desaparece}) {
    for (let i = 0; i < 15; i++) {
        particulas.push(new Particula({
            posicao: {
                x: objeto.posicao.x + objeto.largura / 2,
                y: objeto.posicao.y + objeto.altura / 2
            },
            velocidade: {
                x: (Math.random() - 0.5) * 2,
                y: (Math.random() - 0.5) * 2
            },
            raio: Math.random() * 3,
            cor: cor || '#BAA0DE',
            desaparece
        }))
    }
}

function animar() {
    if (!jogo.ativo) {
        return
    }

    requestAnimationFrame(animar)

    contexto.fillStyle = 'black'
    contexto.fillRect(0, 0, canvas.width, canvas.height)

    jogador.atualizar()

    particulas.forEach((particula, indiceParticula) => {
        if (particula.posicao.y - particula.raio >= canvas.height) {
            particula.posicao.x = Math.random() * canvas.width
            particula.posicao.y = -particula.raio
        }

        if (particula.opacidade <= 0) {
            setTimeout(() => {
                particulas.splice(indiceParticula, 1)
            }, 0)
        } else {
            particula.atualizar()
        }
    })
    //console.log(particulas)

    projeteisInimigo.forEach((projetilInimigo, indiceProjetilInimigo) => {
        if (projetilInimigo.posicao.y + projetilInimigo.altura >= canvas.height) {
            setTimeout(() => {
                projeteisInimigo.splice(indiceProjetilInimigo, 1)
            }, 0)
        } else {
            projetilInimigo.atualizar()
        }

        //projetil acertou jogador
        if (projetilInimigo.posicao.y + projetilInimigo.altura >= jogador.posicao.y
            && projetilInimigo.posicao.x + projetilInimigo.largura >= jogador.posicao.x
            && projetilInimigo.posicao.x <= jogador.posicao.x + jogador.largura) {  
            console.log('você perdeu!')

            setTimeout(() => {
                jogo.ativo = false
            }, 2000)
                       
            setTimeout(() => {
                projeteisInimigo.splice(indiceProjetilInimigo, 1)

                jogador.opacidade = 0

                jogo.fim = true
            }, 0)

            criarParticulas({objeto: jogador, cor: "white", desaparece: true})
        }
    })
    //console.log(projeteisInimigo)

    projeteis.forEach((projetil, indice) => {        
        if (projetil.posicao.y + projetil.raio <= 0) {
            setTimeout(() => {
                projeteis.splice(indice, 1)
            }, 0)
        } else {
            projetil.atualizar()
        }
    })

    grades.forEach((grade, gradeIndice) => {  
        grade.atualizar()

        //surgir projetil inimigo
        if (quadros % 100 === 0 && grade.inimigos.length > 0) {
            grade.inimigos[Math.floor(Math.random() * grade.inimigos.length)].atirar(projeteisInimigo)
        }

        grade.inimigos.forEach((inimigo, inimigoIndice) => {
            inimigo.atualizar({velocidade: grade.velocidade})
            
            //projeteis acertam inimigo
            projeteis.forEach((projetil, projetilIndice) => {
                if (projetil.posicao.y - projetil.raio <= inimigo.posicao.y + inimigo.altura 
                    && projetil.posicao.x + projetil.raio >= inimigo.posicao.x
                    && projetil.posicao.x - projetil.raio <= inimigo.posicao.x + inimigo.largura
                    && projetil.posicao.y + projetil.raio >= inimigo.posicao.y
                ) {
                    setTimeout(() => {
                        const inimigoLocalizado = grade.inimigos.find(
                            (inimigo2) => inimigo2 === inimigo
                        )
                        const projetilLocalizado = projeteis.find(
                            (projetil2) => projetil2 === projetil
                        )

                        //remove inimigo e projetil
                        if (inimigoLocalizado && projetilLocalizado) {
                            pontos += 100

                            //console.log(pontos)
                            placar.innerHTML = pontos

                            criarParticulas({objeto: inimigo, desaparece: true})

                            grade.inimigos.splice(inimigoIndice, 1)

                            projeteis.splice(projetilIndice, 1)

                            if (grade.inimigos.length > 0) {
                                const primeiroInimigo = grade.inimigos[0]
                                const ultimoInimigo = grade.inimigos[grade.inimigos.length - 1]

                                grade.largura = ultimoInimigo.posicao.x - primeiroInimigo.posicao.x + ultimoInimigo.largura
                                grade.posicao.x = primeiroInimigo.posicao.x
                            } else {
                                grades.splice(gradeIndice, 1)
                            }
                        }
                    }, 0)
                }
            })
        })
    })

    if (teclas.esquerda.pressionada && jogador.posicao.x >= 0) {
        jogador.velocidade.x = -7
        jogador.rotacao = -0.15
    } else if (teclas.direita.pressionada && jogador.posicao.x + jogador.largura <= canvas.width) {
        jogador.velocidade.x = 7
        jogador.rotacao = 0.15
    } else {
        jogador.velocidade.x = 0        
        jogador.rotacao = 0
    }

    //console.log("Quadro: " + quadros)
    //surgir inimigos
    if (quadros % intervaloAletorio === 0) {
        grades.push(new Grade())

        quadros = 0

        intervaloAletorio = Math.floor(Math.random() * 500) + 500
        //console.log("Intervalo aleatório: " + intervaloAletorio)
    }
 
    quadros++
}

animar()

addEventListener('keydown', ({key}) => {
    if (jogo.fim) {
        return
    }

    //console.log('tecla pressionada: ' + key)
    switch(key) {
        case 'ArrowLeft':
            //console.log('tecla esquerda pressionada')
            teclas.esquerda.pressionada = true
            break
        case 'ArrowRight':
            //console.log('tecla direita pressionada')
            teclas.direita.pressionada = true
            break
        case ' ':
            //console.log('tecla espaço pressionada')
            projeteis.push(
                new Projetil({
                    posicao: {
                        x: jogador.posicao.x + jogador.largura / 2,
                        y: jogador.posicao.y
                    },
                    velocidade: {
                        x: 0,
                        y: -10
                    }
                })
            )
            //console.log(projeteis)
            break
    }
})

addEventListener('keyup', ({key}) => {
    //console.log('tecla liberada: ' + key)
    switch(key) {
        case 'ArrowLeft':
            //console.log('tecla esquerda liberada')
            teclas.esquerda.pressionada = false
            break
        case 'ArrowRight':
            //console.log('tecla direita liberada')
            teclas.direita.pressionada = false
            break
        case ' ':
            //console.log('tecla espaço liberada')
            break
    }
})