const monstros = {
    Chama: {
        posicao: {
            x: 280,
            y: 325
        },
        imagem: {
            src: '../../img/pokemonClone/embySprite.png'
        },
        molduras: {
            maximo: 4,
            espera: 30
        },
        animado: true,
        nome: "Chama",
        ataques: [ataques.Encontrao, ataques.BolaDeFogo]
    },
    Inseto: {
        posicao: {
            x: 800,
            y: 100
        },
        imagem: {
            src: '../../img/pokemonClone/draggleSprite.png'
        },
        molduras: {
            maximo: 4,
            espera: 30
        },
        animado: true,
        ehInimigo: true,
        nome: "Inseto",
        ataques: [ataques.Encontrao, ataques.BolaDeFogo]
    }
}