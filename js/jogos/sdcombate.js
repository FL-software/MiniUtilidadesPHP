// Variaveis Globais

var etapa_partida = 0; // loginJogadores = 0, iniciarPartida = 1, distribuirUnidades = 2, batalharUnidades = 3, concluirPartida = 4

var vez_jogador = 0; // preparação = 0, vez jogador 1 = 1, vez jogador 2 = 2

var celula_selecionada = 0; // celula não selecionada = 0, ou ID da celula (ex: A1)

var unidade_selecionada = 0; // unidade não selecionada = 0, ou ID da unidade = badeira, bomba, espiao, soldado, cabo_armeiro, sargento, tenente, capitao, major, coronel, general, marechal

var celula_ataque = 0; // celula não selecionada = 0, ou ID da celula de ataque somente o nome (ex: soldado)

var celula_ataque_numero = 0; // celula não selecionada = 0, ou numeracao convertida da celula de ataque (espiao = 1, soldado = 2, cabo_armeiro = 3, sargento = 4, tenente = 5, capitao = 6, major = 7, coronel = 8, general = 9, marechal = 10)

var celula_defesa = 0; // celula não selecionada = 0, ou ID da celula de defesa somente o nome (ex: soldado)

var celula_defesa_numero = 0; // celula não selecionada = 0, ou numeracao convertida da celula de defesa (espiao = 1, soldado = 2, cabo_armeiro = 3, sargento = 4, tenente = 5, capitao = 6, major = 7, coronel = 8, general = 9, marechal = 10)

var acao_ataque_defesa = "ataque"; // "ataque" ou "defesa"

var Jogador_1 = { // unidades a serem distribuidas e identificação dos jogadores 
  id_jogador: 0, // id é gerado quando o jogador logar na etapa LoginJogadores 
  lado_jogador: "", // lado que o jogador está logado
  bandeira_qtd: 1, // quatidade da unidade
  bandeira_posicao: [0], // posição em celula da unidade (Ex: A1), se foi derrotada ou não recebeu posição inicial = 0
  bomba_qtd: 6,
  bomba_posicao: [0,0,0,0,0,0],
  espiao_qtd: 1,
  espiao_posicao: [0],
  soldado_qtd: 8,
  soldado_posicao: [0,0,0,0,0,0,0,0],
  cabo_armeiro_qtd: 5,
  cabo_armeiro_posicao: [0,0,0,0,0],
  sargento_qtd: 4,
  sargento_posicao: [0,0,0,0],
  tenente_qtd: 4,
  tenente_posicao: [0,0,0,0],
  capitao_qtd: 4,
  capitao_posicao: [0,0,0,0],
  major_qtd: 3,
  major_posicao: [0,0,0],
  coronel_qtd: 2,
  coronel_posicao: [0,0],
  general_qtd: 1,
  general_posicao: [0],
  marechal_qtd: 1,
  marechal_posicao: [0]
};

var Jogador_2 = { // unidades a serem distribuidas e identificação dos jogadores
  id_jogador: 0, // id é gerado quando o jogador logar na etapa LoginJogadores 
  lado_jogador: "",
  bandeira_qtd: 1, // quatidade da unidade
  bandeira_posicao: [0], // posição em celula da unidade (Ex: A1), se foi derrotada ou não recebeu posição inicial = 0
  bomba_qtd: 6,
  bomba_posicao: [0,0,0,0,0,0],
  espiao_qtd: 1,
  espiao_posicao: [0],
  soldado_qtd: 8,
  soldado_posicao: [0,0,0,0,0,0,0,0],
  cabo_armeiro_qtd: 5,
  cabo_armeiro_posicao: [0,0,0,0,0],
  sargento_qtd: 4,
  sargento_posicao: [0,0,0,0],
  tenente_qtd: 4,
  tenente_posicao: [0,0,0,0],
  capitao_qtd: 4,
  capitao_posicao: [0,0,0,0],
  major_qtd: 3,
  major_posicao: [0,0,0],
  coronel_qtd: 2,
  coronel_posicao: [0,0],
  general_qtd: 1,
  general_posicao: [0],
  marechal_qtd: 1,
  marechal_posicao: [0]
};

var jogadores_logados = 0; // quantidade de jogadores logados

var Partida = { // relacionamento dos jogadores participantes com a partida, a cada nova partida na etapa iniciarPartida, para manter um log
  id_partida: 0, // id_partida gerado durante o turno iniciarPartida
  id_jogador_1: 0, // id_jogador informado durante o turno iniciarPartida de acordo com o sorteio
  id_jogador_2: 0, // id_jogador informado durante o turno iniciarPartida de acordo com o sorteio
  vencedor: 0 // definido como 1 ou 2 ao capturar a bandeira
};

var Embates_batalha = { // relacionamento das informações dos turnos, a cada novo turno na etapa batalharUnidades, para manter um log
  id_partida: 0, // id_partida informado durante o turno BatalharUnidade
  turno: 0, // contador de turno criado no turno BatalharUnidade
  id_jogador_vez: 0, // id_jogador informado durante o turno BatalharUnidade 
  unidade_ataque: 0, // unidade ataque jogador da vez, celula não selecionada = 0, ou ID da celula de ataque nome completo (ex: 1soldadoA1)
  unidade_defesa: 0 // unidade defesa jogador adversário, celula não selecionada = 0, ou ID da celula de defesa nome completo (ex: 1soldadoA1)
};
 
$(document).ready(function() { // começo jQuery

  $('.celula').attr('unselectable', 'on').css('user-select', 'none').on('selectstart', false); // impede selecionar texto da celula

  $('.celulaJogadorA').click(function() { // celula clicada do lado do Jogador A
    if ((etapa_partida === 2) && ($(this).children().length <= 0) && (((vez_jogador == 1) && (Jogador_1.lado_jogador == "jogadorA")) || ((vez_jogador == 2) && (Jogador_2.lado_jogador == "jogadorA"))) && (($(this).css("background-color") == "rgb(255, 255, 0)") || ($(this).css("background-color") == "transparent"))){ // se está na etapa 2 e se cor da celula com mouse em cima ou transparente
      $('.celula').css("background-color","transparent").css("opacity", "1"); // limpa a cor de todas as celulas
      $(this).css("background-color","rgb(255, 0, 0)").css("opacity", "0.3"); // colore celula clicada
      celula_selecionada = $(this).attr("id"); // informa qual foi a celula selecionada
      if (confirm("Jogador " + vez_jogador + ". Confirmar que selecionou a celula " + celula_selecionada + " para colocar " + unidade_selecionada + " ?")) { // mensagem informando a celula selecionada, para confirmação
        $(this).text(""); //limpa o texto da celula
        var img_cor_unidade = ""; // cria a variavel do nome da imagem
        if (vez_jogador == 1) { // verifica qual a vez do jogador
          img_cor_unidade = "azul_"; // define a cor da unidade do jogador referente ao jogador atual
        } else {
          img_cor_unidade = "verde_";
        }
        switch (unidade_selecionada) { // verifica qual a unidade a ser selecionada
          case "bandeira": // verifica se é a bandeira
            img_cor_unidade += "bandeira"; // adiciona ao nome da imagem o tipo de unidade selecionada
            if (vez_jogador == 1) { // verifica se é a vez do Jogador 1
              Jogador_1.bandeira_posicao = celula_selecionada; // guarda a posição da celula no atributo do jogador da vez
              if (Jogador_1.lado_jogador == "jogadorA") { // verifica o lado do jogador salvo na instancia do Jogador_1
                $(PosicaoBandeiraJogadorA).text(Jogador_1.bandeira_posicao); // exibe a posição da unidade na instancia no Lado Jogador A
              } else {
                $(PosicaoBandeiraJogadorB).text(Jogador_1.bandeira_posicao); // exibe a posição da unidade na instancia no Lado Jogador B
              }
            } else { // caso seja a vez do Jogador 2
              Jogador_2.bandeira_posicao = celula_selecionada;
              if (Jogador_2.lado_jogador == "jogadorA") {
                $(PosicaoBandeiraJogadorA).text(Jogador_2.bandeira_posicao);
              } else {
                $(PosicaoBandeiraJogadorB).text(Jogador_2.bandeira_posicao);
              }
            }
            break; // finaliza a switch
          case "bomba":
            img_cor_unidade += "bomba";
            if (vez_jogador == 1) {
              Jogador_1.bomba_posicao[6 - Jogador_1.bomba_qtd] = celula_selecionada;
              if (Jogador_1.lado_jogador == "jogadorA") {
                $(PosicaoBombaJogadorA).text(Jogador_1.bomba_posicao);
              } else {
                $(PosicaoBombaJogadorB).text(Jogador_1.bomba_posicao);
              }
            } else {
              Jogador_2.bomba_posicao[6 - Jogador_2.bomba_qtd] = celula_selecionada;
              if (Jogador_2.lado_jogador == "jogadorA") {
                $(PosicaoBombaJogadorA).text(Jogador_2.bomba_posicao);
              } else {
                $(PosicaoBombaJogadorB).text(Jogador_2.bomba_posicao);
              }
            }
            break;
          case "espiao":
            img_cor_unidade += "espiao";
            if (vez_jogador == 1) {
              Jogador_1.espiao_posicao = celula_selecionada;
              if (Jogador_1.lado_jogador == "jogadorA") {
                $(PosicaoEspiaoJogadorA).text(Jogador_1.espiao_posicao);
              } else {
                $(PosicaoEspiaoJogadorB).text(Jogador_1.espiao_posicao);
              }
            } else {
              Jogador_2.espiao_posicao = celula_selecionada;
              if (Jogador_2.lado_jogador == "jogadorA") {
                $(PosicaoEspiaoJogadorA).text(Jogador_2.espiao_posicao);
              } else {
                $(PosicaoEspiaoJogadorB).text(Jogador_2.espiao_posicao);
              }
            }
            break;
          case "soldado":
            img_cor_unidade += "soldado";
            if (vez_jogador == 1) {
              Jogador_1.soldado_posicao[8 - Jogador_1.soldado_qtd] = celula_selecionada;
              if (Jogador_1.lado_jogador == "jogadorA") {
                $(PosicaoSoldadoJogadorA).text(Jogador_1.soldado_posicao);
              } else {
                $(PosicaoSoldadoJogadorB).text(Jogador_1.soldado_posicao);
              }
            } else {
              Jogador_2.soldado_posicao[8 - Jogador_2.soldado_qtd] = celula_selecionada;
              if (Jogador_2.lado_jogador == "jogadorA") {
                $(PosicaoSoldadoJogadorA).text(Jogador_2.soldado_posicao);
              } else {
                $(PosicaoSoldadoJogadorB).text(Jogador_2.soldado_posicao);
              }
            }
            break;
          case "cabo_armeiro":
            img_cor_unidade += "cabo_armeiro";
            if (vez_jogador == 1) {
              Jogador_1.cabo_armeiro_posicao[5 - Jogador_1.cabo_armeiro_qtd] = celula_selecionada;
              if (Jogador_1.lado_jogador == "jogadorA") {
                $(PosicaoCabo_armeiroJogadorA).text(Jogador_1.cabo_armeiro_posicao);
              } else {
                $(PosicaoCabo_armeiroJogadorB).text(Jogador_1.cabo_armeiro_posicao);
              }
            } else {
              Jogador_2.cabo_armeiro_posicao[5 - Jogador_2.cabo_armeiro_qtd] = celula_selecionada;
              if (Jogador_2.lado_jogador == "jogadorA") {
                $(PosicaoCabo_armeiroJogadorA).text(Jogador_2.cabo_armeiro_posicao);
              } else {
                $(PosicaoCabo_armeiroJogadorB).text(Jogador_2.cabo_armeiro_posicao);
              }
            }
            break;
          case "sargento":
            img_cor_unidade += "sargento";
            if (vez_jogador == 1) {
              Jogador_1.sargento_posicao[4 - Jogador_1.sargento_qtd] = celula_selecionada;
              if (Jogador_1.lado_jogador == "jogadorA") {
                $(PosicaoSargentoJogadorA).text(Jogador_1.sargento_posicao);
              } else {
                $(PosicaoSargentoJogadorB).text(Jogador_1.sargento_posicao);
              }
            } else {
              Jogador_2.sargento_posicao[4 - Jogador_2.sargento_qtd] = celula_selecionada;
              if (Jogador_2.lado_jogador == "jogadorA") {
                $(PosicaoSargentoJogadorA).text(Jogador_2.sargento_posicao);
              } else {
                $(PosicaoSargentoJogadorB).text(Jogador_2.sargento_posicao);
              }
            }
            break;
          case "tenente":
            img_cor_unidade += "tenente";
            if (vez_jogador == 1) {
              Jogador_1.tenente_posicao[4 - Jogador_1.tenente_qtd] = celula_selecionada;
              if (Jogador_1.lado_jogador == "jogadorA") {
                $(PosicaoTenenteJogadorA).text(Jogador_1.tenente_posicao);
              } else {
                $(PosicaoTenenteJogadorB).text(Jogador_1.tenente_posicao);
              }
            } else {
              Jogador_2.tenente_posicao[4 - Jogador_2.tenente_qtd] = celula_selecionada;
              if (Jogador_2.lado_jogador == "jogadorA") {
                $(PosicaoTenenteJogadorA).text(Jogador_2.tenente_posicao);
              } else {
                $(PosicaoTenenteJogadorB).text(Jogador_2.tenente_posicao);
              }
            }
            break;
          case "capitao":
            img_cor_unidade += "capitao";
            if (vez_jogador == 1) {
              Jogador_1.capitao_posicao[4 - Jogador_1.capitao_qtd] = celula_selecionada;
              if (Jogador_1.lado_jogador == "jogadorA") {
                $(PosicaoCapitaoJogadorA).text(Jogador_1.capitao_posicao);
              } else {
                $(PosicaoCapitaoJogadorB).text(Jogador_1.capitao_posicao);
              }
            } else {
              Jogador_2.capitao_posicao[4 - Jogador_2.capitao_qtd] = celula_selecionada;
              if (Jogador_2.lado_jogador == "jogadorA") {
                $(PosicaoCapitaoJogadorA).text(Jogador_2.capitao_posicao);
              } else {
                $(PosicaoCapitaoJogadorB).text(Jogador_2.capitao_posicao);
              }
            }
            break;
          case "major":
            img_cor_unidade += "major";
            if (vez_jogador == 1) {
              Jogador_1.major_posicao[3 - Jogador_1.major_qtd] = celula_selecionada;
              if (Jogador_1.lado_jogador == "jogadorA") {
                $(PosicaoMajorJogadorA).text(Jogador_1.major_posicao);
              } else {
                $(PosicaoMajorJogadorB).text(Jogador_1.major_posicao);
              }
            } else {
              Jogador_2.major_posicao[3 - Jogador_2.major_qtd] = celula_selecionada;
              if (Jogador_2.lado_jogador == "jogadorA") {
                $(PosicaoMajorJogadorA).text(Jogador_2.major_posicao);
              } else {
                $(PosicaoMajorJogadorB).text(Jogador_2.major_posicao);
              }
            }
            break;
          case "coronel":
            img_cor_unidade += "coronel";
            if (vez_jogador == 1) {
              Jogador_1.coronel_posicao[2 - Jogador_1.coronel_qtd] = celula_selecionada;
              if (Jogador_1.lado_jogador == "jogadorA") {
                $(PosicaoCoronelJogadorA).text(Jogador_1.coronel_posicao);
              } else {
                $(PosicaoCoronelJogadorB).text(Jogador_1.coronel_posicao);
              }
            } else {
              Jogador_2.coronel_posicao[2 - Jogador_2.coronel_qtd] = celula_selecionada;
              if (Jogador_2.lado_jogador == "jogadorA") {
                $(PosicaoCoronelJogadorA).text(Jogador_2.coronel_posicao);
              } else {
                $(PosicaoCoronelJogadorB).text(Jogador_2.coronel_posicao);
              }
            }
            break;
          case "general":
            img_cor_unidade += "general";
            if (vez_jogador == 1) {
              Jogador_1.general_posicao = celula_selecionada;
              if (Jogador_1.lado_jogador == "jogadorA") {
                $(PosicaoGeneralJogadorA).text(Jogador_1.general_posicao);
              } else {
                $(PosicaoGeneralJogadorB).text(Jogador_1.general_posicao);
              }
            } else {
              Jogador_2.general_posicao = celula_selecionada;
              if (Jogador_2.lado_jogador == "jogadorA") {
                $(PosicaoGeneralJogadorA).text(Jogador_2.general_posicao);
              } else {
                $(PosicaoGeneralJogadorB).text(Jogador_2.general_posicao);
              }
            }
            break;
          default:
            img_cor_unidade += "marechal";
            if (vez_jogador == 1) {
              Jogador_1.marechal_posicao = celula_selecionada;
              if (Jogador_1.lado_jogador == "jogadorA") {
                $(PosicaoMarechalJogadorA).text(Jogador_1.marechal_posicao);
              } else {
                $(PosicaoMarechalJogadorB).text(Jogador_1.marechal_posicao);
              }
            } else {
              Jogador_2.marechal_posicao = celula_selecionada;
              if (Jogador_2.lado_jogador == "jogadorA") {
                $(PosicaoMarechalJogadorA).text(Jogador_2.marechal_posicao);
              } else {
                $(PosicaoMarechalJogadorB).text(Jogador_2.marechal_posicao);
              }
            }
            break;
        }
        //alert("Jogador " + vez_jogador + ". Colocou a unidade " + unidade_selecionada + " na celula " + celula_selecionada + " !")
        $(this).append('<div id=' + vez_jogador + unidade_selecionada + celula_selecionada + ' class="img_unidade" style=" background-image: url(../../img/sdcombate/' + img_cor_unidade + '.png)"></div>'); // cria um novo div com a imagem da unidade
        $(this).css("background-color","transparent").css("opacity", "1"); // tirar cor da celula
        distribuirUnidades();
      }
    }
    $(this).css("background-color","transparent").css("opacity", "1"); // tirar cor da celula se desmarcar a seleção
    celula_selecionada = 0; // limpar seleção da celula
  });
  
  $('.celulaJogadorB').click(function() { // celula clicada do lado do Jogador B o código é um espelho do Jogador A
    if ((etapa_partida === 2) && ($(this).children().length <= 0) && (((vez_jogador == 1) && (Jogador_1.lado_jogador == "jogadorB")) || ((vez_jogador == 2) && (Jogador_2.lado_jogador == "jogadorB"))) && (($(this).css("background-color") == "rgb(255, 255, 0)") || ($(this).css("background-color") == "transparent"))){ // se está na etapa 2 e se cor da celula com mouse em cima ou transparente
      $('.celula').css("background-color","transparent").css("opacity", "1"); // limpa a cor de todas as celulas
      $(this).css("background-color","rgb(255, 0, 0)").css("opacity", "0.3"); // colore celula clicada
      celula_selecionada = $(this).attr("id"); // informa qual foi a celula selecionada
      if (confirm("Jogador " + vez_jogador + ". Confirmar que selecionou a celula " + celula_selecionada + " para colocar " + unidade_selecionada + " ?")) { // mensagem informando a celula selecionada, para confirmação
        $(this).text(""); //limpa o texto da celula
        var img_cor_unidade = ""; // cria a variavel do nome da imagem
        if (vez_jogador == 1) { // verifica qual a vez do jogador
          img_cor_unidade = "azul_"; // define a cor da unidade do jogador referente ao jogador atual
        } else {
          img_cor_unidade = "verde_";
        }
        switch (unidade_selecionada) { // verifica qual a unidade a ser selecionada
          case "bandeira":
            img_cor_unidade += "bandeira"; // adiciona ao nome da imagem o tipo de unidade selecionada
            if (vez_jogador == 1) { // verifica qual a vez do jogador
              Jogador_1.bandeira_posicao = celula_selecionada; // guarda a posição da celula no atributo do jogador da vez
              if (Jogador_1.lado_jogador == "jogadorA") {
                $(PosicaoBandeiraJogadorA).text(Jogador_1.bandeira_posicao);
              } else {
                $(PosicaoBandeiraJogadorB).text(Jogador_1.bandeira_posicao);
              }
            } else {
              Jogador_2.bandeira_posicao = celula_selecionada;
              if (Jogador_2.lado_jogador == "jogadorA") {
                $(PosicaoBandeiraJogadorA).text(Jogador_2.bandeira_posicao);
              } else {
                $(PosicaoBandeiraJogadorB).text(Jogador_2.bandeira_posicao);
              }
            }
            break; // finaliza a switch
          case "bomba":
            img_cor_unidade += "bomba";
            if (vez_jogador == 1) {
              Jogador_1.bomba_posicao[6 - Jogador_1.bomba_qtd] = celula_selecionada;
              if (Jogador_1.lado_jogador == "jogadorA") {
                $(PosicaoBombaJogadorA).text(Jogador_1.bomba_posicao);
              } else {
                $(PosicaoBombaJogadorB).text(Jogador_1.bomba_posicao);
              }
            } else {
              Jogador_2.bomba_posicao[6 - Jogador_2.bomba_qtd] = celula_selecionada;
              if (Jogador_2.lado_jogador == "jogadorA") {
                $(PosicaoBombaJogadorA).text(Jogador_2.bomba_posicao);
              } else {
                $(PosicaoBombaJogadorB).text(Jogador_2.bomba_posicao);
              }
            }
            break;
          case "espiao":
            img_cor_unidade += "espiao";
            if (vez_jogador == 1) {
              Jogador_1.espiao_posicao = celula_selecionada;
              if (Jogador_1.lado_jogador == "jogadorA") {
                $(PosicaoEspiaoJogadorA).text(Jogador_1.espiao_posicao);
              } else {
                $(PosicaoEspiaoJogadorB).text(Jogador_1.espiao_posicao);
              }
            } else {
              Jogador_2.espiao_posicao = celula_selecionada;
              if (Jogador_2.lado_jogador == "jogadorA") {
                $(PosicaoEspiaoJogadorA).text(Jogador_2.espiao_posicao);
              } else {
                $(PosicaoEspiaoJogadorB).text(Jogador_2.espiao_posicao);
              }
            }
            break;
          case "soldado":
            img_cor_unidade += "soldado";
            if (vez_jogador == 1) {
              Jogador_1.soldado_posicao[8 - Jogador_1.soldado_qtd] = celula_selecionada;
              if (Jogador_1.lado_jogador == "jogadorA") {
                $(PosicaoSoldadoJogadorA).text(Jogador_1.soldado_posicao);
              } else {
                $(PosicaoSoldadoJogadorB).text(Jogador_1.soldado_posicao);
              }
            } else {
              Jogador_2.soldado_posicao[8 - Jogador_2.soldado_qtd] = celula_selecionada;
              if (Jogador_2.lado_jogador == "jogadorA") {
                $(PosicaoSoldadoJogadorA).text(Jogador_2.soldado_posicao);
              } else {
                $(PosicaoSoldadoJogadorB).text(Jogador_2.soldado_posicao);
              }
            }
            break;
          case "cabo_armeiro":
            img_cor_unidade += "cabo_armeiro";
            if (vez_jogador == 1) {
              Jogador_1.cabo_armeiro_posicao[5 - Jogador_1.cabo_armeiro_qtd] = celula_selecionada;
              if (Jogador_1.lado_jogador == "jogadorA") {
                $(PosicaoCabo_armeiroJogadorA).text(Jogador_1.cabo_armeiro_posicao);
              } else {
                $(PosicaoCabo_armeiroJogadorB).text(Jogador_1.cabo_armeiro_posicao);
              }
            } else {
              Jogador_2.cabo_armeiro_posicao[5 - Jogador_2.cabo_armeiro_qtd] = celula_selecionada;
              if (Jogador_2.lado_jogador == "jogadorA") {
                $(PosicaoCabo_armeiroJogadorA).text(Jogador_2.cabo_armeiro_posicao);
              } else {
                $(PosicaoCabo_armeiroJogadorB).text(Jogador_2.cabo_armeiro_posicao);
              }
            }
            break;
          case "sargento":
            img_cor_unidade += "sargento";
            if (vez_jogador == 1) {
              Jogador_1.sargento_posicao[4 - Jogador_1.sargento_qtd] = celula_selecionada;
              if (Jogador_1.lado_jogador == "jogadorA") {
                $(PosicaoSargentoJogadorA).text(Jogador_1.sargento_posicao);
              } else {
                $(PosicaoSargentoJogadorB).text(Jogador_1.sargento_posicao);
              }
            } else {
              Jogador_2.sargento_posicao[4 - Jogador_2.sargento_qtd] = celula_selecionada;
              if (Jogador_2.lado_jogador == "jogadorA") {
                $(PosicaoSargentoJogadorA).text(Jogador_2.sargento_posicao);
              } else {
                $(PosicaoSargentoJogadorB).text(Jogador_2.sargento_posicao);
              }
            }
            break;
          case "tenente":
            img_cor_unidade += "tenente";
            if (vez_jogador == 1) {
              Jogador_1.tenente_posicao[4 - Jogador_1.tenente_qtd] = celula_selecionada;
              if (Jogador_1.lado_jogador == "jogadorA") {
                $(PosicaoTenenteJogadorA).text(Jogador_1.tenente_posicao);
              } else {
                $(PosicaoTenenteJogadorB).text(Jogador_1.tenente_posicao);
              }
            } else {
              Jogador_2.tenente_posicao[4 - Jogador_2.tenente_qtd] = celula_selecionada;
              if (Jogador_2.lado_jogador == "jogadorA") {
                $(PosicaoTenenteJogadorA).text(Jogador_2.tenente_posicao);
              } else {
                $(PosicaoTenenteJogadorB).text(Jogador_2.tenente_posicao);
              }
            }
            break;
          case "capitao":
            img_cor_unidade += "capitao";
            if (vez_jogador == 1) {
              Jogador_1.capitao_posicao[4 - Jogador_1.capitao_qtd] = celula_selecionada;
              if (Jogador_1.lado_jogador == "jogadorA") {
                $(PosicaoCapitaoJogadorA).text(Jogador_1.capitao_posicao);
              } else {
                $(PosicaoCapitaoJogadorB).text(Jogador_1.capitao_posicao);
              }
            } else {
              Jogador_2.capitao_posicao[4 - Jogador_2.capitao_qtd] = celula_selecionada;
              if (Jogador_2.lado_jogador == "jogadorA") {
                $(PosicaoCapitaoJogadorA).text(Jogador_2.capitao_posicao);
              } else {
                $(PosicaoCapitaoJogadorB).text(Jogador_2.capitao_posicao);
              }
            }
            break;
          case "major":
            img_cor_unidade += "major";
            if (vez_jogador == 1) {
              Jogador_1.major_posicao[3 - Jogador_1.major_qtd] = celula_selecionada;
              if (Jogador_1.lado_jogador == "jogadorA") {
                $(PosicaoMajorJogadorA).text(Jogador_1.major_posicao);
              } else {
                $(PosicaoMajorJogadorB).text(Jogador_1.major_posicao);
              }
            } else {
              Jogador_2.major_posicao[3 - Jogador_2.major_qtd] = celula_selecionada;
              if (Jogador_2.lado_jogador == "jogadorA") {
                $(PosicaoMajorJogadorA).text(Jogador_2.major_posicao);
              } else {
                $(PosicaoMajorJogadorB).text(Jogador_2.major_posicao);
              }
            }
            break;
          case "coronel":
            img_cor_unidade += "coronel";
            if (vez_jogador == 1) {
              Jogador_1.coronel_posicao[2 - Jogador_1.coronel_qtd] = celula_selecionada;
              if (Jogador_1.lado_jogador == "jogadorA") {
                $(PosicaoCoronelJogadorA).text(Jogador_1.coronel_posicao);
              } else {
                $(PosicaoCoronelJogadorB).text(Jogador_1.coronel_posicao);
              }
            } else {
              Jogador_2.coronel_posicao[2 - Jogador_2.coronel_qtd] = celula_selecionada;
              if (Jogador_2.lado_jogador == "jogadorA") {
                $(PosicaoCoronelJogadorA).text(Jogador_2.coronel_posicao);
              } else {
                $(PosicaoCoronelJogadorB).text(Jogador_2.coronel_posicao);
              }
            }
            break;
          case "general":
            img_cor_unidade += "general";
            if (vez_jogador == 1) {
              Jogador_1.general_posicao = celula_selecionada;
              if (Jogador_1.lado_jogador == "jogadorA") {
                $(PosicaoGeneralJogadorA).text(Jogador_1.general_posicao);
              } else {
                $(PosicaoGeneralJogadorB).text(Jogador_1.general_posicao);
              }
            } else {
              Jogador_2.general_posicao = celula_selecionada;
              if (Jogador_2.lado_jogador == "jogadorA") {
                $(PosicaoGeneralJogadorA).text(Jogador_2.general_posicao);
              } else {
                $(PosicaoGeneralJogadorB).text(Jogador_2.general_posicao);
              }
            }
            break;
          default:
            img_cor_unidade += "marechal";
            if (vez_jogador == 1) {
              Jogador_1.marechal_posicao = celula_selecionada;
              if (Jogador_1.lado_jogador == "jogadorA") {
                $(PosicaoMarechalJogadorA).text(Jogador_1.marechal_posicao);
              } else {
                $(PosicaoMarechalJogadorB).text(Jogador_1.marechal_posicao);
              }
            } else {
              Jogador_2.marechal_posicao = celula_selecionada;
              if (Jogador_2.lado_jogador == "jogadorA") {
                $(PosicaoMarechalJogadorA).text(Jogador_2.marechal_posicao);
              } else {
                $(PosicaoMarechalJogadorB).text(Jogador_2.marechal_posicao);
              }
            }
            break;
        }
        //alert("Jogador " + vez_jogador + ". Colocou a unidade " + unidade_selecionada + " na celula " + celula_selecionada + " !")
        $(this).append('<div id=' + vez_jogador + unidade_selecionada + celula_selecionada + ' class="img_unidade" style=" background-image: url(../../img/sdcombate/' + img_cor_unidade + '.png)"></div>'); // cria um novo div com a imagem da unidade
        $(this).css("background-color","transparent").css("opacity", "1"); // tirar cor da celula
        distribuirUnidades();
      }
    }
    $(this).css("background-color","transparent").css("opacity", "1"); // tirar cor da celula se desmarcar a seleção
    celula_selecionada = 0; // limpar seleção da celula
  });
  
  $('.celula').click(function() { // celula clicada no tabuleiro geral
    if ((etapa_partida === 3) && (acao_ataque_defesa == "defesa") && ($(this).children().length <= 0)){ // se está na etapa 3 e se cor da celula com mouse em cima ou transparente de acordo com o ataque e unidade do jogador ou defesa unidade do inimigo
      if (confirm("Jogador " + vez_jogador + ". Confirmar que selecionou a celula " + $(this).attr("id") + " ?")) { // mensagem para confirmar a unidade que clicou
        $("#" + $(this).attr("id")).append('<div id=' + Embates_batalha.unidade_ataque.substring(0,Embates_batalha.unidade_ataque.length - 2) + $(this).attr("id") + ' class="img_unidade" style=" background-image: url(../../img/sdcombate/' + nomeUnidadeImagem(Embates_batalha.unidade_ataque) + '.png)"></div>'); // cria um novo div com a imagem da unidade no lugar da defesa
        $("#" + Embates_batalha.unidade_ataque).remove();
        acao_ataque_defesa = "ataque"; // inicia nova rodada de ataque
        if (vez_jogador == 1) { // verifica a vez do jogador
          //alert ("Jogador 2, escolha a unidade com que deseja atacar !"); // solicita a celula que deseja usar para atacar
          vez_jogador = 2; // muda para a vez do proximo jogador
        } else {
          //alert ("Jogador 1, escolha a unidade com que deseja atacar !");
          vez_jogador = 1;
        };
        esconderExibirUnidades();
      }
    } else if (((etapa_partida === 3) && (acao_ataque_defesa == "ataque") && ($(this).children().attr("id").substring(0,1) == vez_jogador)) || ((acao_ataque_defesa == "defesa") && ($(this).children().attr("id").substring(0,1) != vez_jogador))){ // se está na etapa 3 e se cor da celula com mouse em cima ou transparente de acordo com o ataque e unidade do jogador ou defesa unidade do inimigo
      if (confirm("Jogador " + vez_jogador + ". Confirmar que selecionou a unidade " + $(this).children().attr("id").substring(1,$(this).children().attr("id").length - 2) + " ?")) { // mensagem para confirmar a unidade que clicou
        batalharUnidades($(this).children().attr("id")); // chama a função de luta passando o nome completo da unidade clicada
      }
    }
  });

  $('.celulaJogadorA').hover(function() { // mouse sobre a celula
    if ((etapa_partida === 2) && ($(this).children().length <= 0) && (((vez_jogador == 1) && (Jogador_1.lado_jogador == "jogadorA")) || ((vez_jogador == 2) && (Jogador_2.lado_jogador == "jogadorA"))) && (celula_selecionada != $(this).attr('id'))) { // se está na etapa 2 e se está na vez do jogador e se não for celula clicada
      $(this).css("background-color","rgb(255, 255, 0)").css("opacity", "0.3"); // muda cora para amarela
    }
  },function() { //tirar o mouse sobre a celula
    if (celula_selecionada != $(this).attr('id')) { // se não for celula clicada
      $(this).css("background-color","transparent").css("opacity", "1"); // limpa a cor da celula
    }
  });
  
  $('.celulaJogadorB').hover(function() { // mouse sobre a celula
    if ((etapa_partida === 2) && ($(this).children().length <= 0) && (((vez_jogador == 1) && (Jogador_1.lado_jogador == "jogadorB")) || ((vez_jogador == 2) && (Jogador_2.lado_jogador == "jogadorB"))) && (celula_selecionada != $(this).attr('id'))) { // se está na etapa 2 e se está na vez do jogador e se não for celula clicada
      $(this).css("background-color","rgb(255, 255, 0)").css("opacity", "0.3"); // muda cora para amarela
    }
  },function() { //tirar o mouse sobre a celula
    if (celula_selecionada != $(this).attr('id')) { // se não for celula clicada
      $(this).css("background-color","transparent").css("opacity", "1"); // limpa a cor da celula
    }
  });
  
  $('.celula').hover(function() {
    if ((etapa_partida === 3) && (acao_ataque_defesa == "ataque") && (vez_jogador == 1) && (celula_selecionada != $(this).attr('id')) && ($(this).children().attr('id').substring(0,1) == 1)) { // se está na etapa 3 e se está na vez do jogador e se não for celula clicada se está no ataque e se a unidade é do jogador
      $(this).css("background-color","rgb(0, 255, 255)").css("opacity", "0.3"); // muda cora para amarela
    }
    if ((etapa_partida === 3) && (acao_ataque_defesa == "ataque") && (vez_jogador == 2) && (celula_selecionada != $(this).attr('id')) && ($(this).children().attr('id').substring(0,1) == 2)) { // se está na etapa 3 e se está na vez do jogador e se não for celula clicada se está no ataque e se a unidade é do jogador
      $(this).css("background-color","rgb(0, 255, 0)").css("opacity", "0.3"); // muda cora para amarela
    }
    if ((etapa_partida === 3) && (acao_ataque_defesa == "defesa") && (vez_jogador == 2) && (celula_selecionada != $(this).attr('id')) && (($(this).children().length <= 0) || ($(this).children().attr('id').substring(0,1) != 2))) { // se está na etapa 3 e se está na vez do jogador e se não for celula clicada se está na defesa e se a unidade é do inimigo ou vazio
      $(this).css("background-color","rgb(0, 255, 0)").css("opacity", "0.3"); // muda cora para amarela
    }
    if ((etapa_partida === 3) && (acao_ataque_defesa == "defesa") && (vez_jogador == 1) && (celula_selecionada != $(this).attr('id')) && (($(this).children().length <= 0) || ($(this).children().attr('id').substring(0,1) != 1))) { // se está na etapa 3 e se está na vez do jogador e se não for celula clicada se está na defesa e se a unidade é do inimigo ou vazio
      $(this).css("background-color","rgb(0, 255, 255)").css("opacity", "0.3"); // muda cora para amarela
    }
  },function() {
      if (celula_selecionada != $(this).attr('id')) { // se não for celula clicada
      $(this).css("background-color","transparent").css("opacity", "1"); // limpa a cor da celula
    }
  });

  $('.jogador').click(function() { // lado jogador clicado
	  loginJogadores($(this).attr('id')); // chama a primeira função informando o identificador do lado clicado
  });
  
});

// começo das funções JavaScript

function loginJogadores(lado_jogador){ // etapa onde os jogadores acessam o jogo
  etapa_partida = 0; // indica a etapa atual
  if ((Jogador_1.id_jogador === 0) || (Jogador_2.id_jogador === 0)){ // verifica se já há alguem logado
    var nome = prompt("Qual o seu nome ?"); // pergunta o nome do jogador
    if ((nome === null)||(nome === "")) {
      return; // sai da função
    } else {
      jogadores_logados += 1; // adiciona o contador de jogadores logados
      nome += " (Jogador " + jogadores_logados + ")";
      if (jogadores_logados == 1) { // verifica qual lado do jogador foi clicado
        Jogador_1.id_jogador = jogadores_logados; // adiciona o id_jogador de acordo com o numero de jogadores logados
        Jogador_1.lado_jogador = lado_jogador; // salva o lado do jogador no Jogador 1
      } else {
        Jogador_2.id_jogador = jogadores_logados;
        Jogador_2.lado_jogador = lado_jogador; // salva o lado do jogador no Jogador 2
      }
      var cor = ""; // variavel para coloracao do time
      if (jogadores_logados == 1) { // verifica a quantidade de jogadores logados
        cor = "azul"; // define a cor de acordo com a quantidade de jogadores logados
      } else {
        cor = "verde";
      }
      if ((jogadores_logados == 1) && (lado_jogador == "jogadorA")) {
        $("#tabelaUnidadesA").css("color","rgb(0, 255, 255)");
        $('.celulaJogadorA').css("color","rgb(0, 255, 255)");
      } else if ((jogadores_logados == 1) && (lado_jogador == "jogadorB")) {
        $("#tabelaUnidadesB").css("color","rgb(0, 255, 255)");
        $('.celulaJogadorB').css("color","rgb(0, 255, 255)");
      } else if ((jogadores_logados == 2) && (lado_jogador == "jogadorA")) {
        $("#tabelaUnidadesA").css("color","rgb(0, 255, 0)");
        $('.celulaJogadorA').css("color","rgb(0, 255, 0)");
      } else if ((jogadores_logados == 2) && (lado_jogador == "jogadorB")) {
        $("#tabelaUnidadesB").css("color","rgb(0, 255, 0)");
        $('.celulaJogadorB').css("color","rgb(0, 255, 0)");
      }
      var nome_lado_jogador = "#nome" + capitalizeFirstLetter(lado_jogador); // cria o ID para alterar o nome do jogador exibido
      var img_lado_jogador = capitalizeFirstLetter(lado_jogador); // cria o ID para alterar o nome do jogador exibido
      $("#img" + img_lado_jogador).attr("src","../../img/sdcombate/" + cor + "_time.png"); // altera a imagem de acordo com a ordem de logon
      $(nome_lado_jogador).text(nome); // altera o nome do jogador exibido
      $("#ImgBandeira" + img_lado_jogador).attr("src","../../img/sdcombate/" + cor + "_bandeira.png"); // altera a imagem das unidades
      $("#ImgBomba" + img_lado_jogador).attr("src","../../img/sdcombate/" + cor + "_bomba.png");
      $("#ImgEspiao" + img_lado_jogador).attr("src","../../img/sdcombate/" + cor + "_espiao.png");
      $("#ImgSoldado" + img_lado_jogador).attr("src","../../img/sdcombate/" + cor + "_soldado.png");
      $("#ImgCabo_armeiro" + img_lado_jogador).attr("src","../../img/sdcombate/" + cor + "_cabo_armeiro.png");
      $("#ImgSargento" + img_lado_jogador).attr("src","../../img/sdcombate/" + cor + "_sargento.png");
      $("#ImgTenente" + img_lado_jogador).attr("src","../../img/sdcombate/" + cor + "_tenente.png");
      $("#ImgCapitao" + img_lado_jogador).attr("src","../../img/sdcombate/" + cor + "_capitao.png");
      $("#ImgMajor" + img_lado_jogador).attr("src","../../img/sdcombate/" + cor + "_major.png");
      $("#ImgCoronel" + img_lado_jogador).attr("src","../../img/sdcombate/" + cor + "_coronel.png");
      $("#ImgGeneral" + img_lado_jogador).attr("src","../../img/sdcombate/" + cor + "_general.png");
      $("#ImgMarechal" + img_lado_jogador).attr("src","../../img/sdcombate/" + cor + "_marechal.png");
      //alert("Bem vindo " + nome + " !"); // sauda o jogador pelo nome
      if ((Jogador_1.id_jogador !== 0) && (Jogador_2.id_jogador !== 0)) { // verifica se ambos os jogadores estão logados 
        iniciarPartida(); // aciona próxima etapa
      }
    }
  }
}

function iniciarPartida(){ // etapa onde os jogadores recebem suas unidades e decisão a ordem de jogo
  etapa_partida = 1; // indica a etapa atual
  Partida.id_partida += 1; // adiciona o contador de partidas
  Partida.id_jogador_1 = Jogador_1.id_jogador; // relaciona como id do jogador 1
  Partida.id_jogador_2 = Jogador_2.id_jogador; // relaciona como id do jogador 2
  vez_jogador = 1; // inicia como a vez do jogador 1
  exibirVezJogador();
  distribuirUnidades(); // aciona próxima etapa para o Jogador
}

function distribuirUnidades(){ // etapa onde os jogadores fazem sua distribuição inicial de unidades e confirmam sua distribuição
	etapa_partida = 2; // indica a etapa atual
  switch (unidade_selecionada) { // verifica qual a unidade a ser selecionada
    case "bandeira": // unidade selecionada anterior
      unidade_selecionada = "bomba"; // atribui o nome da nova unidade a variavel
      break; // finaliza a switch
    case "bomba":
      if ((vez_jogador == 1) && (Jogador_1.bomba_qtd > 1)) { // verifica a vez do jogador e se há quantidade a da unidade
        Jogador_1.bomba_qtd -= 1; // reduz a quantidade disponível a ser colocada
      } else if ((vez_jogador == 2) && (Jogador_2.bomba_qtd > 1)) {
        Jogador_2.bomba_qtd -= 1;
      } else {
        unidade_selecionada = "espiao"; // atribui o nome da unidade a variavel
      }
      break;
    case "espiao":
      unidade_selecionada = "soldado"; // atribui o nome da unidade a variavel
      break;
    case "soldado":
      if ((vez_jogador == 1) && (Jogador_1.soldado_qtd > 1)) { // verifica a vez do jogador e se há quantidade a da unidade
        Jogador_1.soldado_qtd -= 1; // reduz a quantidade disponível a ser colocada
      } else if ((vez_jogador == 2) && (Jogador_2.soldado_qtd > 1)) {
        Jogador_2.soldado_qtd -= 1;
      } else {
        unidade_selecionada = "cabo_armeiro"; // atribui o nome da unidade a variavel
      }
      break;
    case "cabo_armeiro":
      if ((vez_jogador == 1) && (Jogador_1.cabo_armeiro_qtd > 1)) { // verifica a vez do jogador e se há quantidade a da unidade
        Jogador_1.cabo_armeiro_qtd -= 1; // reduz a quantidade disponível a ser colocada
      } else if ((vez_jogador == 2) && (Jogador_2.cabo_armeiro_qtd > 1)) {
        Jogador_2.cabo_armeiro_qtd -= 1;
      } else {
        unidade_selecionada = "sargento"; // atribui o nome da unidade a variavel
      }
      break;
    case "sargento":
      if ((vez_jogador == 1) && (Jogador_1.sargento_qtd > 1)) {
        Jogador_1.sargento_qtd -= 1;
      } else if ((vez_jogador == 2) && (Jogador_2.sargento_qtd > 1)) {
        Jogador_2.sargento_qtd -= 1;
      } else {
        unidade_selecionada = "tenente"; // atribui o nome da unidade a variavel
      }
      break;
    case "tenente":
      if ((vez_jogador == 1) && (Jogador_1.tenente_qtd > 1)) {
        Jogador_1.tenente_qtd -= 1;
      } else if ((vez_jogador == 2) && (Jogador_2.tenente_qtd > 1)) {
        Jogador_2.tenente_qtd -= 1;
      } else {
        unidade_selecionada = "capitao"; // atribui o nome da unidade a variavel
      }
      break;
    case "capitao":
      if ((vez_jogador == 1) && (Jogador_1.capitao_qtd > 1)) {
        Jogador_1.capitao_qtd -= 1;
      } else if ((vez_jogador == 2) && (Jogador_2.capitao_qtd > 1)) {
        Jogador_2.capitao_qtd -= 1;
      } else {
        unidade_selecionada = "major"; // atribui o nome da unidade a variavel
      }
      break;
    case "major":
      if ((vez_jogador == 1) && (Jogador_1.major_qtd > 1)) {
        Jogador_1.major_qtd -= 1;
      } else if ((vez_jogador == 2) && (Jogador_2.major_qtd > 1)) {
        Jogador_2.major_qtd -= 1;
      } else {
        unidade_selecionada = "coronel"; // atribui o nome da unidade a variavel
      }
      break;
    case "coronel":
      if ((vez_jogador == 1) && (Jogador_1.coronel_qtd > 1)) {
        Jogador_1.coronel_qtd -= 1;
      } else if ((vez_jogador == 2) && (Jogador_2.coronel_qtd > 1)) {
        Jogador_2.coronel_qtd -= 1;
      } else {
        unidade_selecionada = "general"; // atribui o nome da unidade a variavel
      }
      break;
    case "general":
      unidade_selecionada = "marechal"; // atribui o nome da unidade a variavel
      break;
    case "marechal":
      if (vez_jogador == 1) {
        //alert("Jogador " + vez_jogador + " selecionou todas as unidades !"); // mensagem informando a conclusão de todas as unidades inseridas
        esconderExibirUnidades();
        vez_jogador = 2;
        exibirVezJogador();
        unidade_selecionada = "bandeira";
      } else {
        //alert("Ambos os jogadores selecionaram todas as unidades !"); // mensagem informando a conclusão de todas as unidades inseridas
        $('.celulaMeio').text(""); // limpa todos os textos das celulas
        etapa_partida = 3; // avança para a próxima etapa 3
        //alert("Jogador 1, Selecione a unidade com que deseja atacar !"); // mensagem para o Jogador 1 escolher com que unidade deseja atacar
        vez_jogador = 1; // muda para a vez do jogador 
        esconderExibirUnidades();
        return; // finaliza a função
      }
      break;
    default:
      unidade_selecionada = "bandeira"; // atribui o nome da unidade a variavel
      break;
  }
  //alert("Jogador " + vez_jogador + ". Escolha o local da sua " + unidade_selecionada + " !"); // mensagem para o usuário escolher o local da unidade
}

function batalharUnidades(unidadeAtaqueDefesa){ // etapa onde os jogadores jogam um por vez, andando com uma unidade e enfrentando ou não outra unidade, compara-se as unidades
  etapa_partida = 3;  // indica a etapa atual
  Embates_batalha.id_partida = Partida.id_partida; // relaciona o embate a partida
  Embates_batalha.turno += 1; // adiciona o contador de turno
  Embates_batalha.id_jogador_vez = vez_jogador;  // identifica o jogador da vez no embate
  if ((acao_ataque_defesa == "ataque") && ((unidadeAtaqueDefesa.substring(1,unidadeAtaqueDefesa.length - 2) == "bandeira") || (unidadeAtaqueDefesa.substring(1,unidadeAtaqueDefesa.length - 2) == "bomba"))){ // finaliza a função caso seja uma unidade que não anda
    // alert ("A unidade " + unidadeAtaqueDefesa.substring(1,unidadeAtaqueDefesa.length - 2) + " nao anda!");
    return;
  }
  if (acao_ataque_defesa == "ataque") { // verifica se está na vez de escolher a unidade de ataque 
    Embates_batalha.unidade_ataque = unidadeAtaqueDefesa; // salva a unidade de ataque nome completo. ex.: 1soldadoA1 (vez jogador + unidade + celula)
    celula_ataque = unidadeAtaqueDefesa.substring(1,unidadeAtaqueDefesa.length - 2); // salva somente o nome da unidade
    celula_ataque_numero = nomeUnidadeNumero(celula_ataque); // salva o equivalente numerico do nome da unidade
    if (vez_jogador == 1) { // verifica a vez do jogador
      //alert ("Jogador 1, escolha a unidade que deseja atacar !"); // solicita que seja escolhido a celula que deseja atacar
    } else {
      //alert ("Jogador 2, escolha a unidade que deseja atacar !");
    }
    acao_ataque_defesa = "defesa"; // aciona a escolha da celula que deseja atacar
  } else { // verifica se está na vez de escolher a unidade de defesa
    Embates_batalha.unidade_defesa = unidadeAtaqueDefesa; // salva a unidade de defesa nome completo. ex.: 1soldadoA1 (vez jogador + unidade + celula)
    celula_defesa = unidadeAtaqueDefesa.substring(1,unidadeAtaqueDefesa.length - 2); // salva somente o nome da unidade
    celula_defesa_numero = nomeUnidadeNumero(celula_defesa); // salva o equivalente numerico do nome da unidade
    if (celula_defesa == "bandeira") { // verifica se a unidade de defesa foi a bandeira
      //alert ("A bandeira foi capturada !"); // o jogo será encerrado
      $("#" + Embates_batalha.unidade_defesa.substring(Embates_batalha.unidade_defesa.length - 2,Embates_batalha.unidade_defesa.length)).append('<div id=' + Embates_batalha.unidade_ataque.substring(0,Embates_batalha.unidade_ataque.length - 2) + Embates_batalha.unidade_defesa.substring(Embates_batalha.unidade_defesa.length - 2,Embates_batalha.unidade_defesa.length) + ' class="img_unidade" style=" background-image: url(../../img/sdcombate/' + nomeUnidadeImagem(Embates_batalha.unidade_ataque) + '.png)"></div>'); // cria um novo div com a imagem da unidade no lugar da defesa
      $("#" + Embates_batalha.unidade_defesa).remove(); // remove unidade de defesa
      $("#" + Embates_batalha.unidade_ataque).remove(); // remove unidade de ataque
      etapa_partida = 4; // avança para próxima etapa
      concluirPartida(); // chama a próxima função de etapa
      return; // finaliza a função
    } else if ((celula_ataque == "cabo_armeiro") && (celula_defesa == "bomba")) { // verifica se é um cabo armeiro desarmando a bomba
      $("#" + Embates_batalha.unidade_defesa.substring(Embates_batalha.unidade_defesa.length - 2,Embates_batalha.unidade_defesa.length)).append('<div id=' + Embates_batalha.unidade_ataque.substring(0,Embates_batalha.unidade_ataque.length - 2) + Embates_batalha.unidade_defesa.substring(Embates_batalha.unidade_defesa.length - 2,Embates_batalha.unidade_defesa.length) + ' class="img_unidade" style=" background-image: url(../../img/sdcombate/' + nomeUnidadeImagem(Embates_batalha.unidade_ataque) + '.png)"></div>'); // cria um novo div com a imagem da unidade no lugar da defesa
      $("#" + Embates_batalha.unidade_defesa).remove(); // remove unidade de defesa
      $("#" + Embates_batalha.unidade_ataque).remove(); // remove unidade de ataque
      //alert ("A bomba foi desarmada !"); // mensagem informando que a bomba foi desarmada
    } else if ((celula_ataque != "cabo_armeiro") && (celula_defesa == "bomba")) { // verifica se não é um cabo a bomba explode
      $("#" + Embates_batalha.unidade_defesa).remove(); // remove unidade de defesa
      $("#" + Embates_batalha.unidade_ataque).remove(); // remove unidade de ataque
      //alert ("A bomba explodiu, e eliminou " + celula_ataque + " !"); // mensagem informando que a bomba eliminou o atacante
    } else if ((celula_ataque == "espiao") && (celula_defesa == "marechal")) { // verifica se é o espiao atacando o marechal
      $("#" + Embates_batalha.unidade_defesa.substring(Embates_batalha.unidade_defesa.length - 2,Embates_batalha.unidade_defesa.length)).append('<div id=' + Embates_batalha.unidade_ataque.substring(0,Embates_batalha.unidade_ataque.length - 2) + Embates_batalha.unidade_defesa.substring(Embates_batalha.unidade_defesa.length - 2,Embates_batalha.unidade_defesa.length) + ' class="img_unidade" style=" background-image: url(../../img/sdcombate/' + nomeUnidadeImagem(Embates_batalha.unidade_ataque) + '.png)"></div>'); // cria um novo div com a imagem da unidade no lugar da defesa
      $("#" + Embates_batalha.unidade_defesa).remove(); // remove unidade de defesa
      $("#" + Embates_batalha.unidade_ataque).remove(); // remove unidade de ataque
      //alert ("O " + celula_ataque + ", eliminou o " + celula_defesa + " !"); // mensagem informando que o ataque ganhou
    } else if ((celula_ataque_numero > celula_defesa_numero)) { // verifica se a unidade de ataque é mais forte que a defesa
      $("#" + Embates_batalha.unidade_defesa.substring(Embates_batalha.unidade_defesa.length - 2,Embates_batalha.unidade_defesa.length)).append('<div id=' + Embates_batalha.unidade_ataque.substring(0,Embates_batalha.unidade_ataque.length - 2) + Embates_batalha.unidade_defesa.substring(Embates_batalha.unidade_defesa.length - 2,Embates_batalha.unidade_defesa.length) + ' class="img_unidade" style=" background-image: url(../../img/sdcombate/' + nomeUnidadeImagem(Embates_batalha.unidade_ataque) + '.png)"></div>'); // cria um novo div com a imagem da unidade no lugar da defesa
      $("#" + Embates_batalha.unidade_defesa).remove(); // remove unidade de defesa
      $("#" + Embates_batalha.unidade_ataque).remove(); // remove unidade de ataque
      //alert ("O " + celula_ataque + ", eliminou o " + celula_defesa + " !"); 
    } else if ((celula_ataque_numero < celula_defesa_numero)) { // verifica se a unidade de ataque é mais fraca que a defesa
      $("#" + Embates_batalha.unidade_ataque).remove(); // remove unidade de ataque
      //alert ("O " + celula_defesa + ", eliminou o " + celula_ataque + " !"); // mensagem informando que a defesa ganhou
    } else { // caso ataque e defesa sejam iguais
      $("#" + Embates_batalha.unidade_defesa).remove(); // remove unidade de defesa
      $("#" + Embates_batalha.unidade_ataque).remove(); // remove unidade de ataque
      //alert ("Ouve empate e ambas as unidades foram eliminadas !"); // mensagem informando o empate
    }
    acao_ataque_defesa = "ataque"; // inicia nova rodada de ataque
    if (vez_jogador == 1) { // verifica a vez do jogador
      //alert ("Jogador 2, escolha a unidade com que deseja atacar !"); // solicita a celula que deseja usar para atacar
      vez_jogador = 2; // muda para a vez do proximo jogador
    } else {
      //alert ("Jogador 1, escolha a unidade com que deseja atacar !");
      vez_jogador = 1;
    }
    esconderExibirUnidades();
  }
}

function concluirPartida(){ // etapa onde os jogadores são apresentados ao relatorio de embates e são questionados pela revanche
  etapa_partida = 4; // indica a etapa atual
  Partida.vencedor = vez_jogador; // salva o vencedor da partida
  //alert ("O jogador " + vez_jogador + " ganhou !"); // mensagem de conclusão da partida
}

function capitalizeFirstLetter(string) { // coloca a primeira letra de uma string em maiuscula
    return string.charAt(0).toUpperCase() + string.slice(1); // primeiro pega a primeira letra, depois muda para maiuscula, depois une ao resto da string
}

function nomeUnidadeNumero(nome) { // verifica o nome informado e retorna o valor número correspondente.
  switch (nome) { //verifica o nome
    case "espiao": // se o nome é
      return 1; // retorna o número
    case "soldado":
      return 2;
    case "cabo_armeiro":
      return 3;
    case "sargento":
      return 4;
    case "tenente":
      return 5;
    case "capitao":
      return 6;
    case "major":
      return 7;
    case "coronel":
      return 8;
    case "general":
      return 9;
    case "marechal":
      return 10;
    default:
      return 0;
  }
}

function nomeUnidadeImagem(nome) {
  var img_cor_unidade = ""; // cria a variavel do nome da imagem
  if (nome.substring(0,1) == 1) { // verifica qual a vez do jogador
    img_cor_unidade = "azul_"; // define a cor da unidade do jogador referente ao jogador atual
  } else {
    img_cor_unidade = "verde_";
  }
  img_cor_unidade += nome.substring(1,nome.length - 2); // adiciona ao nome da imagem o tipo de unidade selecionada
  return img_cor_unidade;// retorna o nome da imagem
}

function esconderExibirUnidades() {
  $('#tPrinc').find('tr').each(function(indice, value){
    $(this).find('td').each(function(indice, value){
      $(this).children().children().remove();
      if ($(this).children().length <= 0) {
      } else if ((etapa_partida === 2) &&(vez_jogador == 1) && ($(this).children().attr('id').substring(0,1) == 1)) {
          $(this).children().append('<div class="img_unidade azul_inimigo" style=" background-image: url(../../img/sdcombate/azul_inimigo.png)"></div>');
      } else if ((etapa_partida === 2) &&(vez_jogador == 2) && ($(this).children().attr('id').substring(0,1) == 2)) {
        $(this).children().append('<div class="img_unidade verde_inimigo" style=" background-image: url(../../img/sdcombate/verde_inimigo.png)"></div>');
      } else if ((etapa_partida === 3) && (vez_jogador == 1) && ($(this).children().attr('id').substring(0,1) != 1)) {
          $(this).children().append('<div class="img_unidade azul_inimigo" style=" background-image: url(../../img/sdcombate/verde_inimigo.png)"></div>');
      } else if ((etapa_partida === 3) && (vez_jogador == 2) && ($(this).children().attr('id').substring(0,1) != 2)) {
        $(this).children().append('<div class="img_unidade verde_inimigo" style=" background-image: url(../../img/sdcombate/azul_inimigo.png)"></div>');
      }
    });
  });
  exibirVezJogador();
}

function exibirVezJogador() {
  if ((vez_jogador == 1) && (Jogador_1.lado_jogador == "jogadorA")) {
    $('#jogadorA').css("box-shadow","0 10px 10px 0 rgba(0, 255, 255, 0.2), 0 10px 10px 0 rgba(0, 255, 255, 0.2)");
    $('#jogadorB').css("box-shadow","0 10px 10px 0 rgba(0, 0, 0, 0.2), 0 10px 10px 0 rgba(0, 0, 0, 0.2)");
    $('#tPrinc').css("box-shadow","0 10px 10px 0 rgba(0, 255, 255, 0.2), 0 10px 10px 0 rgba(0, 255, 255, 0.2)");
  } else if ((vez_jogador == 1) && (Jogador_1.lado_jogador == "jogadorB")) {
    $('#jogadorA').css("box-shadow","0 10px 10px 0 rgba(0, 0, 0, 0.2), 0 10px 10px 0 rgba(0, 0, 0, 0.2)");
    $('#jogadorB').css("box-shadow","0 10px 10px 0 rgba(0, 255, 255, 0.2), 0 10px 10px 0 rgba(0, 255, 255, 0.2)");
    $('#tPrinc').css("box-shadow","0 10px 10px 0 rgba(0, 255, 255, 0.2), 0 10px 10px 0 rgba(0, 255, 255, 0.2)");
  } else if ((vez_jogador == 2) && (Jogador_2.lado_jogador == "jogadorA")) {
    $('#jogadorA').css("box-shadow","0 10px 10px 0 rgba(0, 255, 0, 0.2), 0 10px 10px 0 rgba(0, 255, 0, 0.2)");
    $('#jogadorB').css("box-shadow","0 10px 10px 0 rgba(0, 0, 0, 0.2), 0 10px 10px 0 rgba(0, 0, 0, 0.2)");
    $('#tPrinc').css("box-shadow","0 10px 10px 0 rgba(0, 255, 0, 0.2), 0 10px 10px 0 rgba(0, 255, 0, 0.2)");
  } else if ((vez_jogador == 2) && (Jogador_2.lado_jogador == "jogadorB")) {
    $('#jogadorA').css("box-shadow","0 10px 10px 0 rgba(0, 0, 0, 0.2), 0 10px 10px 0 rgba(0, 0, 0, 0.2)");
    $('#jogadorB').css("box-shadow","0 10px 10px 0 rgba(0, 255, 0, 0.2), 0 10px 10px 0 rgba(0, 255, 0, 0.2)");
    $('#tPrinc').css("box-shadow","0 10px 10px 0 rgba(0, 255, 0, 0.2), 0 10px 10px 0 rgba(0, 255, 0, 0.2)");
  }
}