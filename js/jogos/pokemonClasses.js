
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
    constructor({posicao, velocidade, imagem, molduras = {maximo: 1}, imagens}) {
        this.posicao = posicao
        this.velocidade = velocidade
        this.molduras = {...molduras, valor: 0, decorrido: 0}
        this.movimentando = false
        this.imagens = imagens
        this.imagem = imagem
        this.imagem.onload = () => {
            this.largura = this.imagem.width / this.molduras.maximo
            this.altura = this.imagem.height

            //console.log(this.largura)
            //console.log(this.altura)
        }
    }

    desenhar() {
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

        if (!this.movimentando) {
            return
        }

        if (this.molduras.maximo > 1) {
            this.molduras.decorrido++
        }

        if (this.molduras.decorrido % 10 === 0) {
            if (this.molduras.valor < this.molduras.maximo - 1) {
                this.molduras.valor++
            } else {
                this.molduras.valor = 0
            }
        }
    }
}