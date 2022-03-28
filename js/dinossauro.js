let personagem = document.querySelector('#personagem')
let quadrado = document.querySelector('#quadrado')

function pular() {
    if (personagem.classList != 'animar') {
        personagem.classList.add('animar')
    }

    setTimeout(function(){
        personagem.classList.remove('animar')
    }, 500)
}

let testarColisao = setInterval( function() {
    let topoPersonagem = parseInt(
        window.getComputedStyle(personagem).getPropertyValue('top')
    )

    let esquerdaQuadrado = parseInt(
        window.getComputedStyle(quadrado).getPropertyValue('left')
    )

    if (esquerdaQuadrado < 20 && esquerdaQuadrado > 0 && topoPersonagem >= 130) {
        quadrado.style.animation = 'none'
        quadrado.style.display = 'none'
        alert('Você perdeu!')
    }
}, 10)

function reiniciar() {
    window.location.reload()
}