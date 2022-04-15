
const imagemFundoDeTelaBatalha = new Image()
imagemFundoDeTelaBatalha.src ='../../img/pokemonClone/battleBackground.png'

const fundoDeTelaBatalha = new Objeto({
    posicao: {
        x: 0,
        y: 0
    },
    imagem: imagemFundoDeTelaBatalha
})

let inseto
let chama
let renderizarImagens
let animacaoBatalhaId 
let fila = []

function iniciarBatalha() {
    document.querySelector('#interfaceUsuario').style.display = 'block'
    document.querySelector('#caixaDeDialogo').style.display = 'none'
    document.querySelector('#barraVidaInimigo').style.width = '100%'
    document.querySelector('#barraVidaJogador').style.width = '100%'
    document.querySelector('#caixaDeAtaque').replaceChildren()

    inseto = new Monstro(monstros.Inseto)
    chama = new Monstro(monstros.Chama)
    renderizarImagens = [inseto, chama]
    fila = []

    chama.ataques.forEach((ataque) => {
        //console.log(ataque)
        const botao = document.createElement('button')
        botao.innerHTML = ataque.descricao
        botao.value = ataque.nome
    
        document.querySelector('#caixaDeAtaque').append(botao)
    })

    //eventos para butões de ataque
    document.querySelectorAll('button').forEach((botao) => {
        botao.addEventListener('click', (e) => {
            //console.log(ataques[e.currentTarget.innerHTML])
            //console.log(ataques[e.currentTarget.value])
            const ataqueSelecionado = ataques[e.currentTarget.value]
    
            chama.ataque({
                ataque: ataqueSelecionado,
                recebedor: inseto,
                renderizarImagens
            })
    
            if (inseto.vida <= 0) {
                fila.push(() => {
                    inseto.desmaiar()
                })
    
                fila.push(() => {
                    //voltar ao preto
                    gsap.to('#divSobreposto', {
                        opacity: 1,
                        onComplete: () => {
                            cancelAnimationFrame(animacaoBatalhaId)
                            
                            animar()
    
                            document.querySelector('#interfaceUsuario').style.display = 'none'
    
                            gsap.to('#divSobreposto', {
                                opacity: 0
                            })

                            batalha.iniciada = false
                            
                            audio.mapa.play()
                        }
                    })
                })
    
                return
            }
    
            //inimigo ataca aqui
            const ataqueAleatorio = inseto.ataques[Math.floor(Math.random() * inseto.ataques.length)]
    
            fila.push(() => {
                inseto.ataque({
                    ataque: ataqueAleatorio,
                    recebedor: chama,
                    renderizarImagens
                })
    
                if (chama.vida <= 0) {
                    fila.push(() => {
                        chama.desmaiar()
                    })

                    fila.push(() => {
                        //voltar ao preto
                        gsap.to('#divSobreposto', {
                            opacity: 1,
                            onComplete: () => {
                                cancelAnimationFrame(animacaoBatalhaId)
                                
                                animar()
        
                                document.querySelector('#interfaceUsuario').style.display = 'none'
        
                                gsap.to('#divSobreposto', {
                                    opacity: 0
                                })

                                batalha.iniciada = false
                            
                                audio.mapa.play()
                            }
                        })
                    })
        
                    return
                }
            })
        })
    
        botao.addEventListener('mouseenter', (e) => {
            const ataqueSelecionado = ataques[e.currentTarget.value]
    
            document.querySelector('#tipoAtaque').innerHTML = ataqueSelecionado.tipo
            document.querySelector('#tipoAtaque').style.color = ataqueSelecionado.cor
        })
    })
}

function animarBatalha() {
    animacaoBatalhaId =  requestAnimationFrame(animarBatalha)
    //console.log("animação de batalha")
    //console.log(animacaoBatalhaId)

    fundoDeTelaBatalha.desenhar()

    renderizarImagens.forEach((imagem) => {
        imagem.desenhar()
    })
}

animar()
//iniciarBatalha()
//animarBatalha()

document.querySelector('#caixaDeDialogo').addEventListener('click', (e) => {
    //console.log('clique caixa de dialogo');

    if (fila.length > 0) {
        fila[0]()
        fila.shift()
    } else {
        e.currentTarget.style.display = 'none'
    }
})