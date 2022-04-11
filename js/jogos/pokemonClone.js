const canvas = document.querySelector('canvas')
const contexto = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

contexto.fillStyle = 'white'
contexto.fillRect(0, 0, canvas.width, canvas.height)

const imagem = new Image()
imagem.src = '../../img/pokemonClone/Pellet Town.png'

imagem.onload = () => {
    contexto.drawImage(imagem, -700, -550)
}