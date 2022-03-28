const grade = document.getElementById("grade");
const pontuacao = document.getElementById("pontos");

for (let i = 0; i < 225; i++) {
    let quadrado = document.createElement("div");

    grade.appendChild(quadrado);
}

const quadrados = document.querySelectorAll("#grade div");
const invasores = [
    0,1,2,3,4,5,6,7,8,9,
    15,16,17,18,19,20,21,22,23,24,
    30,31,32,33,34,35,36,37,38,39
]

let posicaoJogador = 202;
let tamanho = 15; // grade 15 x 15
let direcao = 1;
let descer = false;
let invasoresId;
let atingidos = [];
let pontos = 0;

quadrados[posicaoJogador].classList.add("jogador");

invasores.forEach(invasor => {
    quadrados[invasor].classList.add("invasor")
});

document.addEventListener("keydown", moverJogador);
invasoresId = setInterval(moverInvasores, 300);
document.addEventListener("keyup", atirar);

function moverJogador(e, lado) {
    quadrados[posicaoJogador].classList.remove("jogador");

    if (lado == "esquerda" || (e != null && e.keyCode == 37)) { //seta esquerda
        if (posicaoJogador % tamanho != 0) {
            posicaoJogador--;
        }
    } else if (lado == "direita" || (e != null && e.keyCode == 39)) { //seta direita
        if (posicaoJogador % tamanho != tamanho - 1) {
            posicaoJogador++;
        }
    }

    quadrados[posicaoJogador].classList.add("jogador");
}

function moverInvasores() {
    const bordaEsquerda = invasores[0] % tamanho == 0;
    const bordaDireita = invasores[invasores.length - 1] % tamanho == tamanho - 1;

    invasores.forEach(invasor => {
        quadrados[invasor].classList.remove("invasor")
    });

    if (bordaEsquerda && direcao == - 1) {
        direcao = 1;
        descer = true;
    } else if (bordaDireita && direcao == 1) {
        direcao = - 1;
        descer = true;
    }

    for (let i = 0; i < invasores.length; i++) {
        invasores[i] += descer ? tamanho : direcao;
    }

    descer = false;
    
    invasores.forEach((invasor, indice) => {
        if (!atingidos.includes(indice)){
            quadrados[invasor].classList.add("invasor")
        }
    });

    if (invasores[invasores.length - 1] > quadrados.length - tamanho) {
        alert("Você perdeu!");
        clearInterval(invasoresId);
    }

    if (quadrados[posicaoJogador].classList.contains("invasor")) {
        alert("Você perdeu!");
        quadrados[posicaoJogador].classList.add("kabum");
        clearInterval(invasoresId);
    }

    if (atingidos.length == invasores.length) {
        alert("Você venceu!");
        clearInterval(invasoresId);
    }
}

function atirar(e) {
    let tiroId;
    let posicaoTiro = posicaoJogador;

    if (!e || e.keyCode == 32) { //espaço
        tiroId = setInterval(moverTiro, 100);
    }

    function moverTiro(){
        quadrados[posicaoTiro].classList.remove("tiro");

        posicaoTiro -= tamanho;

        quadrados[posicaoTiro].classList.add("tiro");

        if(quadrados[posicaoTiro].classList.contains("invasor")) {
            quadrados[posicaoTiro].classList.remove("invasor");
            quadrados[posicaoTiro].classList.remove("tiro");
            quadrados[posicaoTiro].classList.add("kabum");

            setTimeout(() => {
                quadrados[posicaoTiro].classList.remove("kabum");
            }, 300);

            clearInterval(tiroId);

            atingidos.push(invasores.indexOf(posicaoTiro));

            pontos++;

            pontuacao.innerHTML = pontos;
        }

        if (posicaoTiro < tamanho) {
            clearInterval(tiroId);
            quadrados[posicaoTiro].classList.remove("tiro");
        }
    }
}

function reiniciar() {
    window.location.reload();
}