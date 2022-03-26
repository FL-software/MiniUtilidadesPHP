let iconMenu = document.getElementById('icone_menu');
let divEsquerda = document.getElementById('esquerda');
let divDireita = document.getElementById('direita');

function modificarMenu() {
    if (divEsquerda.classList.contains('hide')) {
        divEsquerda.classList.remove('hide');
        divDireita.classList.add('removePaddingLeft');
    } else {
        divEsquerda.classList.add('hide');
        divDireita.classList.remove('removePaddingLeft');
    }
}

iconMenu.addEventListener("click", modificarMenu);