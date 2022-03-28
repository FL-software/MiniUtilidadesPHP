const baralho = [
    {
        nome: "ADAM",
        img: "img/ADAM.jpeg"
    },
    {
        nome: "Andrew",
        img: "img/Andrew.jpeg"
    },
    {
        nome: "Anti ADAM",
        img: "img/Anti ADAM.jpeg"
    },
    {
        nome: "Arakawa",
        img: "img/Arakawa.jpeg"
    },
    {
        nome: "Argus",
        img: "img/Argus.jpeg"
    },
    {
        nome: "Corvo Selvagem",
        img: "img/Corvo Selvagem.jpeg"
    },
    {
        nome: "Demetrius1",
        img: "img/Demetrius1.jpeg"
    },
    {
        nome: "Demetrius2",
        img: "img/Demetrius2.jpeg"
    },
    {
        nome: "Dhallyon",
        img: "img/Dhallyon.jpeg"
    },
    {
        nome: "Dianna1",
        img: "img/Dianna1.jpeg"
    },
    {
        nome: "Dianna2",
        img: "img/Dianna2.jpeg"
    },
    {
        nome: "Fupert",
        img: "img/Fupert.jpeg"
    },
    {
        nome: "Jhon",
        img: "img/Jhon.jpeg"
    },
    {
        nome: "Kamui",
        img: "img/Kamui.jpeg"
    },
    {
        nome: "Kankar",
        img: "img/Kankar.jpeg"
    },
    {
        nome: "Ken",
        img: "img/Ken.jpeg"
    },
    {
        nome: "Khalyon1",
        img: "img/Khalyon1.jpeg"
    },
    {
        nome: "Khalyon2",
        img: "img/Khalyon2.jpeg"
    },
    {
        nome: "Kheynnel",
        img: "img/Kheynnel.jpeg"
    },
    {
        nome: "Lawrence",
        img: "img/Lawrence.jpeg"
    },
    {
        nome: "Malthus e Argus",
        img: "img/Malthus e Argus.jpeg"
    },
    {
        nome: "Malthus1",
        img: "img/Malthus1.jpeg"
    },
    {
        nome: "Malthus2",
        img: "img/Malthus2.jpeg"
    },
    {
        nome: "Miamoto",
        img: "img/Miamoto.jpeg"
    },
    {
        nome: "Odgg",
        img: "img/Odgg.jpeg"
    },
    {
        nome: "Peter",
        img: "img/Peter.jpeg"
    },
    {
        nome: "Shuuv1",
        img: "img/Shuuv1.jpeg"
    },
    {
        nome: "Shuvv2",
        img: "img/Shuvv2.jpeg"
    },
    {
        nome: "Smallsunshine",
        img: "img/Smallsunshine.jpeg"
    },
    {
        nome: "Thanner",
        img: "img/Thanner.jpeg"
    },
    {
        nome: "Therfrem1",
        img: "img/Therfrem1.jpeg"
    },
    {
        nome: "Therfrem2",
        img: "img/Therfrem2.jpeg"
    },
    {
        nome: "Yahoo",
        img: "img/Yahoo.jpeg"
    },
    {
        nome: "ADAM",
        img: "img/ADAM.jpeg"
    },
    {
        nome: "Andrew",
        img: "img/Andrew.jpeg"
    },
    {
        nome: "Anti ADAM",
        img: "img/Anti ADAM.jpeg"
    },
    {
        nome: "Arakawa",
        img: "img/Arakawa.jpeg"
    },
    {
        nome: "Argus",
        img: "img/Argus.jpeg"
    },
    {
        nome: "Corvo Selvagem",
        img: "img/Corvo Selvagem.jpeg"
    },
    {
        nome: "Demetrius1",
        img: "img/Demetrius1.jpeg"
    },
    {
        nome: "Demetrius2",
        img: "img/Demetrius2.jpeg"
    },
    {
        nome: "Dhallyon",
        img: "img/Dhallyon.jpeg"
    },
    {
        nome: "Dianna1",
        img: "img/Dianna1.jpeg"
    },
    {
        nome: "Dianna2",
        img: "img/Dianna2.jpeg"
    },
    {
        nome: "Fupert",
        img: "img/Fupert.jpeg"
    },
    {
        nome: "Jhon",
        img: "img/Jhon.jpeg"
    },
    {
        nome: "Kamui",
        img: "img/Kamui.jpeg"
    },
    {
        nome: "Kankar",
        img: "img/Kankar.jpeg"
    },
    {
        nome: "Ken",
        img: "img/Ken.jpeg"
    },
    {
        nome: "Khalyon1",
        img: "img/Khalyon1.jpeg"
    },
    {
        nome: "Khalyon2",
        img: "img/Khalyon2.jpeg"
    },
    {
        nome: "Kheynnel",
        img: "img/Kheynnel.jpeg"
    },
    {
        nome: "Lawrence",
        img: "img/Lawrence.jpeg"
    },
    {
        nome: "Malthus e Argus",
        img: "img/Malthus e Argus.jpeg"
    },
    {
        nome: "Malthus1",
        img: "img/Malthus1.jpeg"
    },
    {
        nome: "Malthus2",
        img: "img/Malthus2.jpeg"
    },
    {
        nome: "Miamoto",
        img: "img/Miamoto.jpeg"
    },
    {
        nome: "Odgg",
        img: "img/Odgg.jpeg"
    },
    {
        nome: "Peter",
        img: "img/Peter.jpeg"
    },
    {
        nome: "Shuuv1",
        img: "img/Shuuv1.jpeg"
    },
    {
        nome: "Shuvv2",
        img: "img/Shuvv2.jpeg"
    },
    {
        nome: "Smallsunshine",
        img: "img/Smallsunshine.jpeg"
    },
    {
        nome: "Thanner",
        img: "img/Thanner.jpeg"
    },
    {
        nome: "Therfrem1",
        img: "img/Therfrem1.jpeg"
    },
    {
        nome: "Therfrem2",
        img: "img/Therfrem2.jpeg"
    },
    {
        nome: "Yahoo",
        img: "img/Yahoo.jpeg"
    },
    {
        nome: "Burro",
        img: "img/Burro.jpeg"
    }
]

baralho.sort(() => {
    return 0.5 - Math.random();
});

const grade = document.querySelector("#grade");
const pontuacao = document.querySelector("#pontos");
let ponto;
let escolhidas = [];

function criarGrade() {
    ponto = 0;

    pontuacao.innerText = ponto;

    for (let i = 0; i < baralho.length; i++) {
        let carta = document.createElement("img");

        carta.id = i;
        carta.name = baralho[i].nome;
        carta.src = "img/capa.jpg";

        carta.addEventListener("click", escolherCarta);        
        grade.appendChild(carta);
    }
}

function escolherCarta() {
    let carta = this;
   
    carta.src = baralho[carta.id].img;

    escolhidas.push(carta);
                
    carta.removeEventListener("click", escolherCarta); 

    if (escolhidas.length == 2){
        setTimeout(() => {
            let carta1 = escolhidas[0];
            let carta2 = escolhidas[1];
    
            if (carta1.name == carta2.name)
            {
                carta1.src = "img/branco.jpg";
                carta2.src = "img/branco.jpg";

                ponto++;

                pontuacao.innerText = ponto;
            } else {            
                carta1.src = "img/capa.jpg";
                carta2.src = "img/capa.jpg";

                carta1.addEventListener("click", escolherCarta); 
                carta2.addEventListener("click", escolherCarta); 
            }       

            if (ponto == baralho.length -1 / 2) {
                alert ("Muito bom! Você achou todos os pares.");

                grade.innerHTML = "";

                criarGrade();
            }

            escolhidas = [];
        }, 300);
    }
}

function reiniciar() {
    window.location.reload();
}