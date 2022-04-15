class Fronteira {
    static largura = 48
    static altura = 48
    constructor({posicao}) {
        this.posicao = posicao
        this.largura = Fronteira.largura
        this.altura = Fronteira.altura
    }

    desenhar() {
        contexto.fillStyle = 'rgba(255, 0 , 0, 0.0)'
        contexto.fillRect (this.posicao.x, this.posicao.y, this.largura, this.altura)
    }
}

class Objeto {
    constructor({
        posicao, 
        velocidade, 
        imagem, 
        molduras = {maximo: 1, espera: 10}, 
        imagens, 
        animado = false,        
        rotacao = 0        
    }) {
        this.posicao = posicao
        this.velocidade = velocidade
        this.molduras = {...molduras, valor: 0, decorrido: 0}
        this.animado = animado
        this.imagens = imagens
        this.imagem = new Image()
        this.imagem.onload = () => {
            this.largura = this.imagem.width / this.molduras.maximo
            this.altura = this.imagem.height
            //console.log(this.largura)
            //console.log(this.altura)
        }
        this.imagem.src = imagem.src
        this.opacidade = 1
        this.rotacao = rotacao
    }

    desenhar() {
        contexto.save()
        contexto.translate(this.posicao.x + this.largura / 2, this.posicao.y + this.altura / 2)
        contexto.rotate(this.rotacao)
        contexto.translate(-this.posicao.x - this.largura / 2, -this.posicao.y - this.altura / 2)
        contexto.globalAlpha = this.opacidade
        contexto.drawImage(
            this.imagem, 
            this.molduras.valor * this.largura,
            0,
            this.imagem.width / this.molduras.maximo, //posição inicial
            this.imagem.height, //posição inicial
            this.posicao.x,
            this.posicao.y,
            this.imagem.width / this.molduras.maximo, //posição atual
            this.imagem.height, //posição atual
        )
        contexto.restore()

        if (!this.animado) {
            return
        }

        if (this.molduras.maximo > 1) {
            this.molduras.decorrido++
        }

        if (this.molduras.decorrido % this.molduras.espera === 0) {
            if (this.molduras.valor < this.molduras.maximo - 1) {
                this.molduras.valor++
            } else {
                this.molduras.valor = 0
            }
        }
    }
}

class Monstro extends Objeto {
    constructor({
        posicao, 
        velocidade, 
        imagem, 
        molduras = {maximo: 1, espera: 10}, 
        imagens, 
        animado = false,        
        rotacao = 0,
        ehInimigo = false, 
        nome,
        ataques
    }) {
        super({
            posicao, 
            velocidade, 
            imagem, 
            molduras, 
            imagens, 
            animado,        
            rotacao
        })
        this.vida = 100
        this.ehInimigo = ehInimigo
        this.nome = nome,
        this.ataques = ataques
    }

    ataque({ataque, recebedor, renderizarImagens}) {
        document.querySelector('#caixaDeDialogo').style.display = 'block'
        document.querySelector('#caixaDeDialogo').innerHTML = this.nome + ' usou ' + ataque.descricao

        recebedor.vida -= ataque.dano
        let barraVida = '#barraVidaInimigo'
        let rotacao = 1

        if (this.ehInimigo) {
            barraVida = '#barraVidaJogador'
            rotacao = -2.2
        }

        switch (ataque.nome) {
            case 'BolaDeFogo':
                audio.inicioBolaDeFogo.play()
                
                const imagemBolaDeFogo = new Image()
                imagemBolaDeFogo.src = '../../img/pokemonClone/fireball.png'

                const bolaDeFogo = new Objeto({
                    posicao: {
                        x: this.posicao.x,
                        y: this.posicao.y
                    },
                    imagem: imagemBolaDeFogo,
                    molduras: {
                        maximo: 4,
                        espera: 10
                    },
                    animado: true,
                    rotacao
                })

                renderizarImagens.splice(1, 0, bolaDeFogo)

                gsap.to(bolaDeFogo.posicao, {
                    x: recebedor.posicao.x,
                    y: recebedor.posicao.y,
                    onComplete: () => {
                        audio.acertoBolaDeFogo.play()

                        gsap.to(barraVida, {
                            width: recebedor.vida + '%'
                        })

                        gsap.to(recebedor.posicao, {
                            x: recebedor.posicao.x + 10,
                            yoyo: true,
                            repeat: 5,
                            duration: 0.08
                        })

                        gsap.to(recebedor, { 
                            opacidade: 0,
                            repeat: 5,
                            yoyo: true,
                            duration: 0.08
                        })
                        renderizarImagens.splice(1, 1)
                    }
                })
                break
            case 'Encontrao':
                const linhaDoTempo = gsap.timeline()

                let distanciaMovimento = 20

                if (this.ehInimigo) {
                    distanciaMovimento = -20
                }

                linhaDoTempo.to(this.posicao, {
                    x: this.posicao.x - distanciaMovimento
                }).to(this.posicao, {
                    x: this.posicao.x + distanciaMovimento * 2,
                    duration: 0.1,
                    onComplete: () => {
                        audio.acertoEncontrao.play()

                        gsap.to(barraVida, {
                            width: recebedor.vida + '%'
                        })

                        gsap.to(recebedor.posicao, {
                            x: recebedor.posicao.x + 10,
                            yoyo: true,
                            repeat: 5,
                            duration: 0.08
                        })

                        gsap.to(recebedor, { 
                            opacidade: 0,
                            repeat: 5,
                            yoyo: true,
                            duration: 0.08
                        })
                    }
                }).to(this.posicao, {
                    x: this.posicao.x
                })  
                break
        }        
    }

    desmaiar() {
        //console.log('desmaiar')
        document.querySelector('#caixaDeDialogo').innerHTML = this.nome + ' desmaiou!'
        
        gsap.to(this.posicao, {
            y: this.posicao.y + 20
        })

        gsap.to(this, {
            opacidade: 0
        })
        
        audio.batalha.stop()
        audio.vitoria.play()
    }
}