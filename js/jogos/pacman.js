const canvas = document.querySelector('canvas')
const contexto = canvas.getContext('2d')
const pontuacao = document.querySelector('#pontuacao')

canvas.width = innerWidth
canvas.height = innerHeight

class Fronteira {
    static largura = 40
    static altura = 40
    constructor({posicao, imagem}) {
        this.posicao = posicao
        this.largura = 40
        this.altura = 40
        this.imagem = imagem
    }

    desenha() {
        //contexto.fillStyle = 'blue'
        //contexto.fillRect(
        //    this.posicao.x, 
        //    this.posicao.y, 
        //    this.largura, 
        //    this.altura
        //)
        contexto.drawImage(this.imagem, this.posicao.x, this.posicao.y)
    }
}

class Pelota {
    constructor({posicao}) {
        this.posicao = posicao
        this.raio = 3
    }

    desenha() {
        contexto.beginPath()
        contexto.arc(
            this.posicao.x, 
            this.posicao.y, 
            this.raio,
            0,
            Math.PI * 2
        )
        contexto.fillStyle = 'white'
        contexto.fill()
        contexto.closePath()
    }
}

class PoderExtra {
    constructor({posicao}) {
        this.posicao = posicao
        this.raio = 8
    }

    desenha() {
        contexto.beginPath()
        contexto.arc(
            this.posicao.x, 
            this.posicao.y, 
            this.raio,
            0,
            Math.PI * 2
        )
        contexto.fillStyle = 'white'
        contexto.fill()
        contexto.closePath()
    }
}

class Jogador {
    constructor({posicao, velocidade}) {
        this.posicao = posicao
        this.velocidade = velocidade
        this.raio = 15
        this.radianos = 0.75
        this.taxaAbertura = 0.12
        this.rotacao = 0
    }

    desenha() {
        contexto.save()
        contexto.translate(this.posicao.x, this.posicao.y)
        contexto.rotate(this.rotacao)
        contexto.translate(-this.posicao.x, -this.posicao.y)
        contexto.beginPath()
        contexto.arc(
            this.posicao.x, 
            this.posicao.y, 
            this.raio,
            this.radianos,
            Math.PI * 2 - this.radianos
        )
        contexto.lineTo(this.posicao.x, this.posicao.y)
        contexto.fillStyle = 'yellow'
        contexto.fill()
        contexto.closePath()
        contexto.restore()
    }

    atualiza() {
        this.desenha()

        this.posicao.x += this.velocidade.x
        this.posicao.y += this.velocidade.y

        if (this.radianos <0 || this.radianos > 0.75) {
            this.taxaAbertura =- this.taxaAbertura
        }

        this.radianos += this.taxaAbertura
    }
}

class Inimigo {
    static aceleracao = 2
    constructor({posicao, velocidade, cor = 'red'}) {
        this.posicao = posicao
        this.velocidade = velocidade
        this.raio = 15
        this.cor = cor
        this.colisoesAnteriores = []
        this.aceleracao = 2
        this.asssutado = false
    }

    desenha() {
        contexto.beginPath()
        contexto.arc(
            this.posicao.x, 
            this.posicao.y, 
            this.raio,
            0,
            Math.PI * 2
        )
        contexto.fillStyle = this.assustado ? 'blue' : this.cor
        contexto.fill()
        contexto.closePath()
    }

    atualiza() {
        this.desenha()

        this.posicao.x += this.velocidade.x
        this.posicao.y += this.velocidade.y
    }
}

let ultimaTecla = ''
let pontos = 0
const mapa = [
    ['1', '-', '-', '-', '-', '-', '-', '-', '-', '-', '2'],
    ['|', '.', '.', '.', '.', '.', '.', '.', '.', 'p', '|'],
    ['|', '.', 'b', '.', '[', '7', ']', '.', 'b', '.', '|'],
    ['|', '.', '.', '.', '.', '_', '.', '.', '.', '.', '|'],
    ['|', '.', '[', ']', '.', '.', '.', '[', ']', '.', '|'],
    ['|', '.', '.', '.', '.', '^', '.', '.', '.', '.', '|'],
    ['|', '.', 'b', '.', '[', '+', ']', '.', 'b', '.', '|'],
    ['|', '.', '.', '.', '.', '_', '.', '.', '.', '.', '|'],
    ['|', '.', '[', ']', '.', '.', '.', '[', ']', '.', '|'],
    ['|', '.', '.', '.', '.', '^', '.', '.', '.', '.', '|'],
    ['|', '.', 'b', '.', '[', '5', ']', '.', 'b', '.', '|'],
    ['|', 'p', '.', '.', '.', '.', '.', '.', '.', '.', '|'],
    ['4', '-', '-', '-', '-', '-', '-', '-', '-', '-', '3']
]
const pelotas = []
const fronteiras = []
const poderesExtra = []
const jogador = new Jogador({
    posicao: {
        x: Fronteira.largura + Fronteira.largura / 2,
        y: Fronteira.altura + Fronteira.altura / 2
    },
    velocidade: {
        x: 0,
        y: 0
    }
})
const inimigos = [
    new Inimigo({
        posicao: {
            x: Fronteira.largura * 9 + Fronteira.largura / 2,
            y: Fronteira.altura * 11 + Fronteira.altura / 2
        },
        velocidade: {
            x: 0,
            y: -Inimigo.aceleracao
        }
    }),
    new Inimigo({
        posicao: {
            x: Fronteira.largura * 9 + Fronteira.largura / 2,
            y: Fronteira.altura * 11 + Fronteira.altura / 2
        },
        velocidade: {
            x: -Inimigo.aceleracao,
            y: 0
        },
        cor: 'pink'
    })
]
const teclas = {
    w: { pressionado: false },
    a: { pressionado: false },
    s: { pressionado: false },
    d: { pressionado: false }
}

function criarImagem(caminho) {
    const imagem = new Image()

    imagem.src = caminho

    return imagem
}

mapa.forEach((linha, y) => {
    linha.forEach((simbolo, x) => {
        switch (simbolo) {
            case '-':
                fronteiras.push(
                    new Fronteira({
                        posicao: {
                            x: Fronteira.largura * x,
                            y: Fronteira.altura * y
                        },
                        imagem: criarImagem('../../img/pacman/pipeHorizontal.png')
                    })
                )
                break
            case '|':
                fronteiras.push(
                    new Fronteira({
                        posicao: {
                            x: Fronteira.largura * x,
                            y: Fronteira.altura * y
                        },
                        imagem: criarImagem('../../img/pacman/pipeVertical.png')
                    })
                )
                break
            case '1':
                fronteiras.push(
                    new Fronteira({
                        posicao: {
                            x: Fronteira.largura * x,
                            y: Fronteira.altura * y
                        },
                        imagem: criarImagem('../../img/pacman/pipeCorner1.png')
                    })
                )
                break
            case '2':
                fronteiras.push(
                    new Fronteira({
                        posicao: {
                            x: Fronteira.largura * x,
                            y: Fronteira.altura * y
                        },
                        imagem: criarImagem('../../img/pacman/pipeCorner2.png')
                    })
                )
                break
            case '3':
                fronteiras.push(
                    new Fronteira({
                        posicao: {
                            x: Fronteira.largura * x,
                            y: Fronteira.altura * y
                        },
                        imagem: criarImagem('../../img/pacman/pipeCorner3.png')
                    })
                )
                break
            case '4':
                fronteiras.push(
                    new Fronteira({
                        posicao: {
                            x: Fronteira.largura * x,
                            y: Fronteira.altura * y
                        },
                        imagem: criarImagem('../../img/pacman/pipeCorner4.png')
                    })
                )
                break
            case 'b':
                fronteiras.push(
                    new Fronteira({
                        posicao: {
                            x: Fronteira.largura * x,
                            y: Fronteira.altura * y
                        },
                        imagem: criarImagem('../../img/pacman/block.png')
                    })
                )
                break
            case '[':
                fronteiras.push(
                    new Fronteira({
                        posicao: {
                            x: Fronteira.largura * x,
                            y: Fronteira.altura * y
                        },
                        imagem: criarImagem('../../img/pacman/capLeft.png')
                    })
                )
                break
            case ']':
                fronteiras.push(
                    new Fronteira({
                        posicao: {
                            x: Fronteira.largura * x,
                            y: Fronteira.altura * y
                        },
                        imagem: criarImagem('../../img/pacman/capRight.png')
                    })
                )
                break
            case '_':
                fronteiras.push(
                    new Fronteira({
                        posicao: {
                            x: Fronteira.largura * x,
                            y: Fronteira.altura * y
                        },
                        imagem: criarImagem('../../img/pacman/capBottom.png')
                    })
                )
                break
            case '^':
                fronteiras.push(
                    new Fronteira({
                        posicao: {
                            x: Fronteira.largura * x,
                            y: Fronteira.altura * y
                        },
                        imagem: criarImagem('../../img/pacman/capTop.png')
                    })
                )
                break
            case '+':
                fronteiras.push(
                    new Fronteira({
                        posicao: {
                            x: Fronteira.largura * x,
                            y: Fronteira.altura * y
                        },
                        imagem: criarImagem('../../img/pacman/pipeCross.png')
                    })
                )
                break
            case '5':
                fronteiras.push(
                    new Fronteira({
                        posicao: {
                            x: Fronteira.largura * x,
                            y: Fronteira.altura * y
                        },
                        imagem: criarImagem('../../img/pacman/pipeConnectorTop.png')
                    })
                )
                break
            case '6':
                fronteiras.push(
                    new Fronteira({
                        posicao: {
                            x: Fronteira.largura * x,
                            y: Fronteira.altura * y
                        },
                        imagem: criarImagem('../../img/pacman/pipeConnectorRight.png')
                    })
                )
                break
            case '7':
                fronteiras.push(
                    new Fronteira({
                        posicao: {
                            x: Fronteira.largura * x,
                            y: Fronteira.altura * y
                        },
                        imagem: criarImagem('../../img/pacman/pipeConnectorBottom.png')
                    })
                )
                break
            case '8':
                fronteiras.push(
                    new Fronteira({
                        posicao: {
                            x: Fronteira.largura * x,
                            y: Fronteira.altura * y
                        },
                        imagem: criarImagem('../../img/pacman/pipeConnectorLeft.png')
                    })
                )
                break
            case '.':
                pelotas.push(
                    new Pelota({
                        posicao: {
                            x: Fronteira.largura * x + Fronteira.largura / 2,
                            y: Fronteira.altura * y + Fronteira.altura / 2
                        }
                    })
                )
                break
            case 'p':
                poderesExtra.push(
                    new PoderExtra({
                        posicao: {
                            x: Fronteira.largura * x + Fronteira.largura / 2,
                            y: Fronteira.altura * y + Fronteira.altura / 2
                        }
                    })
                )
                break
        }
    });
})

function circuloColideComRetangulo({circulo, retangulo}) {
    //console.log({circulo})
    //console.log({retangulo})
    const preenchimento = Fronteira.largura / 2 - circulo.raio - 1

    return circulo.posicao.y - circulo.raio + circulo.velocidade.y <= retangulo.posicao.y + retangulo.altura + preenchimento
        && circulo.posicao.x + circulo.raio + circulo.velocidade.x >= retangulo.posicao.x - preenchimento
        && circulo.posicao.y + circulo.raio + circulo.velocidade.y >= retangulo.posicao.y - preenchimento
        && circulo.posicao.x - circulo.raio + circulo.velocidade.x <= retangulo.posicao.x + retangulo.largura + preenchimento
}

let animacaoId

function animar() {
    animacaoId = requestAnimationFrame(animar)

    contexto.clearRect(0, 0, canvas.width, canvas.height)

    if (teclas.w.pressionado && ultimaTecla === 'w') {
        for (let i = 0; i < fronteiras.length; i++) {
            const fronteira = fronteiras[i]

            if (
                circuloColideComRetangulo({
                    circulo: {
                        ...jogador, 
                        velocidade: {
                            x: 0,
                            y: -5
                        }
                    }, 
                    retangulo: fronteira
                })
            ) {
                jogador.velocidade.y = 0
                break
            } else {
                jogador.velocidade.y = -5
            }
        }
    } else if (teclas.a.pressionado && ultimaTecla === 'a') {
        for (let i = 0; i < fronteiras.length; i++) {
            const fronteira = fronteiras[i]

            if (
                circuloColideComRetangulo({
                    circulo: {
                        ...jogador, 
                        velocidade: {
                            x: -5,
                            y: 0
                        }
                    }, 
                    retangulo: fronteira
                })
            ) {
                jogador.velocidade.x = 0
                break
            } else {
                jogador.velocidade.x = -5
            }
        }
    } else if (teclas.s.pressionado && ultimaTecla === 's') {
        for (let i = 0; i < fronteiras.length; i++) {
            const fronteira = fronteiras[i]

            if (
                circuloColideComRetangulo({
                    circulo: {
                        ...jogador, 
                        velocidade: {
                            x: 0,
                            y: 5
                        }
                    }, 
                    retangulo: fronteira
                })
            ) {
                jogador.velocidade.y = 0
                break
            } else {
                jogador.velocidade.y = 5
            }
        }
    } else if (teclas.d.pressionado && ultimaTecla === 'd') {
        for (let i = 0; i < fronteiras.length; i++) {
            const fronteira = fronteiras[i]

            if (
                circuloColideComRetangulo({
                    circulo: {
                        ...jogador, 
                        velocidade: {
                            x: 5,
                            y: 0
                        }
                    }, 
                    retangulo: fronteira
                })
            ) {
                jogador.velocidade.x = 0
                break
            } else {
                jogador.velocidade.x = 5
            }
        }
    }
    
    //detectar colisão entre inimigos e jogador
    for (let i = inimigos.length - 1; 0 <= i; i--) {
        const inimigo = inimigos[i]

        //inimigo tocou o jogador
        if (
            Math.hypot(
                inimigo.posicao.x - jogador.posicao.x, 
                inimigo.posicao.y - jogador.posicao.y
            ) < inimigo.raio + jogador.raio
        ) {
            if (inimigo.assustado) {
                inimigos.splice(i, 1)
            } else {
                cancelAnimationFrame(animacaoId)
    
                console.log("Você perdeu")
            }
        }
    }

    //condição de vitória
    if (pelotas.length === 0) {
        cancelAnimationFrame(animacaoId)

        console.log("Você ganhou")
    }

    //tocando nas poder extra aqui
    for (let i = poderesExtra.length - 1; 0 <= i; i--) {
        const poderExtra = poderesExtra[i]

        poderExtra.desenha()

        if (
            Math.hypot(
                poderExtra.posicao.x - jogador.posicao.x, 
                poderExtra.posicao.y - jogador.posicao.y
            ) < poderExtra.raio + jogador.raio
        ) {
            //console.log("Colidindo Jogador com Pelotas")
            poderesExtra.splice(i, 1)

            inimigos.forEach(inimigo => {
                inimigo.assustado = true
                
                setTimeout(() => {
                    inimigo.assustado = false                    
                }, 5000)
            })
        }
    }

    //tocando nas pelotas aqui
    for (let i = pelotas.length - 1; 0 <= i; i--) {
        const pelota = pelotas[i]

        pelota.desenha()

        if (
            Math.hypot(
                pelota.posicao.x - jogador.posicao.x, 
                pelota.posicao.y - jogador.posicao.y
            ) < pelota.raio + jogador.raio
        ) {
            //console.log("Colidindo Jogador com Pelotas")
            pelotas.splice(i, 1)

            pontos += 10

            pontuacao.innerHTML = pontos
        }
    }

    fronteiras.forEach(fronteira => {
        fronteira.desenha()

        if (circuloColideComRetangulo({circulo: jogador, retangulo: fronteira})) {
            //console.log("Colidindo Circulo com Quadrado")
            jogador.velocidade.y = 0
            jogador.velocidade.x = 0
        }
    })
    
    jogador.atualiza()
    
    inimigos.forEach(inimigo => {
        inimigo.atualiza()      
        
        const colisoes = []

        fronteiras.forEach(fronteira => {
            if (
                !colisoes.includes('direita')
                && circuloColideComRetangulo({
                    circulo: {
                        ...inimigo, 
                        velocidade: {
                            x: inimigo.aceleracao,
                            y: 0
                        }
                    }, 
                    retangulo: fronteira
                })
            ) {
                colisoes.push('direita')
            }

            if (
                !colisoes.includes('esquerda')
                && circuloColideComRetangulo({
                    circulo: {
                        ...inimigo, 
                        velocidade: {
                            x: -inimigo.aceleracao,
                            y: 0
                        }
                    }, 
                    retangulo: fronteira
                })
            ) {
                colisoes.push('esquerda')
            }

            if (
                !colisoes.includes('cima')
                && circuloColideComRetangulo({
                    circulo: {
                        ...inimigo, 
                        velocidade: {
                            x: 0,
                            y: -inimigo.aceleracao
                        }
                    }, 
                    retangulo: fronteira
                })
            ) {
                colisoes.push('cima')
            }

            if (
                !colisoes.includes('baixo')
                && circuloColideComRetangulo({
                    circulo: {
                        ...inimigo, 
                        velocidade: {
                            x: 0,
                            y: inimigo.aceleracao
                        }
                    }, 
                    retangulo: fronteira
                })
            ) {
                colisoes.push('baixo')
            }
        })
        //console.log({colisoes})

        if (colisoes.length > inimigo.colisoesAnteriores.length) {
            inimigo.colisoesAnteriores = colisoes
        }

        if (JSON.stringify(colisoes) !== JSON.stringify(inimigo.colisoesAnteriores)) {
            //console.log("Pode andar")

            if (inimigo.velocidade.x > 0) {
                inimigo.colisoesAnteriores.push('direita')
            } else if (inimigo.velocidade.x < 0) {
                inimigo.colisoesAnteriores.push('esquerda')
            } else if (inimigo.velocidade.y < 0) {
                inimigo.colisoesAnteriores.push('cima')
            } else if (inimigo.velocidade.y > 0) {
                inimigo.colisoesAnteriores.push('baixo')
            }

            const caminhos = inimigo.colisoesAnteriores.filter((colisao) => {
                return !colisoes.includes(colisao)
            })
            //console.log({caminhos})

            const direcao = caminhos[Math.floor(Math.random() * caminhos.length)]
            //console.log({direcao})

            switch (direcao) {
                case "baixo":
                    inimigo.velocidade.y = inimigo.aceleracao
                    inimigo.velocidade.x = 0
                    break;
                case "cima":
                    inimigo.velocidade.y = -inimigo.aceleracao
                    inimigo.velocidade.x = 0
                    break;
                case "direita":
                    inimigo.velocidade.y = 0
                    inimigo.velocidade.x = inimigo.aceleracao
                    break;
                case "esquerda":
                    inimigo.velocidade.y = 0
                    inimigo.velocidade.x = -inimigo.aceleracao
                    break;
            }

            inimigo.colisoesAnteriores = []
        }
        //console.log("Colisoes: " + colisoes)
    })

    if (jogador.velocidade.x > 0) {
        jogador.rotacao = 0
    } else if (jogador.velocidade.x < 0) {
        jogador.rotacao = Math.PI
    } else if (jogador.velocidade.y < 0) {
        jogador.rotacao = Math.PI * 1.5
    } else if (jogador.velocidade.y > 0) {
        jogador.rotacao = Math.PI / 2
    }
} //fim da animação

animar()

addEventListener('keydown', ({key}) => {
    //console.log("Tecla pressionada: " + key)

    switch (key) {
        case 'w':
            teclas.w.pressionado = true
            ultimaTecla = 'w'
            break
        case 'a':
            teclas.a.pressionado = true
            ultimaTecla = 'a'
            break
        case 's':
            teclas.s.pressionado = true
            ultimaTecla = 's'
            break
        case 'd':
            teclas.d.pressionado = true
            ultimaTecla = 'd'
            break
    }

    //console.log("Velocidade Jogador: " + jogador.velocidade)
})

addEventListener('keyup', ({key}) => {
    //console.log("Tecla solta: " + key)

    switch (key) {
        case 'w':
            teclas.w.pressionado = false
            break
        case 'a':
            teclas.a.pressionado = false
            break
        case 's':
            teclas.s.pressionado = false
            break
        case 'd':
            teclas.d.pressionado = false
            break
    }

    //console.log("Velocidade Jogador: " + jogador.velocidade)
})

function reiniciar() {
    window.location.reload();
}