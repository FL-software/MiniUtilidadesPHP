class Figura {
    constructor({
        posicao, 
        caminhoImagem, 
        escala = 1, 
        molduras = 1, 
        molduraAtual = 0, 
        deslocamento = {x: 0, y: 0}
    }) {
        this.posicao = posicao
        this.largura = 50
        this.altura = 150
        this.imagem = new Image()
        this.imagem.src = caminhoImagem
        this.escala = escala
        this.molduras = molduras
        this.molduraAtual = molduraAtual
        this.molduraDecorrer = 0
        this.molduraEsperar = 5
        this.deslocamento = deslocamento
    }

    desenha() {
        contexto.drawImage(
            this.imagem, 
            this.molduraAtual * (this.imagem.width / this.molduras),
            0,
            this.imagem.width / this.molduras,
            this.imagem.height,
            this.posicao.x - this.deslocamento.x, 
            this.posicao.y - this.deslocamento.y, 
            this.imagem.width / this.molduras * this.escala, 
            this.imagem.height * this.escala
        )
    }

    animarMoldura() {
        this.molduraDecorrer++

        if (this.molduraDecorrer % this.molduraEsperar === 0) {
            if (this.molduraAtual < this.molduras - 1) {
                this.molduraAtual++
            } else {
                this.molduraAtual = 0
            }
        }
    }

    atualiza() {
        this.desenha()
        this.animarMoldura()
    }
}

class Lutador extends Figura {
    constructor({
        posicao, 
        velocidade, 
        caminhoImagem, 
        escala = 1, 
        molduras = 1,
        deslocamento = {x: 0, y: 0},
        figuras,
        caixaAtaque = { deslocamento: {}, largura: undefined, altura: undefined}
    }) {
        super({ 
            posicao,
            caminhoImagem, 
            escala, 
            molduras,
            deslocamento
        })
        this.velocidade = velocidade
        this.largura = 50
        this.altura = 150
        this.ultimaTecla
        this.caixaAtaque = {
            posicao: {x: this.posicao.x, y: this.posicao.y},
            deslocamento: caixaAtaque.deslocamento,
            largura: caixaAtaque.largura,
            altura: caixaAtaque.altura,
        }
        this.estaAtacando
        this.vida = 100
        this.molduraAtual = 0
        this.molduraDecorrer = 0
        this.molduraEsperar = 5
        this.figuras = figuras
        this.morto = false

        for (const figura in figuras) {
            figuras[figura].imagem = new Image()
            figuras[figura].imagem.src = figuras[figura].caminhoImagem             
        }

        //console.log('Figuras: ' + this.figuras)
    }

    atualiza() {
        this.desenha()

        if (!this.morto) {
            this.animarMoldura()
        }

        //caixa de ataque
        this.caixaAtaque.posicao.x = this.posicao.x + this.caixaAtaque.deslocamento.x
        this.caixaAtaque.posicao.y = this.posicao.y + this.caixaAtaque.deslocamento.y

        //desenha caixa de ataque
        //contexto.fillRect(this.caixaAtaque.posicao.x, this.caixaAtaque.posicao.y, this.caixaAtaque.largura, this.caixaAtaque.altura)

        this.posicao.x += this.velocidade.x
        this.posicao.y += this.velocidade.y

        //gravidade
        if (this.posicao.y + this.altura + this.velocidade.y >= quadro.height - 96) {
            this.velocidade.y = 0
            this.posicao.y = 330
        } else {
            this.velocidade.y += gravidade
        }

        //console.log('Posição: ' + this.posicao.y)
    }

    ataque() {
        this.trocaFigura('ataque1')

        this.estaAtacando = true
    }

    tomaDano() {
        this.vida -= 20

        if (this.vida <= 0) {
            this.trocaFigura('morte')
        } else {
            this.trocaFigura('tomaDano')
        }
    }

    trocaFigura(figura) {
        //sobreescreve todas as outras animações com a animação de morte
        if (this.imagem === this.figuras.morte.imagem) {
           if (this.molduraAtual === this.figuras.morte.molduras - 1) {
               this.morto = true
           }

           return
        }

        //sobreescreve todas as outras animações com a animação de ataque
        if (this.imagem === this.figuras.ataque1.imagem 
            && this.molduraAtual < this.figuras.ataque1.molduras - 1) {
            return
        }

        //sobreescreve todas as outras animações com a animação de dano
        if (this.imagem === this.figuras.tomaDano.imagem 
            && this.molduraAtual < this.figuras.tomaDano.molduras - 1) {
            return
        }

        switch (figura) {
            case 'ocioso':
                if (this.imagem !== this.figuras.ocioso.imagem) {
                    this.imagem = this.figuras.ocioso.imagem
                    this.molduras = this.figuras.ocioso.molduras
                    this.molduraAtual = 0
                }
                break
            case 'corre':
                if (this.imagem !== this.figuras.corre.imagem) {
                    this.imagem = this.figuras.corre.imagem
                    this.molduras = this.figuras.corre.molduras
                    this.molduraAtual = 0
                }
                break
            case 'pula':
                if (this.imagem !== this.figuras.pula.imagem) {
                    this.imagem = this.figuras.pula.imagem
                    this.molduras = this.figuras.pula.molduras
                    this.molduraAtual = 0
                }
                break
            case 'cai':
                if (this.imagem !== this.figuras.cai.imagem) {
                    this.imagem = this.figuras.cai.imagem
                    this.molduras = this.figuras.cai.molduras
                    this.molduraAtual = 0
                }
                break
            case 'ataque1':
                if (this.imagem !== this.figuras.ataque1.imagem) {
                    this.imagem = this.figuras.ataque1.imagem
                    this.molduras = this.figuras.ataque1.molduras
                    this.molduraAtual = 0
                }
                break
            case 'tomaDano':
                if (this.imagem !== this.figuras.tomaDano.imagem) {
                    this.imagem = this.figuras.tomaDano.imagem
                    this.molduras = this.figuras.tomaDano.molduras
                    this.molduraAtual = 0
                }
                break
            case 'morte':
                if (this.imagem !== this.figuras.morte.imagem) {
                    this.imagem = this.figuras.morte.imagem
                    this.molduras = this.figuras.morte.molduras
                    this.molduraAtual = 0
                }
                break
        }
    }
}