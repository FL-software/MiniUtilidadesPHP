const canvas = document.querySelector('canvas')
const contexto = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

//contexto.fillStyle = 'white'
//contexto.fillRect(0, 0, canvas.width, canvas.height)

const mapaColisoes = []

for (let i = 0; i < colisoes.length; i += 70) {
    //console.log(colisoes.slice(i, 70 + i))
    mapaColisoes.push(colisoes.slice(i, 70 + i))
}
//console.log(mapaColisoes)

const fronteiras = []
const deslocamento = {
    x: -735,
    y: -633
}

mapaColisoes.forEach((linha, i) => {
    linha.forEach((simbolo, j) => {
        //console.log (simbolo)

        if (simbolo === 1025) {
            fronteiras.push(new Fronteira({
                posicao: {
                    x: j * Fronteira.largura + deslocamento.x,
                    y: i * Fronteira.altura + deslocamento.y
                }
            }))
        }
    })
})

const imagem = new Image()
imagem.src = '../../img/pokemonClone/Pellet Town.png'

const imagemPrimeiroPlano = new Image()
imagemPrimeiroPlano.src = '../../img/pokemonClone/foreground.png'

const imagemJogadorCima = new Image()
imagemJogadorCima.src = '../../img/pokemonClone/playerUp.png'

const imagemJogadorEsquerda = new Image()
imagemJogadorEsquerda.src = '../../img/pokemonClone/playerLeft.png'

const imagemJogadorBaixo = new Image()
imagemJogadorBaixo.src = '../../img/pokemonClone/playerDown.png'

const imagemJogadorDireita = new Image()
imagemJogadorDireita.src = '../../img/pokemonClone/playerRight.png'


const jogador = new Objeto({
    posicao: {
        x: canvas.width / 2 - 192 / 4 / 2, 
        y: canvas.height / 2 - 68 / 4
    },
    imagem: imagemJogadorBaixo,
    molduras: {
        maximo: 4
    },
    imagens: {
        cima: imagemJogadorCima,
        esquerda: imagemJogadorEsquerda,
        baixo: imagemJogadorBaixo,
        direita: imagemJogadorDireita
    }
})

const mapa = new Objeto({
    posicao: {
        x: deslocamento.x,
        y: deslocamento.y
    },
    imagem: imagem
})

const primeroPlano = new Objeto({
    posicao: {
        x: deslocamento.x,
        y: deslocamento.y
    },
    imagem: imagemPrimeiroPlano
})

const teclas = {
    w: { pressionado: false },
    a: { pressionado: false },
    s: { pressionado: false },
    d: { pressionado: false }
}

//const testeFronteira = new Fronteira({
//    posicao: {
//        x: 400,
//        y: 400
//    }    
//})

const moveis = [mapa, primeroPlano, ...fronteiras]

function colisaoRetangulo({retangulo1, retangulo2}) {
    return (retangulo1.posicao.x + retangulo1.largura >= retangulo2.posicao.x
        && retangulo1.posicao.x <= retangulo2.posicao.x + retangulo2.largura
        && retangulo1.posicao.y <= retangulo2.posicao.y + retangulo2.altura
        && retangulo1.posicao.y + retangulo1.altura >= retangulo2.posicao.y)
}

function animar() {
    requestAnimationFrame(animar)
    //console.log('animado')

    mapa.desenhar()

    //testeFronteira.desenhar()

    fronteiras.forEach(fronteira => {
        fronteira.desenhar()
    })

    jogador.desenhar()

    primeroPlano.desenhar()

    let movimentando = true
    
    jogador.movimentando = false

    if (teclas.w.pressionado && ultimaTecla === 'w') {
        jogador.movimentando = true
        jogador.imagem = jogador.imagens.cima

        for (let i = 0; i < fronteiras.length; i++) {
            const fronteira = fronteiras[i]

            if (colisaoRetangulo({
                    retangulo1: jogador, 
                    retangulo2: {...fronteira, posicao: {
                        x: fronteira.posicao.x,
                        y: fronteira.posicao.y + 3
                    }}
                })
            ) {
                //console.log('colidindo')
                movimentando = false
                break
            }
        }
            
        if (movimentando) {
            moveis.forEach((movel) => {
                movel.posicao.y += 3
            })
        }
    } else if (teclas.a.pressionado && ultimaTecla === 'a') {
        jogador.movimentando = true
        jogador.imagem = jogador.imagens.esquerda

        for (let i = 0; i < fronteiras.length; i++) {
            const fronteira = fronteiras[i]

            if (colisaoRetangulo({
                    retangulo1: jogador, 
                    retangulo2: {...fronteira, posicao: {
                        x: fronteira.posicao.x + 3,
                        y: fronteira.posicao.y 
                    }}
                })
            ) {
                //console.log('colidindo')
                movimentando = false
                break
            }
        }
            
        if (movimentando) {
            moveis.forEach((movel) => {
                movel.posicao.x += 3
            })
        }
    } else if (teclas.s.pressionado && ultimaTecla === 's') {
        jogador.movimentando = true
        jogador.imagem = jogador.imagens.baixo

        for (let i = 0; i < fronteiras.length; i++) {
            const fronteira = fronteiras[i]

            if (colisaoRetangulo({
                    retangulo1: jogador, 
                    retangulo2: {...fronteira, posicao: {
                        x: fronteira.posicao.x,
                        y: fronteira.posicao.y - 3
                    }}
                })
            ) {
                //console.log('colidindo')
                movimentando = false
                break
            }
        }
            
        if (movimentando) {
            moveis.forEach((movel) => {
                movel.posicao.y -= 3
            })
        }
    } else if (teclas.d.pressionado && ultimaTecla === 'd') {
        jogador.movimentando = true
        jogador.imagem = jogador.imagens.direita

        for (let i = 0; i < fronteiras.length; i++) {
            const fronteira = fronteiras[i]

            if (colisaoRetangulo({
                    retangulo1: jogador, 
                    retangulo2: {...fronteira, posicao: {
                        x: fronteira.posicao.x - 3,
                        y: fronteira.posicao.y
                    }}
                })
            ) {
                //console.log('colidindo')
                movimentando = false
                break
            }
        }
            
        if (movimentando) {
            moveis.forEach((movel) => {
                movel.posicao.x -= 3
            })
        }
    }
}

animar()

let ultimaTecla = ''

addEventListener('keydown', (e) => {
    //console.log(e.key)
    switch (e.key) {
        case 'w':
            //console.log('pressionou tecla w')
            teclas.w.pressionado = true
            ultimaTecla = 'w'
            break
        case 'a':
            //console.log('pressionou tecla a')
            teclas.a.pressionado = true
            ultimaTecla = 'a'
            break
        case 's':
            //console.log('pressionou tecla s')
            teclas.s.pressionado = true
            ultimaTecla = 's'
            break
        case 'd':
            //console.log('pressionou tecla d')
            teclas.d.pressionado = true
            ultimaTecla = 'd'
            break
    }
    //console.log(teclas)
})

addEventListener('keyup', (e) => {
    //console.log(e.key)
    switch (e.key) {
        case 'w':
            //console.log('pressionou tecla w')
            teclas.w.pressionado = false
            break
        case 'a':
            //console.log('pressionou tecla a')
            teclas.a.pressionado = false
            break
        case 's':
            //console.log('pressionou tecla s')
            teclas.s.pressionado = false
            break
        case 'd':
            //console.log('pressionou tecla d')
            teclas.d.pressionado = false
            break
    }
    //console.log(teclas)
})