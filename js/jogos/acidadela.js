var fichaAberta = 0;
var grandeDireita = false;
var pequenaDireita = false;
var valorHabilidade = 0;
var valorEnergia = 0;
var valorSorte = 0;
var valorMagia = 0;
var valorOuro = 0;
var qtdCopia = 0;
var qtdPercepcao = 0;
var qtdFogo = 0;
var qtdOuro = 0;
var qtdIlusao = 0;
var qtdLevitacao = 0;
var qtdSorte = 0;
var qtdEscudo = 0;
var qtdHabilidade = 0;
var qtdEnergia = 0;
var qtdForca = 0;
var qtdFraqueza = 0;
var consequenciaAtiva = false;
var statusAnel = "";
var maisMais = 0;
var carregando = 0;
var paginasLivro = [15,15,16,16,16,16,16,16,17,17,17,17,19,19,19,19,
		19,20,20,20,20,20,20,22,22,22,22,22,23,23,23,23,23,
		23,23,24,24,24,24,26,26,26,26,26,26,27,27,27,27,27,
		27,29,29,29,29,29,30,30,30,30,30,30,30,32,32,32,32,
		32,32,33,33,33,33,33,33,35,35,35,35,35,35,35,36,36,
		36,36,36,36,36,38,38,38,38,38,39,39,39,39,39,39,39,
		40,40,40,40,41,41,41,41,41,41,41,43,43,43,43,43,43,
		43,44,44,44,44,44,44,45,45,45,45,46,46,46,46,46,46,
		47,47,47,47,47,49,49,49,49,50,50,50,50,50,50,50,52,
		52,52,52,52,52,52,53,53,53,53,53,54,54,54,54,54,56,
		56,56,56,56,56,57,57,57,57,57,59,59,59,59,59,59,60,
		60,60,61,61,61,61,61,61,61,63,63,63,63,63,63,64,64,
		64,64,66,66,66,66,66,66,67,67,67,67,67,67,69,69,69,
		69,69,69,69,70,70,70,70,70,70,72,72,72,72,72,73,73,
		73,73,73,73,75,75,75,75,75,76,76,76,76,76,78,78,78,
		78,78,78,79,79,79,79,79,79,80,80,80,80,80,82,82,82,
		82,82,82,83,83,83,84,84,84,86,86,86,86,86,86,86,87,
		87,87,87,89,89,89,89,89,89,89,90,90,90,90,90,92,92,
		92,92,92,92,92,93,93,93,93,93,95,95,95,95,95,96,96,
		96,98,98,98,98,98,98,99,99,99,99,99,99,101,101,101,
		101,101,101,102,102,102,102,102,102,102,104,104,104,104,105,105,105,
		105,107,107,107,107,107,107,108,108,108,109,109,109,109,109,109,109,
		111,111,111,112,112,112,112,112,112,112,112,114,114,114,114,114,114,
		115,115,115,115,115,115,115,116,116,116,116];
var indiceLivro = [[261,230,20],[142,343],[327,59,236,286,366],[190,303],[40,361],[367],[268,116],[218],
		[31],[249],[36,262,128,152,16],[274,335,78],[302,215],[79,100],[245],[99,180],[93],[84,31],
		[363,254],[288,96],[6],[188],[169],[372,219],[206,133,239],[87,345,101,304],[206],[243,2],
		[271,131],[241],[169],[251],[213],[89,237],[364,246],[234],[229],[132,306],[208,248],
		[243,2],[257],[138,91,223,64,304],[14],[353,277],[166,313,253,97],[195,74],[8,173,259,209],
		[232,199],[255],[164],[301,159,280],[385,227],[194],[287,160,27,104],[249,10],
		[120,163,334,95],[150,233],[298,267,92,156],[140],[33,295,213],["Fim"],[140],[263,135],
		[286,3,366],["Fim"],[270],[143,226],[207,22,354],[193],[307,264,325],[218],["Fim"],
		[112,282],[377],[40],[191],[187,46,349,355],[324,24,277],[218],[199,232],[251],["Fim"],
		[245],[234],[395,322,248],[251],[64],[292,170,64,304],[237],[176,21,329],[140],[156],[169],
		[118],[367],[251],[13,281],[303,4,190,237],[52,38],[79,276],[62,64],[183,396,270],["Fim"],
		[266,310,54,25],[95],[218],[184],[73],[30],[251,288],[347,153],[212,367],[388,145],[218],
		[373],[210],[337],[273,198],["Fim"],[95],[257],[47],[211,35,283],[400],[209],[316],
		[53,387,240,194],[336,36,262,152],[260,370,237],[333],[348],[18,238,375],[206,82],
		[60,269,245],[326],[17,167,389],[383,14],[376,64],[346,244,28],[25,104],[156],[234],
		[360,226,184],[154,56],[80],[247,201,102,66],[260,129,370],["Fim"],[245,209,380],[374],
		[19,197],[180],["Fim"],[275,56],[65],[71,284,114],[199,232],[77],[323],[206],[106,390],[32],
		[95],["Fim"],[398,202],[13,281],[224,331],[328],[19,197,317,151],[292,64,304],[365,278,31],
		[26,289],[218],[268,116],[110,288],[127,21,329],[5,344],[17,265],[378,125,341],[99],[54,25],
		[85,395,322,248],[270],["Fim"],[13],[15,83,245],[279,314,115],[301,159,51],[319,130,43],
		[147],[119],[29],[211,123,35,283],["Fim"],[377],[45,13,281],[363],[177,290],["Fim"],
		[237,98],[270],["Fim"],[16,11],[73],[309,368],[182],[188],["Fim"],[156,362],[192,359],
		[123,35,283],[90],[235,209],[62],[136,41],[294,391,36],[293,57],[118,94],[95],[243,2],[127],
		[137,14],[138],[265],[15,245],[312,37,384,184],[234],[88,170,296],[50,164],[96,288],
		[196,243],[111,72],[374],[397,69],[245,269],[140],[169],[18,375,31],[379,82],[6],[77],
		[24,105,95],[352,2],[2,243],[161,390,47],[174],[234],[103],[392,231,55],["Fim"],
		[222,179,321],[229],[13,281],[197],[198,290],[65,155],[327,357,200],[140,366],[218],
		[34,299,237],[81,175,394],[180],[326],[177],[169],[310,54],[156],[268,210],[205,186,225],
		[185,23],[348,131],[242,95],[371,255,49],[353,277],[399,272],[165,202],[330,315,76,119],
		[171,365,31],[44,318,78,335],[323],[382,285,356],[112],["Fim"],[71,114],[185,23],[140],
		[160,27,25],[162,86,32],[340,214,304],[325,307,70,264],[328],[376,64,42],[374],[99],[213],
		[292],[316,2,75],[58,141],[237],[244,346],[323],[169],[147],[172,26,289,64],[64],[52,132],
		[177],[257],[15,245],[181,250,393,104],[178,61],[184],[13,281],[373],[191],[220,139,300],
		[19,197],[381,277],[333],[332,113,351],[269,339],[39,168,291,248],[386,144,338],[369],[177],
		[84,31],[366],[67,143,226],[21,221],[208,119],[265],[80,48],[14],[275],[342],[99,180],[400],
		[90],[134,149],[64],[209],["Fim"],[55,249],[7,5],[140],[243,2],[12],[207,22,354,68],[157],
		[218],[400],[203,16,216,11],[400],[188],[351],[146,185,23],[200],[148,256],[29],[229,184],
		[297,126],[58,156],[228,64,304],[174],[9,171,278,31],[140],[308,121],[15],["Fim"],
		[260,129,237],[177],[95],[148,256,358],[30,109,158],[263,135,63],["Fim"],[332,113,320,355],
		[209],[206],[213],[337],[285,356],[333,189],[252,107],[365,278,171],[204,108],[6],[157],
		[61,178,311],[350,122],[99],[196],[27,25],[251],[322,248,85],[183],[69,193],[79],[272],
		["Fim"]];
var aconteceIndice = [["nada"],["nada"],["nada"],["encanto","fogo"],["nada"],["nada"],["nada"],["encanto","copia"],["encanto","ilusao"],["nada"],["nada"],
		["nada"],["nada"],["teste","sorte","#opcao1","#opcao2"],

		["encanto-item","ouro","adiciona","Adaga de Arremesso Encantada, causa 2 de dano automatico"],["luta-fugir","GARK",7,11,4,"#opcao1"],

		["nada"],["nada"],["nada"],["nada"],["atributo","adiciona","sorte",2],["nada"],["nada"],["nada"],["nada"],["nada"],

		["atributo-duplo","retira","ouro","tudo","adiciona","sorte",1],["encanto","fogo"],["nada"],["luta","FERA DAS GARRAS",9,14],["nada"],["nada"],

		["encanto","levitacao"],["item-duplo","retira","Chave de Prata","adiciona","Chave Verde Cintilante"],["encanto","ilusao"],["encanto","ouro"],

		["item","retira","Velo de Ouro"],["nada"],["luta-especial","HOMEM-ARANHA",7,5,1,"#opcao1"],["nada"],["nada"],["nada"],

		["encanto-atributo","fraqueza","retira","energia",1],["nada"],["nada"],["encanto","fogo"],["nada"],["encanto","ilusao"],["nada"],["nada"],

		["nada"],["nada"],["item","retira","Punhado de Pequenas Amoras"],["nada"],["nada"],["nada"],["teste","sorte","#opcao1","#opcao2"],["nada"],

		["item","retira","Vidro contendo o Homem-Aranha"],["nada"],["fim"],["teste-atributo","sorte","ouro","adiciona",10],["nada"],["nada"],["fim"],
		["atributo-duplo","adiciona","energia","tudo","adiciona","sorte",1],["nada"],["nada"],["nada"],["encanto","levitacao"],
		["luta-tentaculo","TENTACULO",15,2,3,"fim"],["fim"],["luta-cobra","COBRA DE ESGOTO",6,7,"forca","adiciona","habilidade",3],["atributo","retira","energia",2],["nada"],["nada"],
		["nada"],["nada"],["encanto-item","levitacao","adiciona","Punhado de Pequenas Amoras"],["nada"],["nada"],["fim"],["nada"],["nada"],
		["encanto-atributo","fogo","retira","energia",2],["encanto","levitacao"],["encanto-atributo","fogo","retira","energia",2],
		["teste-especial",6,"#opcao1","retira","energia",1],
		["item-duplo","retira","Chave Verde Cintilante","adiciona","Vidro contendo o Homem-Aranha"],["nada"],
		["item-teste","retira","Escova de Cabelo Ornamentada","sorte","adiciona","Velo de Ouro"],["atributo","adiciona","energia",2],

		["item","adiciona","Essencia de Erva de Porco"],["encanto-atributo","forca","retira","energia",1],["nada"],["encanto","ouro"],

		["atributo","retira","energia",1],["nada"],["nada"],["nada"],["encanto-luta","copia","GaRGULA",9,10],["item","adiciona","Amuleto Encantado"],

		["fim"],["nada"],["item","adiciona","Vinho Encanto de Fogo"],["nada"],["nada"],["nada"],["encanto","escudo"],

		["teste","sorte","#opcao1","#opcao2"],["nada"],["nada"],["encanto","fraqueza"],["encanto","fogo"],["nada"],["encanto","forca"],["nada"],

		["nada"],["fim"],["atributo-duplo","adiciona","energia",2,"adiciona","sorte",3],["atributo","retira","energia",1],["nada"],

		["encanto","percepcao"],["nada"],["teste-atributo","sorte","retira","energia",5],["nada"],["nada"],["encanto","percepcao"],

		["atributo","retira","habilidade",1],["encanto","escudo"],["nada"],["nada"],["encanto-teste","forca","sorte","#opcao1","#opcao2"],["nada"],

		["nada"],["nada"],["nada"],["item","retira","Espelho de Prata"],["nada"],["encanto","ilusao"],["nada"],["nada"],["encanto","copia"],["nada"],

		["nada"],["nada"],["nada"],["fim"],["nada"],["atributo","retira","energia",2],["atributo","retira","energia",2],

		["encanto-luta","fraqueza","GARK",5,5],["fim"],["nada"],["nada"],["atributo","retira","sorte",1],["nada"],["encanto","fraqueza"],

		["encanto","fraqueza"],["item","retira","Miriade de Bolso"],["nada"],

		["encanto-luta-dupla","forca","MACACO-CACHORRO",7,4,"CACHORRO-MACACO",6,6],["atributo-duplo","retira","habilidade",1,"retira","energia",2],

		["fim"],["encanto","forca"],["teste-carne","habilidade",3,"retira","energia",2,"fim"],["teste","sorte","#opcao1","#opcao2"],

		["item","retira","Amuleto Encantado"],["nada"],["encanto-porta","forca",">3","#opcao1","retira","energia",2],["jogo-escolha"],["nada"],

		["encanto","ilusao"],["nada"],["nada"],["nada"],["nada"],["nada"],["nada"],

		["atributo-item","adiciona","ouro",6,"adiciona","Escova de Cabelo Ornamentada"],["encanto-sala","copia","sorte","retira","energia",4,"fim"],

		["atributo-triplo","retira","habilidade",1,"retira","energia",2,"retira","sorte",1],["atributo-escolha","retira","ouro"],["fim"],["nada"],

		["nada"],["encanto","percepcao"],["nada"],["nada"],["encanto-luta","copia","GOLEM",8,10],

		["luta-copia","COPIA JOGADOR","habilidade jogador","energia jogador"],["encanto","escudo"],["nada"],["fim"],["nada"],["nada"],["nada"],

		["teste","sorte","#opcao1","#opcao2"],["fim"],["nada"],["nada"],["fim"],["nada"],["nada"],["luta-aliado","HOMEM ALTO",8,8,"HOMEM BAIXO",7,6],

		["nada"],["nada"],["fim"],["nada"],["nada"],["encanto","ouro"],["nada"],["luta-tripla","ANaO",5,6,"GOBLIN",6,4,"ORCA",7,5],

		["item","retira","Essencia de Erva de Porco"],["nada"],["nada"],["nada"],["nada"],["nada"],

		["encanto-luta-dupla","escudo","PRIMEIRO GIRA",7,6,"SEGUNDO GIRA",6,5],["nada"],["nada"],["item","retira","Vidro contendo o Homem-Aranha"],

		["atributo","retira","energia",2],["nada"],["nada"],["nada"],["nada"],["nada"],["nada"],

		["teste-porta","sorte","#opcao1","retira","energia",1],["teste","sorte","#opcao1","#opcao2"],["atributo","retira","energia",5],["nada"],

		["atributo-itens","adiciona","ouro",8,"adiciona","Chave de Cobre","adiciona","Vidro de Unguento"],

		["item","retira","Punhado de Pequenas Amoras"],["nada"],["nada"],["nada"],["encanto-atributo","fogo","retira","energia",2],

		["modificador","retira","habilidade",3,"forca"],["nada"],["nada"],["encanto","ilusao"],["nada"],

		["encanto-luta-encanto","ilusao","CALACORM",9,8,"fraqueza",5],["nada"],["se","levitacao"],["nada"],["fim"],["nada"],["nada"],

		["atributo-triplo","adiciona","habilidade",1,"adiciona","energia",3,"adiciona","sorte",1],

		["atributo-duplo","retira","habilidade",1,"retira","adiciona",2],["teste","sorte","#opcao1","#opcao2"],["nada"],["nada"],["nada"],

		["encanto","levitacao"],["item","adiciona","Chave de Prata"],["nada"],["encanto-luta","copia","GARK",7,11],["nada"],

		["encanto-luta","forca","HOMEM-RINO",8,9],["nada"],["nada"],["nada"],["nada"],["nada"],["nada"],["atributo","retira",1],["encanto","escudo"],

		["nada"],["nada"],["luta-elfo","ELFO NEGRO",8,4,"fraqueza",5,"copia"],["nada"],["nada"],["jogo-pedra"],["encanto","levitacao"],["nada"],

		["nada"],["encanto-atributo","fogo","retira","energia",2],["fim"],["encanto","levitacao"],["nada"],["nada"],
		["item","retira","Vidro de Unguento"],["luta-dupla","MACACO-CACHORRO",7,4,"CACHORRO-MACACO",6,6],["nada"],["nada"],

		["item","retira","Vidro de Unguento"],["nada"],["encanto","escudo"],["nada"],["encanto","ilusao"],["item","retira","Chave de Cobre"],

		["nada"],["nada"],["item","retira","Chave de Prata"],["facadas","retira","energia","dado x2"],["encanto","forca"],["nada"],

		["luta-atributo","GOLEM",8,10,"retira","habilidade",1],["nada"],["item-atributo","retira","Vidro de Unguento","retira","energia",2],["nada"],

		["encanto-luta-atributo","fraqueza","HOMEM-RINO",4,7,"retira","energia",2],["nada"],

		["atributo-teste","adiciona","ouro",10,"sorte","#opcao1","#opcao2"],["nada"],["nada"],["item","retira","Espelho de Prata"],

		["fruta","adiciona","energia",2,"nao pode usar encanto"],["encanto","ilusao"],

		["item-duplo","adiciona","Espada Solar + 4","retira","Miriade de Bolso"],["teste","sorte","#opcao1","#opcao2"],

		["atributo-duplo","adiciona","sorte",1,"retira","energia",1],["nada"],["encanto-atributo","ilusao","retira","energia",2],

		["encanto","percepcao"],["nada"],["nada"],["item-duplo","adiciona","Espada Magica + 1","adiciona","Espelho de Prata"],["nada"],

		["luta","HOMEM-RINO",8,9],["nada"],["item","retira","Miriade de Bolso"],["nada"],["nada"],["luta-especial","HOMEM-ARANHA",7,5,1,"#opcao1"],

		["atributo-duplo","retira","habilidade",1,"retira","energia",3],["encanto","ilusao"],["atributo","retira","energia",2],["nada"],["nada"],
		["luta-fugir","GARK",7,11,4,"#opcao1"],["luta-anel","BALTHUS DIRE",12,19,"sem anel",2],["nada"],["nada"],["item","retira","Espelho de Prata"],

		["encanto","escudo"],["fim"],["nada"],["nada"],["encanto","fraqueza"],["luta-dupla","PRIMEIRO GIRA",7,6,"SEGUNDO GIRA",6,5],

		["item","retira","Espelho de Prata"],["nada"],["encanto","copia"],["nada"],["luta","BALTHUS DIRE",12,19],["nada"],

		["luta-item","BALTHUS DIRE",12,19,"adiciona","Espada Encantada + 2"],["nada"],["nada"],

		["atributo-duplo","adiciona","energia",2,"adiciona","sorte",1],["nada"],["nada"],["nada"],["encanto-luta","copia","HIDRA",10,17],

		["teste","sorte","#opcao1","#opcao2"],["nada"],["encanto","levitacao"],["nada"],["jogo-faca"],["nada"],["encanto","escudo"],

		["atributo-item","adiciona","ouro",28,"adiciona","Adaga de Arremesso Encantada, causa 2 de dano automatico"],["fim"],

		["atributo","retira","energia",2],["nada"],["encanto","escudo"],["nada"],["nada"],["nada"],["fim"],["nada"],["atributo","retira","energia",4],

		["encanto","levitacao"],["nada"],["teste-anel","sorte","sem anel","com anel"],["nada"],["atributo","retira","energia",2],

		["item-laco","retira","Miriade de Bolso","no dado 5 ou 6","#opcao1","#opcao2"],["atributo","adiciona","energia",2],["nada"],

		["item","retira","Espelho de Prata"],["encanto","fraqueza"],["nada"],["teste","sorte","#opcao1","#opcao2"],["atributo","retira","ouro",3],

		["item","retira","Chave de Cobre"],["encanto","percepcao"],["nada"],["encanto-atributo","ilusao","retira","energia",2],

		["item-escolha","retira"],["atributo","adiciona","energia",2],["encanto","forca"],["encanto-luta","ilusao","ELFO NEGRO",4,4],["fim"]];
$(document).ready(function() {
	$('div').attr('unselectable', 'on').css('user-select', 'none').on('selectstart', false);
	$('#loader').hide();
	$('.ficha-completa').hide();
	$('.inimigos').hide();
	$('.pegavel').hide();
	$('.dados').hide();
	$('#executar').hide();
	$('.opcoes').hide();
	$('.criacao').hide();
	$('#voltar').hide();
	$('.mAventura').hide();
	$('.mLeitura').hide();
	$('.mDesenvolvedor').hide();
	$('.maismenos-encantos').hide();
	carregandoPagina(1500);
	$('#encantos').click(function() {
		if ( fichaAberta != 1 ) {
			fichaAberta = 1;
			$('.comecar').hide();
			$('.ficha-completa').hide();
			$('#ficha-encantos').show();
		} else {
			$('.comecar').show();
			$('#ficha-encantos').hide();
			fichaAberta = 0;
		}
	});
	$('#equipamentos').click(function() {
		if ( fichaAberta != 2 ) {
			fichaAberta = 2;
			$('.comecar').hide();
			$('.ficha-completa').hide();
			$('#ficha-equipamentos').show();
		} else {
			$('.comecar').show();
			$('#ficha-equipamentos').hide();
			fichaAberta = 0;
		}
	});
	$('#inimigos').click(function() {
		if ( fichaAberta != 3 ) {
		fichaAberta = 3;
			$('.comecar').hide();
			$('.ficha-completa').hide();
			$('#ficha-inimigos').show();
		} else {
			$('.comecar').show();
			$('#ficha-inimigos').hide();
			fichaAberta = 0;
		}
	});
	$('#completo').click(function() {
		if ( fichaAberta != 4 ) {
			fichaAberta = 4;
			$('.comecar').hide();
			$('.ficha-completa').show();
		} else {
			$('.comecar').show();
			$('.ficha-completa').hide();
			fichaAberta = 0;
		}
	});
	$('.modoAventura').click(function() {
		$('.mAventura').show();
		$(this).hide();
		$('.modoLeitura').hide();
		$('.modoDesenvolvedor').hide();
	});
	$('.modoLeitura').click(function() {
		$('.mLeitura').show();
		$(this).hide();
		$('.modoAventura').hide();
		$('.modoDesenvolvedor').hide();
	});
	$('.modoDesenvolvedor').click(function() {
		if(prompt("Senha: ") === "Leonardo") {
			$('.mDesenvolvedor').show();
			$(this).hide();
			$('.modoAventura').hide();
			$('.modoLeitura').hide();
		};
	});
	$('#retornar').click(function() {
		retornarPagina();
	});
	$('#avancar').click(function() {
		avancarPagina();
	});
	$('#capa').click(function() {
		primeiraPagina();
	});
	$('#regras').click(function() {
		mostrarRegras();
	});
	$('#voltar').click(function() {
		voltarPagina();
	});
	$('#irPagina').click(function() {
		var pagina = prompt("Qual a página que você deseja ir (máximo 117)?");
    		if ((pagina === null)||(pagina === "")) {
       			return;
    		} else {
			irPagina(parseInt(pagina));
		};
	});	
	$('#irIndice').click(function() {
		var indice = prompt("Qual o indice que você deseja ir (máximo 400)?");
		if (indice > 400) {
			alert("Indice maior que 400, portanto inválido!");
			return;
		} else 	if ((indice === null)||(indice === "")) {
       			return;
    		} else {
			irIndice(parseInt(indice));
		};
	});		
	$('.novaAventura').click(function() {
		comecarAventura();
	});
	$('#mudarNome').click(function() {
		var nome = prompt("Qual é o nome do seu personagem?");
    		if ((nome === null)||(nome === "")) {
       			return;
    		} else {
			$('.valor-nome').text(nome);
		};
	});
	$('#rolarNovamente').click(function() {
		criarPersonagem();
	});
	$('#confirmarPersonagem').click(function() {
		confirmarPersonagem();
	});
	$('#rolar-1dado').click(function() {
		rolarUmDado();
	});	
	$('#rolar-2dados').click(function() {		
		rolarDoisDados();
	});
	$('#executar').click(function() {
		executarIndice(parseInt($('#indice').text()));
	});
	$('#opcao1').click(function() {
		irIndice(botaoIndice(this));
	});
	$('#opcao2').click(function() {
		irIndice(botaoIndice(this));
	});
	$('#opcao3').click(function() {
		irIndice(botaoIndice(this));
	});
	$('#opcao4').click(function() {
		irIndice(botaoIndice(this));
	});
	$('#opcao5').click(function() {
		irIndice(botaoIndice(this));
	});
   	$('#pagina-direita').click(function() {                              //click pagina direita
		if(!grandeDireita && !pequenaDireita) {	                       //paginas normais
			$('#pagina-esquerda').animate({ 
				width: '-=40%'                                   //pagina esquerda diminui
			});
			$(this).animate({ 
           			width: '+=40%'                                   //pagina direita aumenta
			});
			grandeDireita = true;
			pequenaDireita = false;
		} else if(!grandeDireita && pequenaDireita) {                   //pagina direita pequena
			$('#pagina-esquerda').animate({
				width: '-=40%'                                   //pagina esquerda diminui
			});
			$(this).animate({
           			width: '+=40%'                                   //pagina direita aumenta
			});
			grandeDireita = false;
			pequenaDireita = false;
		} else {                                                       //pagina direita grande
			$('#pagina-esquerda').animate({
				width: '+=40%'                                   //pagina esquerda aumenta
			});
			$(this).animate({
           			width: '-=40%'                                   //pagina direita diminui
			});
			grandeDireita = false;
			pequenaDireita = false;
		}		
   	}); 	
   	$('#pagina-esquerda').click(function() {                              //click pagina esquerda
		if(!grandeDireita && !pequenaDireita) {	                       //paginas normais
			$('#pagina-direita').animate({ 
				width: '-=40%'                                   //pagina direita diminui
			});
			$(this).animate({ 
           			width: '+=40%'                                   //pagina esquerda aumenta
			});
			grandeDireita = false;
			pequenaDireita = true;
		} else if(!grandeDireita && pequenaDireita) {                   //pagina direita pequena
			$('#pagina-direita').animate({
				width: '+=40%'                                    //pagina direita aumenta
			});
			$(this).animate({
           			width: '-=40%'                                   //pagina esquerda diminui
			});
			grandeDireita = false;
			pequenaDireita = false;
		} else {                                                       //pagina direita grande
			$('#pagina-direita').animate({
				width: '-=40%'                                   //pagina direita diminui
			});
			$(this).animate({
           			width: '+=40%'                                   //pagina esquerda aumenta
			});
			grandeDireita = false;
			pequenaDireita = false;
		}

   	});  	
	$('#pagina-esquerda').dblclick(function() {
		retornarPagina();
   	});$('#pagina-direita').dblclick(function() {
		avancarPagina();
   	});
	$('#menos-Copia').click(function() {
		aumentaDiminuiEncanto(this);
	});
	$('#mais-Copia').click(function() {
		aumentaDiminuiEncanto(this);
	});
	$('#menos-Percepcao').click(function() {
		aumentaDiminuiEncanto(this);
	});
	$('#mais-Percepcao').click(function() {
		aumentaDiminuiEncanto(this);
	});
	$('#menos-Fogo').click(function() {
		aumentaDiminuiEncanto(this);
	});
	$('#mais-Fogo').click(function() {
		aumentaDiminuiEncanto(this);
	});
	$('#menos-Ouro').click(function() {
		aumentaDiminuiEncanto(this);
	});
	$('#mais-Ouro').click(function() {
		aumentaDiminuiEncanto(this);
	});
	$('#menos-Ilusao').click(function() {
		aumentaDiminuiEncanto(this);
	});
	$('#mais-Ilusao').click(function() {
		aumentaDiminuiEncanto(this);
	});
	$('#menos-Levitacao').click(function() {
		aumentaDiminuiEncanto(this);
	});
	$('#mais-Levitacao').click(function() {
		aumentaDiminuiEncanto(this);
	});
	$('#menos-Sorte').click(function() {
		aumentaDiminuiEncanto(this);
	});
	$('#mais-Sorte').click(function() {
		aumentaDiminuiEncanto(this);
	});
	$('#menos-Escudo').click(function() {
		aumentaDiminuiEncanto(this);
	});
	$('#mais-Escudo').click(function() {
		aumentaDiminuiEncanto(this);
	});
	$('#menos-Habilidade').click(function() {
		aumentaDiminuiEncanto(this);
	});
	$('#mais-Habilidade').click(function() {
		aumentaDiminuiEncanto(this);
	});
	$('#menos-Energia').click(function() {
		aumentaDiminuiEncanto(this);
	});
	$('#mais-Energia').click(function() {
		aumentaDiminuiEncanto(this);
	});
	$('#menos-Forca').click(function() {
		aumentaDiminuiEncanto(this);
	});
	$('#mais-Forca').click(function() {
		aumentaDiminuiEncanto(this);
	});
	$('#menos-Fraqueza').click(function() {
		aumentaDiminuiEncanto(this);
	});
	$('#mais-Fraqueza').click(function() {
		aumentaDiminuiEncanto(this);
	});
	$('#encanto-Sorte').click(function() {
		var nomeEncanto = "sorte";
		var acaoAtributo = "adiciona";
		var nomeAtributo = "sorte";
		var qtdAtributo = Math.trunc(parseInt($('.inicial-sorte').text())/2);
		acontecerIndice_encanto_atributo(nomeEncanto,acaoAtributo,nomeAtributo,qtdAtributo);
	});
	$('#encanto-Habilidade').click(function() {
		var nomeEncanto = "habilidade";
		var acaoAtributo = "adiciona";
		var nomeAtributo = "habilidade";
		var qtdAtributo = Math.trunc(parseInt($('.inicial-habilidade').text())/2);
		acontecerIndice_encanto_atributo(nomeEncanto,acaoAtributo,nomeAtributo,qtdAtributo);
	});
	$('#encanto-Energia').click(function() {
		var nomeEncanto = "energia";
		var acaoAtributo = "adiciona";
		var nomeAtributo = "energia";
		var qtdAtributo = Math.trunc(parseInt($('.inicial-energia').text())/2);
		acontecerIndice_encanto_atributo(nomeEncanto,acaoAtributo,nomeAtributo,qtdAtributo);
	});
});
function retornarPagina() {
	$('.comecar').show();
	$('.ficha-completa').hide();
	var imgEsquerda = $('#img-esquerda').attr('src');
	var paginaEsquerda = parseInt(imgEsquerda.substring(23,27)) - 2;
	if (paginaEsquerda >= 0) {	
		var novaImgEsquerda = preencheZeros(paginaEsquerda.toString());
		var novaImgDireita = paginaEsquerda + 1;
		novaImgDireita = preencheZeros(novaImgDireita.toString());
		$('#img-esquerda').attr('src','../../img/acidadela/'+novaImgEsquerda+'.jpg');
		$('#img-direita').attr('src','../../img/acidadela/'+novaImgDireita+'.jpg');
		$('#paginacao').text(novaImgEsquerda + ' - ' + novaImgDireita);
	};
	carregandoPagina(1500);
};
function avancarPagina() {
	$('.comecar').show();
	$('.ficha-completa').hide();
	var imgEsquerda = $('#img-esquerda').attr('src');
	var paginaEsquerda = parseInt(imgEsquerda.substring(23,27)) + 2;
	if (paginaEsquerda <= 116) {	
		var novaImgEsquerda = preencheZeros(paginaEsquerda.toString());
		var novaImgDireita = paginaEsquerda + 1;
		novaImgDireita = preencheZeros(novaImgDireita.toString());
		$('#img-esquerda').attr('src','../../img/acidadela/'+novaImgEsquerda+'.jpg');
		$('#img-direita').attr('src','../../img/acidadela/'+novaImgDireita+'.jpg');
		$('#paginacao').text(novaImgEsquerda + ' - ' + novaImgDireita);
	};
	carregandoPagina(1500);
};
function primeiraPagina() {
	$('.comecar').show();
	$('.ficha-completa').hide();
	$('#img-esquerda').attr('src','../../img/acidadela/0000.jpg');
	$('#img-direita').attr('src','../../img/acidadela/0001.jpg');
	$('#paginacao').text('0000 - 0001');
	carregandoPagina(1500);	
};
function mostrarRegras() {
	$('.comecar').show();
	$('#avancar').show();
	$('#retornar').show();
	$('.ficha-completa').hide();
	$('#img-esquerda').attr('src','../../img/acidadela/0006.jpg');
	$('#img-direita').attr('src','../../img/acidadela/0007.jpg');
	$('#paginacao').text('0006 - 0007');
	carregandoPagina(1500);
};
function preencheZeros(numero) {  
        while (numero.length < 4) { 
		numero = "0" + numero;
	};
	return numero;
};
function rolarDado() {
	var dadoAleatorio = Math.random();
	if (dadoAleatorio < 0.16) {
		return 1;
	} else if(dadoAleatorio <= 0.32) {
		return 2;
	} else if(dadoAleatorio <= 0.48) {
		return 3;
	} else if(dadoAleatorio <= 0.64) {
		return 4;
	} else if(dadoAleatorio <= 0.80) {
		return 5;
	} else {
		return 6;
	};
};
function rolarUmDado() {
	var dado1 = rolarDado();
	$('#img-1dado').attr('src','./../../img/dados/'+dado1+'.jpg');
	$('#img-2dado').attr('src','./../../img/dados/0.jpg');
	return dado1;
};
function rolarDoisDados() {
	var dado1 = rolarDado();
	var dado2 = rolarDado();
	$('#img-1dado').attr('src','./../../img/dados/'+dado1+'.jpg');
	$('#img-2dado').attr('src','./../../img/dados/'+dado2+'.jpg');
	return dado1 + dado2;
};
function criarPersonagem() {
	$('.imgDados').show();
	valorHabilidade = rolarUmDado()+6;
	$('.inicial-habilidade').text(valorHabilidade);
	$('.valor-habilidade').text($('.inicial-habilidade').text());
	valorEnergia = rolarDoisDados()+12;
	$('.inicial-energia').text(valorEnergia);
	$('.valor-energia').text($('.inicial-energia').text());
	valorSorte = rolarUmDado()+6;
	$('.inicial-sorte').text(valorSorte);
	$('.valor-sorte').text($('.inicial-sorte').text());
	valorMagia = rolarDoisDados()+6;
	$('.inicial-magia').text(valorMagia);
	$('.valor-magia').text($('.inicial-magia').text());
	valorOuro = 0;
	$('.inicial-ouro').text(valorOuro);
	$('.valor-ouro').text($('.inicial-ouro').text());
	alert("Você deve escolher seus Encantos Mágicos de acordo com a sua quantidade de mágia que é "+valorMagia+"!");	
};
function comecarAventura() {
	var nome = prompt("Qual é o nome do seu personagem?");
    	if ((nome === null)||(nome === "")) {
       		return;
    	} else {
		$('.valor-nome').text(nome);
	};
	$('.comecar').hide();
	$('.novaAventura').hide();
	$('.opcoes').hide();
	$('.ficha-completa').show();
	$('.criacao').show();
	$('.maismenos-encantos').show();
	criarPersonagem();
};
function aumentaDiminuiEncanto(botao) {
	var atributo = $(botao).attr('id');
	if ($(botao).text() === "+") {
		atributo = atributo.substring(5,atributo.length);
        } else {
		atributo = atributo.substring(6,atributo.length);
	};
	nomeEncanto = '#qtd-'+atributo;	
	if (($(botao).text() === "+") && (parseInt($('#qtd-Total').text()) < valorMagia)) {
		switch (atributo) {
    			case "Copia":
				qtdCopia++;
				break;
    			case "Percepcao":
				qtdPercepcao++;
				break;
    			case "Fogo":
				qtdFogo++;
				break;
    			case "Ouro":
				qtdOuro++;
				break;
    			case "Ilusao":
				qtdIlusao++;
				break;
    			case "Levitacao":
				qtdLevitacao++;
				break;
    			case "Sorte":
				qtdSorte++;
				break;
    			case "Escudo":
				qtdEscudo++;
				break;
    			case "Habilidade":
				qtdHabilidade++;
				break;
    			case "Energia":
				qtdEnergia++;
				break;
    			case "Forca":
				qtdForca++;
				break;
    			default:
				qtdFraqueza++;
				break;
		};
		if ($('#indice').text() === "365") {
			maisMais++;
		};
		if (maisMais > 1){
			$('.botaomais').hide();
			$('#completo').click();
		};
		$(nomeEncanto).text(parseInt($(nomeEncanto).text()) + 1);
		$('#qtd-Total').text(parseInt($('#qtd-Total').text()) + 1);
	} else	if (($(botao).text() === "-") && ($(nomeEncanto).text() > 0) && ($('#qtd-Total').text() > 0)) {
		switch (atributo) {
    			case "Copia":
				qtdCopia--;
				break;
    			case "Percepcao":
				qtdPercepcao--;
				break;
    			case "Fogo":
				qtdFogo--;
				break;
    			case "Ouro":
				qtdOuro--;
				break;
    			case "Ilusao":
				qtdIlusao--;
				break;
    			case "Levitacao":
				qtdLevitacao--;
				break;
    			case "Sorte":
				qtdSorte--;
				break;
    			case "Escudo":
				qtdEscudo--;
				break;
    			case "Habilidade":
				qtdHabilidade--;
				break;
    			case "Energia":
				qtdEnergia--;
				break;
    			case "Forca":
				qtdForca--;
				break;
    			default:
				qtdFraqueza--;
				break;
		}
		$(nomeEncanto).text(parseInt($(nomeEncanto).text()) - 1);
		$('#qtd-Total').text(parseInt($('#qtd-Total').text()) - 1);
	};
};
function confirmarPersonagem() {
	if ($('.valor-nome').text().length === 0) {
		alert('Você precisa escolher um nome!');
		$('.valor-nome').text(prompt("Qual é o nome do seu personagem?"));
	} else 	if (parseInt($('#qtd-Total').text()) < parseInt($('.inicial-magia').text())) {
		alert('Você precisa escolher todos os seus encantos!');
	} else {
		$('.comecar').show();
		$('.novaAventura').show();
		$('.ficha-completa').hide();
		$('.criacao').hide();
		$('.imgDados').hide();
		$('.maismenos-encantos').hide()
		$('#encanto-Sorte').addClass("botao");
		$('#encanto-Habilidade').addClass("botao");
		$('#encanto-Energia').addClass("botao");
		irIndice(0);
	};
};
function voltarPagina() {
	irPagina(paginasLivro[$('#indice').text()]);
};
function botaoIndice(opcao) {
	if ($(opcao).text() === "Agora vire a página") {
		$('#opcao1').hide();
		return 1;
	} else if (!($(opcao).text().substring(($(opcao).text().length - 3),$(opcao).text().length) === "Fim")) {
		if (($(opcao).text().substring(0,2) === "Vá") && ($(opcao).text().length < 10)) {
			return  $(opcao).text().substring(($(opcao).text().length - 1),9);
		} else if (($(opcao).text().substring(0,5) === "Volte") && ($(opcao).text().length < 13)) {
			return  $(opcao).text().substring(($(opcao).text().length - 1),12);
		} else {	
			return  $(opcao).text().substring(($(opcao).text().length - 3),14);
		};
	} else {
		$('.opcoes').hide();
	};
};
function irPagina(paginaDestino) {
	$('.comecar').show();	
	$('.ficha-completa').hide();
	if (paginaDestino > 117) {
		alert("Página maior que 117, portanto inválido!");
	} else if (paginaDestino % 2 === 0) {
		paginaDestino;
	} else {
		paginaDestino--;
	};
	if (paginaDestino <= 116) {
		var novaImgEsquerda = preencheZeros(paginaDestino.toString());
		var novaImgDireita = paginaDestino + 1;
		novaImgDireita = preencheZeros(novaImgDireita.toString());
		$('#img-esquerda').attr('src','../../img/acidadela/'+novaImgEsquerda+'.jpg');
		$('#img-direita').attr('src','../../img/acidadela/'+novaImgDireita+'.jpg');
		$('#paginacao').text(novaImgEsquerda + ' - ' + novaImgDireita);
	};
	carregandoPagina(1500);
};
function irIndice(indiceDestino) {
	$('#voltar').show();
	$('.comecar').show();
	$('.novaAventura').show();
	$('#executar').show();
	$('.ficha-completa').hide();
	$('#indice').text(indiceDestino);
	$('.opcoes').hide();
	indiceDestino--;
	var paginaDestino = paginasLivro[indiceDestino];
	if (indiceDestino === -1) {
		carregandoPagina(1500);
		$('#executar').hide();
		$('#opcao1').show();
		$('#opcao1').text("Agora vire a página");
		$('#img-esquerda').attr('src','../../img/acidadela/0012.jpg');
		$('#img-direita').attr('src','../../img/acidadela/0013.jpg');
		$('#paginacao').text('0012 - 0013');
	} else {
		irPagina(paginaDestino);
	};
};
function executarIndice(indiceDestino) {
	indiceDestino--;
	mostrarOpcoes(indiceDestino);
	acontecerIndice(indiceDestino);
};
function mostrarOpcoes(indiceAtual) {
	if (indiceAtual >= 0) {
		for(i = 0; i <= indiceLivro[indiceAtual].length; i++) {
			var botaoOpcao = '#opcao' + (i + 1);
			if (indiceLivro[indiceAtual][i] > indiceAtual) {
				$(botaoOpcao).text("Vá para " + indiceLivro[indiceAtual][i]);
			} else {
				$(botaoOpcao).text("Volte para " + indiceLivro[indiceAtual][i]);
			};
			$(botaoOpcao).show();
		};
		for(i = 5; i > indiceLivro[indiceAtual].length; i--) {
			var botaoOpcao = '#opcao' + i;
			$(botaoOpcao).hide();
		};
		$('#executar').hide();
	};
};
function acontecerIndice(indice) {
	var tipo = aconteceIndice[indice][0];
	switch (tipo) {
    		case "nada":
        		break;
    		case "jogo-escolha":
			acontecerIndice_jogo_escolha();
       			break;
    		case "jogo-pedra":
			acontecerIndice_jogo_pedra();
       			break;
    		case "jogo-faca":
			acontecerIndice_jogo_faca();
       			break;
    		case "encanto":
			acontecerIndice_encanto(aconteceIndice[indice][1]);
       			break;
    		case "encanto-atributo":
			acontecerIndice_encanto_atributo(aconteceIndice[indice][1],aconteceIndice[indice][2],aconteceIndice[indice][3],
							 aconteceIndice[indice][4]);
       			break;
    		case "encanto-item":
			acontecerIndice_encanto_item(aconteceIndice[indice][1],aconteceIndice[indice][2],aconteceIndice[indice][3]);
       			break;
    		case "encanto-luta":
			acontecerIndice_encanto_luta(aconteceIndice[indice][1],aconteceIndice[indice][2],aconteceIndice[indice][3],aconteceIndice[indice][4]);
       			break;
    		case "encanto-luta-atributo":
			acontecerIndice_encanto_luta_atributo(aconteceIndice[indice][1],aconteceIndice[indice][2],aconteceIndice[indice][3],
						              aconteceIndice[indice][4],aconteceIndice[indice][5],aconteceIndice[indice][6],
							      aconteceIndice[indice][7]);
       			break;
    		case "encanto-luta-encanto":
			acontecerIndice_encanto_luta_encanto(aconteceIndice[indice][1],aconteceIndice[indice][2],aconteceIndice[indice][3],
						             aconteceIndice[indice][4],aconteceIndice[indice][5],aconteceIndice[indice][6]);
       			break;
    		case "encanto-luta-dupla":
			acontecerIndice_encanto_luta_dupla(aconteceIndice[indice][1],aconteceIndice[indice][2],aconteceIndice[indice][3],
						           aconteceIndice[indice][4],aconteceIndice[indice][5],aconteceIndice[indice][6],
							   aconteceIndice[indice][7]);
       			break;
    		case "encanto-teste":
			acontecerIndice_encanto_teste(aconteceIndice[indice][1],aconteceIndice[indice][2],aconteceIndice[indice][3],
						      aconteceIndice[indice][4]);
       			break;
    		case "encanto-sala":
			acontecerIndice_encanto_sala(aconteceIndice[indice][1],aconteceIndice[indice][2],aconteceIndice[indice][3],
						     aconteceIndice[indice][4],aconteceIndice[indice][5],aconteceIndice[indice][6]);
       			break;
    		case "encanto-porta":
			acontecerIndice_encanto_porta(aconteceIndice[indice][1],aconteceIndice[indice][2],aconteceIndice[indice][3],
						      aconteceIndice[indice][4],aconteceIndice[indice][5],aconteceIndice[indice][6]);
       			break;
    		case "teste":
			acontecerIndice_teste(aconteceIndice[indice][1],aconteceIndice[indice][2],aconteceIndice[indice][3]);
       			break;
    		case "teste-anel":
			acontecerIndice_teste_anel(aconteceIndice[indice][1],aconteceIndice[indice][2],aconteceIndice[indice][3]);
       			break;
   		case "teste-atributo":
			acontecerIndice_teste_atributo(aconteceIndice[indice][1],aconteceIndice[indice][2],aconteceIndice[indice][3],
						       aconteceIndice[indice][4]);
       			break;
   		case "teste-especial":
			acontecerIndice_teste_especial(aconteceIndice[indice][1],aconteceIndice[indice][2],aconteceIndice[indice][3],
						       aconteceIndice[indice][4],aconteceIndice[indice][5]);
       			break;
   		case "teste-carne":
			acontecerIndice_teste_carne(aconteceIndice[indice][1],aconteceIndice[indice][2],aconteceIndice[indice][3],
						    aconteceIndice[indice][4],aconteceIndice[indice][5],aconteceIndice[indice][6]);
       			break;
   		case "teste-porta":
			acontecerIndice_teste_porta(aconteceIndice[indice][1],aconteceIndice[indice][2],aconteceIndice[indice][3],
						    aconteceIndice[indice][4],aconteceIndice[indice][5]);
       			break;
   		case "item":
			acontecerIndice_item(aconteceIndice[indice][1],aconteceIndice[indice][2]);
       			break;
   		case "item-duplo":
			acontecerIndice_item_duplo(aconteceIndice[indice][1],aconteceIndice[indice][2],aconteceIndice[indice][3],aconteceIndice[indice][4]);
       			break;
   		case "item-teste":
			acontecerIndice_item_teste(aconteceIndice[indice][1],aconteceIndice[indice][2],aconteceIndice[indice][3],aconteceIndice[indice][4],
						   aconteceIndice[indice][5]);
       			break;
   		case "item-laco":
			acontecerIndice_item_laco(aconteceIndice[indice][1],aconteceIndice[indice][2],aconteceIndice[indice][3],aconteceIndice[indice][4],
						  aconteceIndice[indice][5]);
       			break;
   		case "item-atributo":
			acontecerIndice_item_atributo(aconteceIndice[indice][1],aconteceIndice[indice][2],aconteceIndice[indice][3],aconteceIndice[indice][4],
						      aconteceIndice[indice][5]);
       			break;
   		case "item-escolha":
			acontecerIndice_item_escolha(aconteceIndice[indice][1]);
       			break;
   		case "luta":
			acontecerIndice_luta(aconteceIndice[indice][1],aconteceIndice[indice][2],aconteceIndice[indice][3]);
       			break;
   		case "luta-elfo":
			acontecerIndice_luta_elfo(aconteceIndice[indice][1],aconteceIndice[indice][2],aconteceIndice[indice][3],
						  aconteceIndice[indice][4],aconteceIndice[indice][5],aconteceIndice[indice][6]);
       			break;
   		case "luta-atributo":
			acontecerIndice_luta_atributo(aconteceIndice[indice][1],aconteceIndice[indice][2],aconteceIndice[indice][3],
						      aconteceIndice[indice][4],aconteceIndice[indice][5],aconteceIndice[indice][6]);
       			break;
   		case "luta-fugir":
			acontecerIndice_luta_fugir(aconteceIndice[indice][1],aconteceIndice[indice][2],aconteceIndice[indice][3],
						   aconteceIndice[indice][4],aconteceIndice[indice][5]);
       			break;
   		case "luta-anel":
			acontecerIndice_luta_anel(aconteceIndice[indice][1],aconteceIndice[indice][2],aconteceIndice[indice][3],
						  aconteceIndice[indice][4],aconteceIndice[indice][5]);
       			break;
   		case "luta-especial":
			acontecerIndice_luta_especial(aconteceIndice[indice][1],aconteceIndice[indice][2],aconteceIndice[indice][3],
						      aconteceIndice[indice][4],aconteceIndice[indice][5]);
       			break;
   		case "luta-tentaculo":
			acontecerIndice_luta_tentaculo(aconteceIndice[indice][1],aconteceIndice[indice][2],aconteceIndice[indice][3],
						       aconteceIndice[indice][4],aconteceIndice[indice][5]);
       			break;
   		case "luta-copia":
			acontecerIndice_luta_copia(aconteceIndice[indice][1],aconteceIndice[indice][2],aconteceIndice[indice][3]);
       			break;
   		case "luta-cobra":
			acontecerIndice_luta_cobra(aconteceIndice[indice][1],aconteceIndice[indice][2],aconteceIndice[indice][3],
						   aconteceIndice[indice][4],aconteceIndice[indice][5],aconteceIndice[indice][6],
						   aconteceIndice[indice][7]);
       			break;
   		case "luta-dupla":
			acontecerIndice_luta_dupla(aconteceIndice[indice][1],aconteceIndice[indice][2],aconteceIndice[indice][3],
						   aconteceIndice[indice][4],aconteceIndice[indice][5],aconteceIndice[indice][6]);
       			break;
   		case "luta-aliado":
			acontecerIndice_luta_aliado(aconteceIndice[indice][1],aconteceIndice[indice][2],aconteceIndice[indice][3],
						    aconteceIndice[indice][4],aconteceIndice[indice][5],aconteceIndice[indice][6]);
       			break;
   		case "luta-tripla":
			acontecerIndice_luta_tripla(aconteceIndice[indice][1],aconteceIndice[indice][2],aconteceIndice[indice][3],
						    aconteceIndice[indice][4],aconteceIndice[indice][5],aconteceIndice[indice][6],
						    aconteceIndice[indice][7],aconteceIndice[indice][8],aconteceIndice[indice][9]);
       			break;
   		case "luta-item":
			acontecerIndice_luta_item(aconteceIndice[indice][1],aconteceIndice[indice][2],aconteceIndice[indice][3],
						  aconteceIndice[indice][4],aconteceIndice[indice][5]);
			break;	
   		case "atributo":
			acontecerIndice_atributo(aconteceIndice[indice][1],aconteceIndice[indice][2],aconteceIndice[indice][3]);
       			break;
   		case "atributo-teste":
			acontecerIndice_atributo_teste(aconteceIndice[indice][1],aconteceIndice[indice][2],aconteceIndice[indice][3],
						       aconteceIndice[indice][4],aconteceIndice[indice][5],aconteceIndice[indice][6]);
       			break;
   		case "atributo-item":
			acontecerIndice_atributo_item(aconteceIndice[indice][1],aconteceIndice[indice][2],aconteceIndice[indice][3],
						      aconteceIndice[indice][4],aconteceIndice[indice][5]);
       			break;
   		case "atributo-itens":
			acontecerIndice_atributo_itens(aconteceIndice[indice][1],aconteceIndice[indice][2],aconteceIndice[indice][3],
						       aconteceIndice[indice][4],aconteceIndice[indice][5],aconteceIndice[indice][6],
						       aconteceIndice[indice][7]);
       			break;
   		case "atributo-escolha":
			acontecerIndice_atributo_escolha(aconteceIndice[indice][1],aconteceIndice[indice][2]);
       			break;
   		case "atributo-duplo":
			acontecerIndice_atributo_duplo(aconteceIndice[indice][1],aconteceIndice[indice][2],aconteceIndice[indice][3],
						       aconteceIndice[indice][4],aconteceIndice[indice][5],aconteceIndice[indice][6]);
       			break;
   		case "atributo-triplo":
			acontecerIndice_atributo_triplo(aconteceIndice[indice][1],aconteceIndice[indice][2],aconteceIndice[indice][3],
							aconteceIndice[indice][4],aconteceIndice[indice][5],aconteceIndice[indice][6],
						        aconteceIndice[indice][7],aconteceIndice[indice][8],aconteceIndice[indice][9]);
       			break;
   		case "modificador":
			acontecerIndice_modificador(aconteceIndice[indice][1],aconteceIndice[indice][2],aconteceIndice[indice][3],aconteceIndice[indice][4]);
       			break;
   		case "facadas":
			acontecerIndice_facadas(aconteceIndice[indice][1],aconteceIndice[indice][2],aconteceIndice[indice][3]);
       			break;
   		case "fruta":
			acontecerIndice_fruta(aconteceIndice[indice][1],aconteceIndice[indice][2],aconteceIndice[indice][3],aconteceIndice[indice][4]);
       			break;
   		case "se":
			acontecerIndice_se(aconteceIndice[indice][1]);
       			break;
    		default:
			$('.imgDados').hide();
			$('.opcoes').hide();
			alert("Sua aventura chegou ao fim!");
			break;
	}
};
function acontecerIndice_jogo_escolha() {
	alert("Bem Vindo ao Jogo Escolha de Seis!");
	var numero = 0;
	var aposta = 0;
	var resultado = 0;
	if ((valorOuro <= 0) && (qtdOuro > 0)) {
		acontecerIndice_encanto("ouro");
		acontecerIndice_atributo("adiciona","ouro",10);
	};
	while ((valorOuro > 0) || (qtdOuro > 0)) {
		$('.imgDados').show();
		if ((valorOuro === 0) && (qtdOuro === 0)) {
			alert("Você não pode participar do jogo!");
			return;
		} else if ((valorOuro <= 0) && (qtdOuro > 0)) {
			acontecerIndice_encanto("ouro");
			acontecerIndice_atributo("adiciona","ouro",10);	
		};	
		$('.valor-ouro').text = valorOuro;
		numero = prompt("Escolha um número de 1 a 6:");
		while ((numero <= 0) || (numero > 6)) {
			alert("Número inválido");
			numero = prompt("Escolha um número de 1 a 6:");
		};
		aposta = prompt("Quanto você deseja apostar (máximo: "+valorOuro+")?");
		while ((aposta <= 0) || (aposta > valorOuro)) {
			alert("Aposta inválida");
			aposta = prompt("Quanto você deseja apostar (máximo: "+valorOuro+")?");
		};
		resultado = rolarUmDado();
		if (resultado == numero) {
			alert("O resultado foi: "+resultado+" e você escolheu: "+numero+", por isso ganhou: "+aposta * 5+" Peças de Ouro!");
			acontecerIndice_atributo("adiciona","ouro",posta * 5);
		} else {
			alert("O resultado foi: "+resultado+" e você escolheu: "+numero+", por isso perdeu: "+aposta+" Peças de Ouro!");
			acontecerIndice_atributo("retira","ouro",aposta);
		};
		if ((valorOuro > 0) && !(confirm("Você deseja continuar no jogo Escolha de Seis?"))) {
			return;
			$('.imgDados').hide();
		};
	};
	alert("Você não pode participar do jogo! Pois não tem Peças de Ouro ou o encanto Ouro dos Tolos!");
};
function acontecerIndice_jogo_pedra() {
	alert("Bem Vindo ao jogo Pedra Mágica!");
	var numeroDeJogadores = 1 + rolarUmDado();
	var dificuldade = 12;
	var resultado = 0;
	var vez = 1;
	alert("O número de jogadores é: "+numeroDeJogadores+"! E você é o Jogador 1!");
	while ((dificuldade > 2) && (numeroDeJogadores > 1)) {
		resultado = rolarDoisDados();
		alert("vez do jogador: "+vez+" / resultado: "+resultado+" / dificuldade: "+dificuldade+" / número de jogadores: "+numeroDeJogadores);
		if ((vez === 1) && (resultado > dificuldade)) {
			alert("Você perdeu o jogo, por ter tirado "+resultado+"!");
			acontecerIndice_atributo_duplo("retira","habilidade",2,"retira","energia",4);
			if (confirm("Quer jogar de novo?")){
				numeroDeJogadores = 1 + rolarUmDado();
				alert("O número de jogadores é: "+numeroDeJogadores+"! E você é o Jogador 1!");
				dificuldade = 13;
				vez = 0;
			} else {
				return;
			};
		} else if (resultado > dificuldade) {
			alert("O Jogador "+vez+" foi eliminado, por ter tirado "+resultado+"!");
			numeroDeJogadores--;
		};
		if (vez < numeroDeJogadores) {
			vez++;
		} else {
			vez = 1;
		};
		dificuldade--;
	};
	if (numeroDeJogadores === 1) {
		alert ("Você é o vencedor!");
		acontecerIndice_atributo("adiciona","ouro",36);
	};
};
function acontecerIndice_jogo_faca() {
	alert("Bem Vindo ao jogo da Faca!");
	$('#opcao1').hide();
	if ((qtdIlusao > 0) && (confirm("Você deseja usar o encanto Ilusão para fugir do jogo?"))) {
		alert("Por você ter o encanto Ilusão, você pode ir para o indice 9");
		$('.opcoes').hide();
		$('#opcao1').show();
		return;
	};
	var vez = "inimigo";
	var resultado = 0;
	var escolha = "";
	while (resultado < 6) {
		$('.imgDados').show();
		resultado = rolarUmDado();
		if (resultado == 6) {
			alert("O resultado foi: "+resultado+" e o "+vez+" se matou!");
		} else if (vez === "inimigo") {
			alert("O resultado foi: "+resultado+" e o "+vez+" não se feriu!");
			vez = "jogador";
		} else {
			alert("O resultado foi: "+resultado+" e o "+vez+" não se feriu!");
			vez = "inimigo";
		};
	};
	$('.imgDados').hide();
	if (vez === "jogador") {
		acontecerIndice(399);
	} else {
		escolha = prompt("Qual o prémio que você deseja: (a) Dois encantos extras, (b) 50 peças de ouro ou (c) Escudo de Armas Encantado, -2 a Força de Ataque das criaturas");
		while (escolha != "a" && escolha != "b" && escolha != "c") {
			alert ("Escolha inválida!");
			escolha = prompt("Qual o prémio que você deseja: (a) Dois encantos extras, (b) 50 peças de ouro ou (c) Escudo de Armas Encantado, -2 a Força de Ataque das criaturas");
		};
		switch (escolha) {
			case "a":
				acontecerIndice_atributo("adiciona","magia",2);
				$('#completo').click();
				$('.botaomais').show();
				break;
			case "b":
				acontecerIndice_atributo("adiciona","ouro",50);
				break;
			case "c":
				acontecerIndice_item("adiciona","Escudo de Armas Encantado, -2 Força de Ataque das criaturas");
				break;
		};
	};
};
function acontecerIndice_encanto(nomeEncanto) {
	var tituloEncanto = "";
	switch (nomeEncanto) {
    		case "copia":
			if (qtdCopia <= 0){
				alert("Você não possui o encanto Cópia de Criatura!");
				return;
			} else {
				qtdCopia--;
				tituloEncanto = "Cópia de Criatura"
				$('#qtd-Copia').text(qtdCopia);
			};
			break;
    		case "percepcao":
			if (qtdPercepcao <= 0){
				alert("Você não possui o encanto Percepção Extra-Sensorial!");
				return;
			} else {
				qtdPercepcao--;
				tituloEncanto = "Percepção Extra-Sensorial";
				$('#qtd-Percepcao').text(qtdPercepcao);
			};
			break;
    		case "fogo":
			if (qtdFogo <= 0){
				alert("Você não possui o encanto Fogo!");
				return;
			} else {
				qtdFogo--;
				tituloEncanto = "Fogo";
				$('#qtd-Fogo').text(qtdFogo);
			};
			break;
    		case "ouro":
			if (qtdOuro <= 0){
				alert("Você não possui o encanto Ouro dos Tolos!");
				return;
			} else {
				qtdOuro--;
				tituloEncanto = "Ouro dos Tolos";
				$('#qtd-Ouro').text(qtdOuro);
			};
			break;
    		case "ilusao":
			if (qtdIlusao <= 0){
				alert("Você não possui o encanto Ilusão!");
				return;
			} else {
				qtdIlusao--;
				tituloEncanto = "Ilusão";
				$('#qtd-Ilusao').text(qtdIlusao);
			};
			break;
    		case "levitacao":
			if (qtdLevitacao <= 0){
				alert("Você não possui o encanto Levitação!");
				return;
			} else {
				qtdLevitacao--;
				tituloEncanto = "Levitação";
				$('#qtd-Levitacao').text(qtdLevitacao);
			};
			break;
    		case "sorte":
			if (qtdSorte <= 0){
				alert("Você não possui o encanto Sorte!");
				return;
			} else {
				qtdSorte--;
				tituloEncanto = "Sorte";
				$('#qtd-Sorte').text(qtdSorte);
			};
			break;
    		case "escudo":
			if (qtdEscudo <= 0){
				alert("Você não possui o encanto Escudo!");
				return;
			} else {
				qtdEscudo--;
				tituloEncanto = "Escudo";
				$('#qtd-Escudo').text(qtdEscudo);
			};
			break;
    		case "habilidade":
			if (qtdHabilidade <= 0){
				alert("Você não possui o encanto Habilidade!");
				return;
			} else {
				qtdHabilidade--;
				tituloEncanto = "Habilidade";
				$('#qtd-Habilidade').text(qtdHabilidade);
			};
			break;
    		case "energia":
			if (qtdEnergia <= 0){
				alert("Você não possui o encanto Energia!");
				return;
			} else {
				qtdEnergia--;
				tituloEncanto = "Energia";
				$('#qtd-Energia').text(qtdEnergia);
			};
			break;
    		case "forca":
			if (qtdForca <= 0){
				alert("Você não possui o encanto Força!");
				return;
			} else {
				qtdForca--;
				tituloEncanto = "Força";
				$('#qtd-Forca').text(qtdForca);
			};
			break;
    		default:
			if (qtdFraqueza <= 0){
				alert("Você não possui o encanto Fraqueza!");
				return;
			} else {
				qtdFraqueza--;
				tituloEncanto = "Fraqueza";
				$('#qtd-Fraqueza').text(qtdFraqueza);
			};
			break;
	};
	$('#qtd-Total').text(parseInt($('#qtd-Total').text()) - 1);	
	alert("Seu encanto "+tituloEncanto+" foi executado!");
};
function acontecerIndice_encanto_atributo(nomeEncanto,acaoAtributo,nomeAtributo,qtdAtributo) {
	acontecerIndice_encanto(nomeEncanto);
	acontecerIndice_atributo(acaoAtributo,nomeAtributo,qtdAtributo);
	if (valorEnergia <= 0){
		acontecerIndice(399);
		return;
	};
};
function acontecerIndice_encanto_item(nomeEncanto,acaoItem,nomeItem) {
	acontecerIndice_encanto(nomeEncanto);
	acontecerIndice_item(acaoItem,nomeItem);
};
function acontecerIndice_encanto_luta(nomeEncanto,nomeCriatura,habilidadeCriatura,energiaCriatura) {
	acontecerIndice_encanto(nomeEncanto);
	if (nomeEncanto === "copia") {
		var energiaCriatura = lutaCopiaCriatura(nomeCriatura,habilidadeCriatura,energiaCriatura);
		if (energiaCriatura > 0) {
			acontecerIndice_luta(nomeCriatura,habilidadeCriatura,energiaCriatura);
		};
	} else if (nomeEncanto === "forca") {
		exibeCriatura(nomeCriatura,habilidadeCriatura);
		alert("Você enfrentará "+nomeCriatura+" / Habilidade: "+habilidadeCriatura+" / Energia: "+energiaCriatura);
		$('.imgDados').show();
		while (energiaCriatura > 0) {
			var ataqueJogador = valorHabilidade + rolarDoisDados() + rolarUmDado();
			var ataqueCriatura = habilidadeCriatura + rolarDoisDados();
			if (ataqueCriatura > ataqueJogador) {
				acontecerIndice_atributo("retira","energia",2);
				if (confirm("Você deseja testar a sua sorte, para reduzir o dano?")) {
					acontecerIndice_atributo("retira","sorte",1);
					var resultado = rolarDoisDados();
					if (resultado > valorSorte) {
						alert("Você não obteve sorte, pois tirou "+resultado+" nos dados e sua sorte é "+valorSorte+"!");
						acontecerIndice_atributo("retira","energia",1);
						if (valorEnergia <= 0) {
							acontecerIndice(399);
							return;
						};
					} else {
						alert("Você obteve sorte, pois tirou "+resultado+" nos dados e sua sorte é "+valorSorte+"!");
						acontecerIndice_atributo("adiciona","energia",1);
						if (valorEnergia <= 0) {
							acontecerIndice(399);
							return;
					};
				};
			};
				if (valorEnergia <= 0){
					acontecerIndice(399);
					return;
				};
				alert("Força de Ataque Jogador: "+ataqueJogador+" < "+ataqueCriatura+" :Força de Ataque "+nomeCriatura+", Você sofreu 2 de dano!");
			} else if (ataqueCriatura < ataqueJogador) {
				energiaCriatura -= 2;
				if (confirm("Você deseja testar a sua sorte, para causar mais dano?")) {
					acontecerIndice_atributo("retira","sorte",1);
					var resultado = rolarDoisDados();
					if(resultado > valorSorte) {
						alert("Você não obteve sorte, pois tirou "+resultado+" nos dados e sua sorte é "+valorSorte+"!");
						energiaCriatura += 1;
					} else {
						alert("Você obteve sorte, pois tirou "+resultado+" nos dados e sua sorte é "+valorSorte+"!");
						energiaCriatura -= 2;
					};
				};
				alert("Força de Ataque Jogador: "+ataqueJogador+" > "+ataqueCriatura+" :Força de Ataque "+nomeCriatura+", "+nomeCriatura+" sofreu 2 de dano!");
			};
			alert("Jogador / Habilidade: "+valorHabilidade+" / Energia: "+valorEnergia);
			alert(nomeCriatura+" / Habilidade: "+habilidadeCriatura+" / Energia: "+energiaCriatura);
		};
		alert("Você derrotou "+nomeCriatura+"!");
		$('.imgDados').hide();
	} else {
		acontecerIndice_luta(nomeCriatura,habilidadeCriatura,energiaCriatura);
	};
};
function acontecerIndice_encanto_luta_atributo(nomeEncanto,nomeCriatura,habilidadeCriatura,energiaCriatura,acaoAtributo,nomeAtributo,qtdAtributo) {
	acontecerIndice_encanto(nomeEncanto);
	acontecerIndice_atributo(acaoAtributo,nomeAtributo,qtdAtributo);
	if (valorEnergia <= 0){
		acontecerIndice(399);
		return;
	};
	acontecerIndice_luta(nomeCriatura,habilidadeCriatura,energiaCriatura);

};
function acontecerIndice_encanto_luta_encanto(nomeEncanto,nomeCriatura,habilidadeCriatura,energiaCriatura,nomeEncanto2,qtdReduzirHabilidadeCriatura) {
	acontecerIndice_encanto(nomeEncanto);	
	if (confirm("Você deseja usar o encanto "+nomeEncanto2+"?")) {
		acontecerIndice_encanto(nomeEncanto2);
		acontecerIndice_luta(nomeCriatura,habilidadeCriatura,energiaCriatura-qtdReduzirHabilidadeCriatura);
	} else {
		acontecerIndice_luta(nomeCriatura,habilidadeCriatura,energiaCriatura);
	};
};
function acontecerIndice_encanto_luta_dupla(nomeEncanto,nomeCriatura,habilidadeCriatura,energiaCriatura,nomeCriatura2,habilidadeCriatura2,energiaCriatura2) {
	acontecerIndice_encanto(nomeEncanto);
	acontecerIndice_luta(nomeCriatura,habilidadeCriatura,energiaCriatura);
	acontecerIndice_luta(nomeCriatura2,habilidadeCriatura2,energiaCriatura2);
};
function acontecerIndice_encanto_teste(nomeEncanto,nomeAtributoTeste,opcaoSucesso,opcaoFalha) {
	acontecerIndice_encanto(nomeEncanto);
	acontecerIndice_teste(nomeAtributoTeste,opcaoSucesso,opcaoFalha);
};
function acontecerIndice_encanto_sala(nomeEncanto,nomeAtributoTeste,acaoAtributo,nomeAtributo,qtdAtributo,FalhaTotal) {
	acontecerIndice_encanto(nomeEncanto);
	alert("Você testará sua "+nomeAtributoTeste+"!");
	$('.imgDados').show();
	if (rolarDoisDados() <= valorSorte) {
		alert("Você teve sucesso! por isso a mordida da cobra foi só um arranhão!");
		acontecerIndice_atributo(acaoAtributo,nomeAtributo,qtdAtributo);
		if (valorEnergia <= 0){
			acontecerIndice(399);
			return;
		};
	} else {
		acontecerIndice(399);
	};
	acontecerIndice_atributo("retira","sorte",1);
	$('.imgDados').hide();
};
function acontecerIndice_encanto_porta(nomeEncanto,condicao,opcaoExtra,acaoAtributo,nomeAtributo,qtdAtributo) {
	acontecerIndice_encanto(nomeEncanto);
	$('#opcao1').hide();
	$('.imgDados').show();
	if (rolarUmDado() > 3) {
		alert("Você passou no teste por ter tirado "+condicao+" no dado!");
		alert("Por ter passado no teste você irá para o indice 292!");
		irIndice(292);
	} else {
		acontecerIndice_atributo(acaoAtributo,nomeAtributo,qtdAtributo);
		if (valorEnergia <= 0){
			acontecerIndice(399);
			return;
		};
		while (confirm("Você deseja continuar a tentar arrombar a porta?")) {
			if (rolarUmDado() > 3) {
				alert("Você passou no teste por ter tirado "+condicao+" no dado!");
				alert("Por ter passado no teste você irá para o indice 292!");
				irIndice(292);
				break;
			} else {
				acontecerIndice_atributo(acaoAtributo,nomeAtributo,qtdAtributo);
				if (valorEnergia <= 0){
					acontecerIndice(399);
					return;
				};
			};
		};
	};
	$('.imgDados').hide();
};
function acontecerIndice_teste(nomeAtributoTeste,opcaoSucesso,opcaoFalha) {
	alert("Você testará sua "+nomeAtributoTeste+"!");
	$('.opcoes').hide();
	$('.imgDados').show();
	if (rolarDoisDados() <= valorSorte) {
		alert("Você teve sucesso! por isso aparece a "+opcaoSucesso+"!");
		$(opcaoSucesso).show();
	} else {
		alert("Você teve fracasso! por isso aparece a "+opcaoFalha+"!");
		$(opcaoFalha).show();
	};
	acontecerIndice_atributo("retira","sorte",1);
	$('.imgDados').hide();
};
function acontecerIndice_teste_anel(nomeAtributoTeste,statusSucesso,statusFalha) {
	alert("Você testará sua "+nomeAtributoTeste+"!");
	$('.imgDados').show();
	if (rolarDoisDados() <= valorSorte) {
		alert("Você deixou BALTHUS DIRE "+statusSucesso+"!");
		statusAnel = statusSucesso;
	} else {
		alert("Você deixou BALTHUS DIRE "+statusFalha+"!");
		statusAnel = statusFalha;
	};
	acontecerIndice_atributo("retira","sorte",1);
	$('.imgDados').hide();
};
function acontecerIndice_teste_atributo(nomeAtributoTeste,acaoAtributo,nomeAtributo,qtdAtributo) {
	alert("Você testará sua "+nomeAtributoTeste+"!");
	$('.imgDados').show();
	if (((rolarDoisDados() <= valorSorte) && ($('#indice').text() === "62")) || ((rolarDoisDados() > valorSorte) && ($('#indice').text() === "125"))) {
		acontecerIndice_atributo(acaoAtributo,nomeAtributo,qtdAtributo);
		if (valorEnergia <= 0){
			acontecerIndice(399);
			return;
		};
	} else if ($('#indice').text() === "62") {
	  
		alert("Você não encontrou nada!");

	} else {
	  
		alert("Você não foi acertado pelas facas!");
	
	};
	acontecerIndice_atributo("retira","sorte",1);
	$('.imgDados').hide();
};
function acontecerIndice_teste_especial(condicao,opcaoExtra,acaoAtributo,nomeAtributo,qtdAtributo) {
	$('#opcao1').hide();
	while (confirm("Você deseja continuar a tentar arrombar a porta?")) {
		$('.imgDados').show();
		if (rolarUmDado() > 5) {
			alert("Você passou no teste por ter tirado "+condicao+" no dado!");
			alert("Por ter passado no teste você irá para o indice 292!");
			irIndice(292);
			break;
		} else {
			acontecerIndice_atributo(acaoAtributo,nomeAtributo,qtdAtributo);
			if (valorEnergia <= 0){
				acontecerIndice(399);
				return;
			};
		};
	};
	$('.imgDados').hide();
};
function acontecerIndice_teste_carne(nomeAtributoTeste,condicao,acaoAtributo,nomeAtributo,qtdAtributo,falhaTotal) {
	alert("Você testara sua "+nomeAtributoTeste+"!");
	
	$('.imgDados').show();
	
	var acertos = 0;
	
	for(i = 0; i < condicao; i++) {
	  
		if (rolarDoisDados() > valorHabilidade) {
	    
			acontecerIndice_atributo(acaoAtributo,nomeAtributo,qtdAtributo);

			if (valorEnergia <= 0){
				acontecerIndice(399);
				return;
			};    
			acertos++;
	  
		};
	
	};
	
	if (acertos === 3) {
	  
		$('.opcoes').hide();
	  
		alert("A carne acertou "+condicao+" vezes, sua vida chegou ao "+falhaTotal+"!");
		acontecerIndice(399);
	
	};
	
	$('.imgDados').hide();	
};
function acontecerIndice_teste_porta(nomeAtributoTeste,opcaoExtra,acaoAtributo,nomeAtributo,qtdAtributo) {
	alert("Você testara sua "+nomeAtributoTeste+"!");
	
	$('#opcao1').hide();
	
	$('.imgDados').show();
	
	if (rolarDoisDados() <= valorSorte) {
	  
		alert("Você arrombou a porta!");
	  
		irIndice(196);

		acontecerIndice_atributo("retira","sorte",1);
	} else {

		acontecerIndice_atributo(acaoAtributo,nomeAtributo,qtdAtributo);
		if (valorEnergia <= 0){
			acontecerIndice(399);
			return;
		};


		acontecerIndice_atributo("retira","sorte",1);	  
		while (confirm("Você deseja continuar a tentar arrombar a porta?")) {
			  
			if (rolarDoisDados() <= valorSorte) {
			  
				alert("Você arrombou a porta!");
			  
				alert("Por ter passado no teste você ira para o indice 196!");
			  
				irIndice(196);

				acontecerIndice_atributo("retira","sorte",1);
	  
				break;
		  
			} else {
			  
				acontecerIndice_atributo(acaoAtributo,nomeAtributo,qtdAtributo);


				if (valorEnergia <= 0){
					acontecerIndice(399);
					return;
				};		  
				acontecerIndice_atributo("retira","sorte",1);
			};
	  
		};
	
	};
	
	$('.imgDados').hide();
};
function acontecerIndice_item(acaoItem,nomeItem) {
	var nomeDoItem = "";
	switch (nomeItem) {
		case "Adaga de Arremesso Encantada, causa 2 de dano automático":
			nomeDoItem = ".adaga";
			qtdDoItem = ".qtd-adaga";
			break;
		case "Chave de Prata":
			nomeDoItem = ".prata";
			qtdDoItem = ".qtd-prata";
			break;
		case "Chave Verde Cintilante":
			nomeDoItem = ".verde";
			qtdDoItem = ".qtd-verde";
			break;
		case "Velo de Ouro":
			nomeDoItem = ".velo";
			qtdDoItem = ".qtd-velo";
			break;
		case "Punhado de Pequenas Amoras":
			nomeDoItem = ".punhado";
			qtdDoItem = ".qtd-punhado";
			break;
		case "Vidro contendo o Homem-Aranha":
			nomeDoItem = ".vidro";
			qtdDoItem = ".qtd-vidro";
			break;
		case "Escova de Cabelo Ornamentada":
			nomeDoItem = ".escova";
			qtdDoItem = ".qtd-escova";
			break;
		case "Essência de Erva de Porco":
			nomeDoItem = ".essencia";
			qtdDoItem = ".qtd-essencia";
			break;
		case "Amuleto Encantado":
			nomeDoItem = ".amuleto";
			qtdDoItem = ".qtd-amuleto";
			break;
		case "Vinho Encanto de Fogo":
			nomeDoItem = ".vinho";
			qtdDoItem = ".qtd-vinho";
			break;
		case "Espelho de Prata":
			nomeDoItem = ".espelho";
			qtdDoItem = ".qtd-espelho";
			break;
		case "Miríade de Bolso":
			nomeDoItem = ".miriade";
			qtdDoItem = ".qtd-miriade";
			break;
		case "Chave de Cobre":
			nomeDoItem = ".cobre";
			qtdDoItem = ".qtd-cobre";
			break;
		case "Vidro de Unguento":
			nomeDoItem = ".unguento";
			qtdDoItem = ".qtd-unguento";
			break;
		case "Espada Solar + 4":
			nomeDoItem = ".espada4";
			qtdDoItem = ".qtd-espada4";
			acontecerIndice_atributo("adiciona","habilidade",4);
			break;
		case "Espada Mágica + 1":
			nomeDoItem = ".espada1";
			qtdDoItem = ".qtd-espada1";
			acontecerIndice_atributo("adiciona","habilidade",1);
			break;
		case "Espada Encantada + 2":
			nomeDoItem = ".espada2";
			qtdDoItem = ".qtd-espada2";
			acontecerIndice_atributo("adiciona","habilidade",2);
			break;
		default:
			nomeDoItem = ".escudo";
			qtdDoItem = ".qtd-escudo"
			break;
	};
	if (acaoItem === "adiciona") {
		$(nomeDoItem).show();
		$(qtdDoItem).text(1);
	} else {
		$(nomeDoItem).hide();
		$(qtdDoItem).text(0);
	};
	alert("Você "+acaoItem+" "+nomeItem+" em seus itens!");
};
function acontecerIndice_item_duplo(acaoItem,nomeItem,acaoItem2,nomeItem2) {
	acontecerIndice_item(acaoItem,nomeItem);
	acontecerIndice_item(acaoItem2,nomeItem2);
};
function acontecerIndice_item_teste(acaoItem,nomeItem,nomeAtributoTeste,acaoItem2,nomeItem2) {
	acontecerIndice_item(acaoItem,nomeItem);
	if (confirm("Você deseja testar a "+nomeAtributoTeste+"?")) {
		$('.imgDados').show();
		if (rolarDoisDados() <= valorSorte) {
			acontecerIndice_item(acaoItem2,nomeItem2);
		} else {
			alert("Você não conseguiu obter o "+nomeItem2+"!");
		};
		valorSorte--;
		$('.valor-sorte').text(valorSorte);
		$('.imgDados').hide();
	};
};
function acontecerIndice_item_laco(acaoItem,nomeItem,condicao,opcaoSucesso,opcaoFalha) {
	acontecerIndice_item(acaoItem,nomeItem);
	alert("Se você tirar "+condicao+" tera laçado a criatura!");
	$('.opcoes').hide();
	$('.imgDados').show();
	if (rolarUmDado() >= 5) {
		alert("Você teve sucesso! por isso está liberado ir para o indice 252!");
		$(opcaoSucesso).show();
		$('.imgDados').hide();
		return;
	} else {
		alert("Você teve fracasso! por isso está liberado ir para o indice 107!");
		$(opcaoFalha).show();
		$('.imgDados').hide();
		return;
	};
};
function acontecerIndice_item_atributo(acaoItem,nomeItem,acaoAtributo,nomeAtributo,qtdAtributo) {
	acontecerIndice_item(acaoItem,nomeItem);
	acontecerIndice_atributo(acaoAtributo,nomeAtributo,qtdAtributo);
	if (valorEnergia <= 0){
		acontecerIndice(399);
		return;
	};
};
function acontecerIndice_item_escolha(acaoItem) {
	var texto = "Você deve escolher um item:";
	var i = 1;
	var arrayNome = [];
	var nomeItem = "";
	if ($('.qtd-adaga').text() == 1) {
		texto += " ("+i+") Adaga de Arremesso Encantada, causa 2 de dano automático";
		arrayNome.push("Adaga de Arremesso Encantada, causa 2 de dano automático");
		i++;
	};
	if ($('.qtd-prata').text() == 1) {
		texto += " ("+i+") Chave de Prata";
		arrayNome.push("Chave de Prata");
		i++;
	};
	if ($('.qtd-verde').text() == 1) {
		texto += " ("+i+") Chave Verde Cintilante";
		arrayNome.push("Chave Verde Cintilante");
		i++;
	};
	if ($('.qtd-velo').text() == 1) {
		texto += " ("+i+") Velo de Ouro";
		arrayNome.push("Velo de Ouro");
		i++;
	};
	if ($('.qtd-punhado').text() == 1) {
		texto += " ("+i+") Punhado de Pequenas Amoras";
		arrayNome.push("Punhado de Pequenas Amoras");
		i++;
	};
	if ($('.qtd-vidro').text() == 1) {
		texto += " ("+i+") Vidro contendo o Homem-Aranha";
		arrayNome.push("Vidro contendo o Homem-Aranha");
		i++;
	};
	if ($('.qtd-escova').text() == 1) {
		texto += " ("+i+") Escova de Cabelo Ornamentada";
		arrayNome.push("Escova de Cabelo Ornamentada");
		i++;
	};
	if ($('.qtd-essencia').text() == 1) {
		texto += " ("+i+") Essência de Erva de Porco";
		arrayNome.push("Essência de Erva de Porco");
		i++;
	};
	if ($('.qtd-amuleto').text() == 1) {
		texto += " ("+i+") Amuleto Encantado";
		arrayNome.push("Amuleto Encantado");
		i++;
	};
	if ($('.qtd-vinho').text() == 1) {
		texto += " ("+i+") Vinho Encanto de Fogo";
		arrayNome.push("Vinho Encanto de Fogo");
		i++;
	};
	if ($('.qtd-espelho').text() == 1) {
		texto += " ("+i+") Espelho de Prata";
		arrayNome.push("Espelho de Prata");
		i++;
	};
	if ($('.qtd-miriade').text() == 1) {
		texto += " ("+i+") Miríade de Bolso";
		arrayNome.push("Miríade de Bolso");
		i++;
	};
	if ($('.qtd-cobre').text() == 1) {
		texto += " ("+i+") Chave de Cobre";
		arrayNome.push("Chave de Cobre");
		i++;
	};
	if ($('.qtd-unguento').text() == 1) {
		texto += " ("+i+") Vidro de Unguento";
		arrayNome.push("Vidro de Unguento");
		i++;
	};
	if ($('.qtd-espada4').text() == 1) {
		texto += " ("+i+") Espada Solar + 4";
		arrayNome.push("Espada Solar + 4");
		i++;
	};
	if ($('.qtd-espada1').text() == 1) {
		texto += " ("+i+") Espada Mágica + 1";
		arrayNome.push("Espada Mágica + 1");
		i++;
	};
	if ($('.qtd-espada2').text() == 1) {
		texto += " ("+i+") Espada Encantada + 2";
		arrayNome.push("Espada Encantada + 2");
		i++;
	};
	if ($('.qtd-escudo').text() == 1) {
		texto += " ("+i+") Escudo de Armas Encantado, -2 Força de Ataque das criaturas";
		arrayNome.push("Escudo de Armas Encantado, -2 Força de Ataque das criaturas");
		i++;
	};
	var opcaoItem = prompt(texto);
	switch (opcaoItem) {
    		case "1":
			nomeItem = arrayNome[0];
			break;
    		case "2":
			nomeItem = arrayNome[1];
			break;
    		case "3":
			nomeItem = arrayNome[2];
			break;
    		case "4":
			nomeItem = arrayNome[3];
			break;
    		case "5":
			nomeItem = arrayNome[4];
			break;
    		case "6":
			nomeItem = arrayNome[5];
			break;
    		case "7":
			nomeItem = arrayNome[6];
			break;
    		case "8":
			nomeItem = arrayNome[7];
			break;
    		case "9":
			nomeItem = arrayNome[8];
			break;
    		case "10":
			nomeItem = arrayNome[9];
			break;
    		case "11":
			nomeItem = arrayNome[10];
			break;
    		case "12":
			nomeItem = arrayNome[11];
			break;
    		case "13":
			nomeItem = arrayNome[12];
			break;
    		case "14":
			nomeItem = arrayNome[13];
			break;
    		case "15":
			nomeItem = arrayNome[14];
			break;
    		case "16":
			nomeItem = arrayNome[15];
			break;
    		case "17":
			nomeItem = arrayNome[16];
			break;
    		default:
			nomeItem = arrayNome[17];
			break;
	};
	acontecerIndice_item(acaoItem,nomeItem);
};
function exibeCriatura(nomeCriatura,habilidadeCriatura) {
	switch (nomeCriatura) {
		case "GARK":
			if (habilidadeCriatura === 7) {
				$('.gark0').show();
			} else {
				$('.gark1').show();
			};
			break;
		case "FERA DAS GARRAS":
			$('.fera').show();
			break;
		case "HOMEM-ARANHA":
			$('.aranha').show();
			break;
		case "COBRA DE ESGOTO":
			$('.cobra').show();
			break;
		case "GÁRGULA":
			$('.gargula').show();
			break;
		case "MACACO-CACHORRO":
			$('.macaco').show();
			$('.cachorro').show();
			break;			
		case "GOLEM":
			$('.golem').show();
			break;
		case "HOMEM ALTO":
			$('.alto').show();
			$('.baixo').show();
			break;
		case "ANÃO":
			$('.anao').show();
			$('.goblin').show();
			$('.orca').show();
			break;
		case "PRIMEIRO GIRA":
			$('.primerio').show();
			$('.segundo').show();
			break;
		case "CALACORM":
			$('.calacorm').show();
			break;
		case "HOMEM-RINO":
			if (habilidadeCriatura === 8) {
				$('.rino0').show();
			} else {
				$('.rino1').show();
			};
			break;
		case "ELFO NEGRO":
			if (habilidadeCriatura === 8) {
				$('.elfo0').show();
			} else {
				$('.elfo1').show();
			};
			break;
		case "BALTHUS DIRE":
			$('.balthus').show();
			break;
		case "HIDRA":
			$('.hidra').show();
			break;
		default:
			break;
	};
};
function lutaCopiaCriatura(nomeCriatura,habilidadeCriatura,energiaCriatura) {
	exibeCriatura(nomeCriatura,habilidadeCriatura);
	alert("A cópia enfrentará "+nomeCriatura+" / Habilidade: "+habilidadeCriatura+" / Energia: "+energiaCriatura);
	$('.imgDados').show();
	var energiaCopia = energiaCriatura;
	while (energiaCriatura > 0) {
		var ataqueCopia = habilidadeCriatura + rolarDoisDados();
		var ataqueCriatura = habilidadeCriatura + rolarDoisDados();
		if (ataqueCriatura > ataqueCopia) {
			energiaCopia -= 2;
			$('.valor-energia').text(valorEnergia);
			alert("Força de Ataque Cópia-"+nomeCriatura+": "+ataqueCopia+" < "+ataqueCriatura+" :Força de Ataque "+nomeCriatura+", Cópia-"+nomeCriatura+" sofreu 2 de dano!");
		} else if (ataqueCriatura < ataqueCopia) {
			energiaCriatura -= 2;
			alert("Força de Ataque Cópia-"+nomeCriatura+": "+ataqueCopia+" > "+ataqueCriatura+" :Força de Ataque "+nomeCriatura+", "+nomeCriatura+" sofreu 2 de dano!");
		};
		alert("Cópia-"+nomeCriatura+" / Habilidade: "+habilidadeCriatura+" / Energia: "+energiaCopia+" - "+nomeCriatura+" / Habilidade: "+habilidadeCriatura+" / Energia: "+energiaCriatura);
		if (energiaCopia <= 0) {
			alert ("Sua Cópia foi derrotada!");
			return (energiaCriatura);
		};
	};
	alert("A cópia derrotou "+nomeCriatura+"!");
	$('.imgDados').hide();
};
function acontecerIndice_luta(nomeCriatura,habilidadeCriatura,energiaCriatura) {
	exibeCriatura(nomeCriatura,habilidadeCriatura);
	alert("Você enfrentará "+nomeCriatura+" / Habilidade: "+habilidadeCriatura+" / Energia: "+energiaCriatura);
	$('.imgDados').show();
	while (energiaCriatura > 0) {
		var ataqueJogador = valorHabilidade + rolarDoisDados();
		var ataqueCriatura = habilidadeCriatura + rolarDoisDados();
		if (ataqueCriatura > ataqueJogador) {
			alert("Força de Ataque Jogador: "+ataqueJogador+" < "+ataqueCriatura+" :Força de Ataque "+nomeCriatura+", Você sofreu 2 de dano!");
			acontecerIndice_atributo("retira","energia",2);
			if (confirm("Você deseja testar a sua sorte, para reduzir o dano?")) {
				acontecerIndice_atributo("retira","sorte",1);
				var resultado = rolarDoisDados();
				if (resultado > valorSorte) {
					alert("Você não obteve sorte, pois tirou "+resultado+" nos dados e sua sorte é "+valorSorte+"!");
					acontecerIndice_atributo("retira","energia",1);
					if (valorEnergia <= 0) {
						acontecerIndice(399);
						return;
					};
				} else {
					alert("Você obteve sorte, pois tirou "+resultado+" nos dados e sua sorte é "+valorSorte+"!");
					acontecerIndice_atributo("adiciona","energia",1);
					if (valorEnergia <= 0) {
						acontecerIndice(399);
						return;
					};
				};
			};
			if (valorEnergia <= 0){
				acontecerIndice(399);
				return;
			};
		} else if (ataqueCriatura < ataqueJogador) {
			energiaCriatura -= 2;
			if (confirm("Você deseja testar a sua sorte, para causar mais dano?")) {
				acontecerIndice_atributo("retira","sorte",1);
				var resultado = rolarDoisDados();
				if(resultado > valorSorte) {
					alert("Você não obteve sorte, pois tirou "+resultado+" nos dados e sua sorte é "+valorSorte+"!");
					energiaCriatura += 1;
				} else {
					alert("Você obteve sorte, pois tirou "+resultado+" nos dados e sua sorte é "+valorSorte+"!");
					energiaCriatura -= 2;
				};
			};
			alert("Força de Ataque Jogador: "+ataqueJogador+" > "+ataqueCriatura+" :Força de Ataque "+nomeCriatura+", "+nomeCriatura+" sofreu 2 de dano!");
		};
		alert("Jogador / habilidade: "+valorHabilidade+" / Energia: "+valorEnergia+" - "+nomeCriatura+" / habilidade: "+habilidadeCriatura+" / Energia: "+energiaCriatura);
	};
	alert("Você derrotou "+nomeCriatura+"!");
	$('.imgDados').hide();	
};
function acontecerIndice_luta_elfo(nomeCriatura,habilidadeCriatura,energiaCriatura,nomeEncanto,qtdReduzirHabilidadeCriatura,nomeEncanto2) {
	if (confirm("Você deseja usar o encanto "+nomeEncanto+"?")) {
		acontecerIndice_encanto(nomeEncanto);
		alert("Por você ter usado o encanto "+nomeEncanto+" a habilidade do "+nomeCriatura+" é reduzida em "+qtdReduzirHabilidadeCriatura+"!");
		habilidadeCriatura -= qtdReduzirHabilidadeCriatura;
	};
	if (confirm("Você deseja usar o encanto "+nomeEncanto2+"?")) {
		acontecerIndice_encanto(nomeEncanto2);
		energiaCriatura = lutaCopiaCriatura(nomeCriatura,habilidadeCriatura,energiaCriatura);
		if (energiaCriatura > 0) {
			acontecerIndice_luta(nomeCriatura,habilidadeCriatura,energiaCriatura);
		};
	} else {
		acontecerIndice_luta(nomeCriatura,habilidadeCriatura,energiaCriatura);
	};
};
function acontecerIndice_luta_atributo(nomeCriatura,habilidadeCriatura,energiaCriatura,acaoAtributo,nomeAtributo,qtdAtributo) {
	acontecerIndice_atributo(acaoAtributo,nomeAtributo,qtdAtributo);
	if (valorEnergia <= 0){
		acontecerIndice(399);
		return;
	};
	acontecerIndice_luta(nomeCriatura,habilidadeCriatura,energiaCriatura);;
};
function acontecerIndice_luta_fugir(nomeCriatura,habilidadeCriatura,energiaCriatura,condicao,opcaoExtra) {
	alert("Você enfrentará "+nomeCriatura+" / Habilidade: "+habilidadeCriatura+" / Energia: "+energiaCriatura);
	$('.imgDados').show();
	$(opcaoExtra).hide();
	var ataques = 0;
	while (energiaCriatura > 0) {
		var ataqueJogador = valorHabilidade + rolarDoisDados();
		var ataqueCriatura = habilidadeCriatura + rolarDoisDados();
		if (ataqueCriatura > ataqueJogador) {
			alert("Força de Ataque Jogador: "+ataqueJogador+" < "+ataqueCriatura+" :Força de Ataque "+nomeCriatura+", Você sofreu 2 de dano!");
			acontecerIndice_atributo("retira","energia",2);
			if (confirm("Você deseja testar a sua sorte, para reduzir o dano?")) {
				acontecerIndice_atributo("retira","sorte",1);
				var resultado = rolarDoisDados();
				if (resultado > valorSorte) {
					alert("Você não obteve sorte, pois tirou "+resultado+" nos dados e sua sorte é "+valorSorte+"!");
					acontecerIndice_atributo("retira","energia",1);
					if (valorEnergia <= 0) {
						acontecerIndice(399);
						return;
					};
				} else {
					alert("Você obteve sorte, pois tirou "+resultado+" nos dados e sua sorte é "+valorSorte+"!");
					acontecerIndice_atributo("adiciona","energia",1);
					if (valorEnergia <= 0) {
						acontecerIndice(399);
						return;
					};
				};
			};
			if (valorEnergia <= 0){
				acontecerIndice(399);
				return;
			};
			ataques++;
		} else if (ataqueCriatura < ataqueJogador) {
			energiaCriatura -= 2;
			if (confirm("Você deseja testar a sua sorte, para causar mais dano?")) {
				acontecerIndice_atributo("retira","sorte",1);
				var resultado = rolarDoisDados();
				if (resultado > valorSorte) {
					alert("Você não obteve sorte, pois tirou "+resultado+" nos dados e sua sorte é "+valorSorte+"!");
					energiaCriatura += 1;
				} else {
					alert("Você obteve sorte, pois tirou "+resultado+" nos dados e sua sorte é "+valorSorte+"!");
					energiaCriatura -= 2;
				};
			};
			alert("Força de Ataque Jogador: "+ataqueJogador+" > "+ataqueCriatura+" :Força de Ataque "+nomeCriatura+", "+nomeCriatura+" sofreu 2 de dano!");
			ataques++;
		} else {
			ataques++;
		};
		alert("Jogador / habilidade: "+valorHabilidade+" / Energia: "+valorEnergia+" - "+nomeCriatura+" / habilidade: "+habilidadeCriatura+" / Energia: "+energiaCriatura);
		if ((ataques >= condicao) && (energiaCriatura > 0) && (valorSorte > 0)) {
			$('.opcoes').hide();
			if (confirm("Passaram "+condicao+" séries de ataques você deseja fugir?")) {
				if (confirm("Você deseja testar a sua sorte, para nao levar dano?")) {
					acontecerIndice_atributo("retira","sorte",1);
					var resultado = rolarDoisDados();
					if (resultado > valorSorte) {
						alert("Você não obteve sorte, pois tirou "+resultado+" nos dados e sua sorte é "+valorSorte+"!");
						acontecerIndice_atributo("retira","energia",2);
						if (valorEnergia <= 0){
							acontecerIndice(399);
							return;
						};
					} else {
						alert("Você obteve sorte, pois tirou "+resultado+" nos dados e sua sorte é "+valorSorte+"!");
					};
				} else {
					acontecerIndice_atributo("retira","energia",2);
					if (valorEnergia <= 0){
						acontecerIndice(399);
						return;
					};
				};
				$(opcaoExtra).show();
				alert("Você fugiu!");
				$('.imgDados').hide();
				return;	
			};
		};
	};
	alert("Você derrotou "+nomeCriatura+"!");
	$('.imgDados').hide();	
};
function acontecerIndice_luta_anel(nomeCriatura,habilidadeCriatura,energiaCriatura,condicao,qtdReduzirHabilidadeCriatura) {
	if (statusAnel === condicao) {
		alert("Por o BALTHUS DIRE está "+condicao+" sua habilidade é reduzida em "+qtdReduzirHabilidadeCriatura+"!");
		habilidadeCriatura -= qtdReduzirHabilidadeCriatura;
	};
	acontecerIndice_luta(nomeCriatura,habilidadeCriatura,energiaCriatura);	
};
function acontecerIndice_luta_especial(nomeCriatura,habilidadeCriatura,energiaCriatura,condicao,opcaoFalha) {
	alert("Você enfrentará "+nomeCriatura+", sua habilidade é: "+habilidadeCriatura+", sua energia é: "+energiaCriatura+"!");
	$('.opcoes').hide();
	$('.imgDados').show();
	while (energiaCriatura > 0) {
		var ataqueJogador = valorHabilidade + rolarDoisDados();
		var ataqueCriatura = habilidadeCriatura + rolarDoisDados();
		if (ataqueCriatura < ataqueJogador) {
			energiaCriatura -= 2;
			if (confirm("Você deseja testar a sua sorte, para reduzir o dano?")) {
				acontecerIndice_atributo("retira","sorte",1);
				var resultado = rolarDoisDados();
				if (resultado > valorSorte) {
					alert("Você nao obteve sorte, pois tirou "+resultado+" nos dados e sua sorte é "+valorSorte+"!");
					acontecerIndice_atributo("retira","energia",1);
					if (valorEnergia <= 0) {
						acontecerIndice(399);
						return;
					};
				} else {
					alert("Você obteve sorte, pois tirou "+resultado+" nos dados e sua sorte é "+valorSorte+"!");
					acontecerIndice_atributo("adiciona","energia",1);
					if (valorEnergia <= 0) {
						acontecerIndice(399);
						return;
					};
				};
			};
			alert("Força de Ataque Jogador: "+ataqueJogador+" > "+ataqueCriatura+" :Força de Ataque "+nomeCriatura+", "+nomeCriatura+" sofreu 2 de dano!");
		} else {
			alert("O "+nomeCriatura+" acertou você "+condicao+" vez, por isso está liberado ir para o indice 208!");
			$(opcaoFalha).show();
			$('.imgDados').hide();
			return;
		};
		alert("Jogador / habilidade: "+valorHabilidade+" / Energia: "+valorEnergia+" - "+nomeCriatura+" / habilidade: "+habilidadeCriatura+" / Energia: "+energiaCriatura);
	};
	alert("Você derrotou "+nomeCriatura+"!");
	$('.opcoes').show();
	$(opcaoFalha).hide();
	$('.imgDados').hide();
};
function acontecerIndice_luta_tentaculo(nomeCriatura,habilidadeCriatura,energiaCriatura,condicao,FalhaTotal) {
	alert("Você enfrentará "+nomeCriatura+" / Habilidade: "+habilidadeCriatura+" / Energia: "+energiaCriatura);
	$('.imgDados').show();
	var erros = 0;
	while (energiaCriatura > 0) {
		var ataqueJogador = valorHabilidade + rolarDoisDados();
		var ataqueCriatura = habilidadeCriatura;
		if (ataqueCriatura < ataqueJogador) {
			energiaCriatura -= 2;
			alert("Força de Ataque Jogador: "+ataqueJogador+" > "+ataqueCriatura+" :Força de Ataque "+nomeCriatura+", "+nomeCriatura+" sofreu 2 de dano!");
		} else {
			erro++;
		};
		alert("Jogador / habilidade: "+valorHabilidade+" / Energia: "+valorEnergia);
		if (erro === condicao) {
			alert("Você errou "+condicao+" vezes, sua vida chegou ao "+FalhaTotal+"!");
			acontecerIndice(399);
			return;
		};
	};
	alert("Você derrotou "+nomeCriatura+"!");
	$('.imgDados').hide();	
};
function acontecerIndice_luta_copia(nomeCriatura,habilidadeCriatura,energiaCriatura) {
	habilidadeCriatura = valorHabilidade;
	energiaCriatura = valorEnergia;
	acontecerIndice_luta(nomeCriatura,habilidadeCriatura,energiaCriatura);
};
function acontecerIndice_luta_cobra(nomeCriatura,habilidadeCriatura,energiaCriatura,nomeEncanto,acaoAtributo,nomeAtributo,qtdAtributo) {
	if (confirm("Você deseja usar o encanto "+nomeEncanto+"?")) {
		acontecerIndice_encanto(nomeEncanto);
		acontecerIndice_atributo("adiciona","habilidade",3);
		acontecerIndice_luta(nomeCriatura,habilidadeCriatura,energiaCriatura);
		acontecerIndice_atributo("retira","habilidade",3);
	} else {
		acontecerIndice_luta(nomeCriatura,habilidadeCriatura,energiaCriatura);
	};
};
function acontecerIndice_luta_dupla(nomeCriatura,habilidadeCriatura,energiaCriatura,nomeCriatura2,habilidadeCriatura2,energiaCriatura2) {
	acontecerIndice_luta(nomeCriatura,habilidadeCriatura,energiaCriatura);
	acontecerIndice_luta(nomeCriatura2,habilidadeCriatura2,energiaCriatura2);
};
function acontecerIndice_luta_aliado(nomeCriatura,habilidadeCriatura,energiaCriatura,nomeCriatura2,habilidadeCriatura2,energiaCriatura2) {
	alert("Seu aliado é "+nomeCriatura2+" / Habilidade: "+habilidadeCriatura2+" / Energia: "+energiaCriatura2+"!");
	alert("O aliado enfrentará "+nomeCriatura+" / Habilidade: "+habilidadeCriatura+" / Energia: "+energiaCriatura);
	$('.imgDados').show();
	while (energiaCriatura > 0) {
		var ataqueJogador = valorHabilidade + rolarDoisDados();
		var ataqueAliado = habilidadeCriatura2 + rolarDoisDados();
		var ataqueCriatura = habilidadeCriatura + rolarDoisDados();
		if (rolarUmDado % 2 === 0) {
			if (ataqueCriatura > ataqueJogador) {
				alert("Força de Ataque Jogador: "+ataqueJogador+" < "+ataqueCriatura+" :Força de Ataque "+nomeCriatura+", Você sofreu 2 de dano!");
				acontecerIndice_atributo("retira","energia",2);
				if (confirm("Você deseja testar a sua sorte, para reduzir o dano?")) {
					acontecerIndice_atributo("retira","sorte",1);
					var resultado = rolarDoisDados();
					if (resultado > valorSorte) {
						alert("Você não obteve sorte, pois tirou "+resultado+" nos dados e sua sorte é "+valorSorte+"!");
						acontecerIndice_atributo("retira","energia",1);
						if (valorEnergia <= 0) {
							acontecerIndice(399);
							return;
						};
					} else {
						alert("Você obteve sorte, pois tirou "+resultado+" nos dados e sua sorte é "+valorSorte+"!");
						acontecerIndice_atributo("adiciona","energia",1);
						if (valorEnergia <= 0) {
							acontecerIndice(399);
							return;
						};
					};
				};
				if (valorEnergia <= 0){
					acontecerIndice(399);
					return;
				};
			} else if (ataqueCriatura < ataqueJogador) {
				energiaCriatura -= 2;
				if (confirm("Você deseja testar a sua sorte, para causar mais dano?")) {
					acontecerIndice_atributo("retira","sorte",1);
					var resultado = rolarDoisDados();
					if(resultado > valorSorte) {
						alert("Você não obteve sorte, pois tirou "+resultado+" nos dados e sua sorte é "+valorSorte+"!");
						energiaCriatura += 1;
					} else {
						alert("Você obteve sorte, pois tirou "+resultado+" nos dados e sua sorte é "+valorSorte+"!");
						energiaCriatura -= 2;
					};
				};
				alert("Força de Ataque Jogador: "+ataqueJogador+" > "+ataqueCriatura+" :Força de Ataque "+nomeCriatura+", "+nomeCriatura+" sofreu 2 de dano!");
			};
		} else {
			if (ataqueCriatura > ataqueAliado) {
				energiaCriatura2 -= 2;
				alert("Força de Ataque "+nomeCriatura2+": "+ataqueAliado+" < "+ataqueCriatura+" :Força de Ataque "+nomeCriatura2+", "+nomeCriatura2+" sofreu 2 de dano!");
			} else if (ataqueCriatura < ataqueAliado) {
				energiaCriatura -= 2;
				alert("Força de Ataque "+nomeCriatura2+": "+ataqueAliado+" > "+ataqueCriatura+" :Força de Ataque "+nomeCriatura+", "+nomeCriatura+" sofreu 2 de dano!");
			};
		};
		alert("Jogador / habilidade: "+valorHabilidade+" / Energia: "+valorEnergia+" - "+nomeCriatura+" / habilidade: "+habilidadeCriatura+" / Energia: "+energiaCriatura+" - "+nomeCriatura2+" / habilidade: "+habilidadeCriatur2+" / Energia: "+energiaCriatura2);		
	};
	alert("O aliado derrotou "+nomeCriatura+"!");
	$('.imgDados').hide();
};
function acontecerIndice_luta_tripla(nomeCriatura,habilidadeCriatura,energiaCriatura,nomeCriatura2,habilidadeCriatura2,energiaCriatura2,nomeCriatura3,
				     habilidadeCriatura3,energiaCriatura3) {
	acontecerIndice_luta(nomeCriatura,habilidadeCriatura,energiaCriatura);
	acontecerIndice_luta(nomeCriatura2,habilidadeCriatura2,energiaCriatura2);
	acontecerIndice_luta(nomeCriatura3,habilidadeCriatura3,energiaCriatura3);
};
function acontecerIndice_luta_item(nomeCriatura,habilidadeCriatura,energiaCriatura,acaoItem,nomeItem) {
	acontecerIndice_item(acaoItem,nomeItem);
	acontecerIndice_luta(nomeCriatura,habilidadeCriatura,energiaCriatura);
};
function acontecerIndice_atributo(acaoAtributo,nomeAtributo,qtdAtributo) {
	if ((qtdAtributo === "tudo") && (acaoAtributo === "adiciona")){
		switch (nomeAtributo) {
    			case "habilidade":
				qtdAtributo = $('.inicial-habilidade').text();
				break;
    			case "energia":
				qtdAtributo = $('.inicial-energia').text();
				break;
    			case "sorte":
				qtdAtributo = $('.inicial-sorte').text();
				break;
    			case "magia":
				qtdAtributo = $('.inicial-magia').text(); 
				break;
    			default:
				qtdAtributo = $('.inicial-ouro').text(); 
				break;
		};
	};
	if ((qtdAtributo === "tudo") && (acaoAtributo === "retira")){
		switch (nomeAtributo) {
    			case "habilidade":
				qtdAtributo = valorHabilidade;
				break;
    			case "energia":
				qtdAtributo = valorEnergia;
				break;
    			case "sorte":
				qtdAtributo = valorSorte;
				break;
    			case "magia":
				qtdAtributo = valorMagia
				break;
    			default:
				qtdAtributo = valorOuro;
				break;
		};
	};
	if (acaoAtributo === "retira") {
		switch (nomeAtributo) {
    			case "habilidade":
				valorHabilidade -= qtdAtributo;
				if (valorHabilidade <= 0){
					valorHabilidade = 0;
					return;
				};
				$('.valor-habilidade').text(valorHabilidade);
				break;
    			case "energia":
				valorEnergia -= qtdAtributo;
				if (valorEnergia <= 0){
					valorEnergia = 0;
					return;
				};
				$('.valor-energia').text(valorEnergia);
				break;
    			case "sorte":
				valorSorte -= qtdAtributo;
				if (valorSorte <= 0){
					valorSorte = 0;
					return;
				};
				$('.valor-sorte').text(valorSorte);
				break;
    			case "magia":
				valorMagia -= qtdAtributo;
				if (valorMagia <= 0){
					valorMagia = 0;
					return;
				};
				$('.valor-magia').text(valorMagia);
				break;
    			default:
				valorOuro -= qtdAtributo;
				if (valorOuro <= 0){
					valorOuro = 0;
					return;
				};
				$('.valor-ouro').text(valorOuro);
				break;
		};
	} else {
		switch (nomeAtributo) {
    			case "habilidade":
				valorHabilidade += qtdAtributo;
				$('.valor-habilidade').text(valorHabilidade);
				break;
    			case "energia":
				valorEnergia += qtdAtributo;
				$('.valor-energia').text(valorEnergia);
				break;
    			case "sorte":
				valorSorte += qtdAtributo;
				$('.valor-sorte').text(valorSorte);
				break;
    			case "magia":
				valorMagia += qtdAtributo;
				$('.valor-magia').text(valorMagia);
				break;
    			default:
				valorOuro += qtdAtributo;
				$('.valor-ouro').text(valorOuro);
				break;
		};
	};		 	
	alert("Você "+acaoAtributo+" "+qtdAtributo+" de "+nomeAtributo+"!");
};
function acontecerIndice_atributo_teste(acaoAtributo,nomeAtributo,qtdAtributo,nomeAtributoTeste,opcaoSucesso,opcaoFalha) {
	acontecerIndice_atributo(acaoAtributo,nomeAtributo,qtdAtributo);
	if (valorEnergia <= 0){
		acontecerIndice(399);
		return;
	};
	acontecerIndice_teste(nomeAtributoTeste,opcaoSucesso,opcaoFalha);
};
function acontecerIndice_atributo_item(acaoAtributo,nomeAtributo,qtdAtributo,acaoItem,nomeItem) {
	acontecerIndice_atributo(acaoAtributo,nomeAtributo,qtdAtributo);
	if (valorEnergia <= 0){
		acontecerIndice(399);
		return;
	};
	acontecerIndice_item(acaoItem,nomeItem);
};
function acontecerIndice_atributo_itens(acaoAtributo,nomeAtributo,qtdAtributo,acaoItem,nomeItem,acaoItem2,nomeItem2) {
	acontecerIndice_atributo(acaoAtributo,nomeAtributo,qtdAtributo);
	if (valorEnergia <= 0){
		acontecerIndice(399);
		return;
	};
	acontecerIndice_item(acaoItem,nomeItem);
	acontecerIndice_item(acaoItem2,nomeItem2);
};
function acontecerIndice_atributo_escolha(acaoAtributo,nomeAtributo) {
	var qtdAtributo = prompt("Você deve informar quanto de ouro para retirar!");
	acontecerIndice_atributo(acaoAtributo,nomeAtributo,qtdAtributo);
	if (valorEnergia <= 0){
		acontecerIndice(399);
		return;
	};
};
function acontecerIndice_atributo_duplo(acaoAtributo,nomeAtributo,qtdAtributo,acaoAtributo2,nomeAtributo2,qtdAtributo2) {
	acontecerIndice_atributo(acaoAtributo,nomeAtributo,qtdAtributo);
	if (valorEnergia <= 0){
		acontecerIndice(399);
		return;
	};
	acontecerIndice_atributo(acaoAtributo2,nomeAtributo2,qtdAtributo2);
	if (valorEnergia <= 0){
		acontecerIndice(399);
		return;
	};
};
function acontecerIndice_atributo_triplo(acaoAtributo,nomeAtributo,qtdAtributo,acaoAtributo2,nomeAtributo2,qtdAtributo2,acaoAtributo3,nomeAtributo3,
				         qtdAtributo3) {
	acontecerIndice_atributo(acaoAtributo,nomeAtributo,qtdAtributo);
	if (valorEnergia <= 0){
		acontecerIndice(399);
		return;
	};
	acontecerIndice_atributo(acaoAtributo2,nomeAtributo2,qtdAtributo2);
	if (valorEnergia <= 0){
		acontecerIndice(399);
		return;
	};
	acontecerIndice_atributo(acaoAtributo3,nomeAtributo3,qtdAtributo3);
	if (valorEnergia <= 0){
		acontecerIndice(399);
		return;
	};
};
function acontecerIndice_modificador(acaoAtributo,nomeAtributo,qtdAtributo,nomeEncanto) {
	if (confirm("Você deseja usar o encanto "+nomeEncanto+"?")) {
		acontecerIndice_encanto(nomeEncanto);
	} else {
		acontecerIndice_atributo(acaoAtributo,nomeAtributo,qtdAtributo);
		if (valorEnergia <= 0){
			acontecerIndice(399);
			return;
		};
	};
};
function acontecerIndice_facadas(acaoAtributo,nomeAtributo,calculo) {
	$('.imgDados').show();
	var calculando = rolarUmDado();
	alert(calculando);
	if (calculando < 4) {
		calculando = calculando * 2;
			alert(calculando);
		acontecerIndice_atributo(acaoAtributo,nomeAtributo,calculando);
		if (valorEnergia <= 0){
			acontecerIndice(399);
			return;
		};
	} else {
		alert("Nenhuma faca o acertou!");
	};
	$('.imgDados').hide();
};
function acontecerIndice_fruta(acaoAtributo,nomeAtributo,qtdAtributo,consequencia) {
	acontecerIndice_atributo(acaoAtributo,nomeAtributo,qtdAtributo);
	if (valorEnergia <= 0){
		acontecerIndice(399);
		return;
	};
	conseguenciaAtiva = true;
	alert("Você "+consequencia+"!");
};
function acontecerIndice_se(condicao) {
	$('.opcoes').hide();
	if (qtdLevitacao > 0) {
		$('#opcao1').show();
		alert("Por você ter o encanto "+condicao+" você pode ir para o indice 103");
	} else {
		acontecerIndice(399);
	};
};
function carregandoPagina(tempo) {
	$('#loader').show();
	$('.comecar').hide();
    	setTimeout(mostrarPagina, tempo);
}
function mostrarPagina() {
  	$('#loader').hide();
  	$('.comecar').show();
}