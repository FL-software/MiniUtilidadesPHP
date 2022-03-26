-- canalfb.tb_produtos definition

CREATE TABLE `tb_produtos` (
  `codigo` varchar(30) NOT NULL,
  `produto` varchar(50) NOT NULL,
  `preco` float NOT NULL,
  `qtde` int(11) NOT NULL,
  `cat` int(11) NOT NULL,
  PRIMARY KEY (`codigo`),
  UNIQUE KEY `produto` (`produto`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

INSERT INTO tb_produtos (codigo, produto, preco, qtde, cat) VALUES('mo22', 'Monitor 22"', 350.0, 250, 1);
INSERT INTO tb_produtos (codigo, produto, preco, qtde, cat) VALUES('mo15', 'Monior 15"', 280.0, 300, 1);
INSERT INTO tb_produtos (codigo, produto, preco, qtde, cat) VALUES('cp40', 'Processador 4.0GHz', 420.9, 100, 1);
INSERT INTO tb_produtos (codigo, produto, preco, qtde, cat) VALUES('cp24', 'Processador 2.4GHz', 298.9, 180, 1);
INSERT INTO tb_produtos (codigo, produto, preco, qtde, cat) VALUES('ms01', 'Mouse Óptico', 45.5, 190, 1);
INSERT INTO tb_produtos (codigo, produto, preco, qtde, cat) VALUES('ms02', 'Mouse Bolinha', 22.49, 50, 1);
INSERT INTO tb_produtos (codigo, produto, preco, qtde, cat) VALUES('tc01', 'Teclado Básico', 15.25, 175, 1);
INSERT INTO tb_produtos (codigo, produto, preco, qtde, cat) VALUES('tc02', 'Teclado Multimídia', 23.9, 110, 1);
INSERT INTO tb_produtos (codigo, produto, preco, qtde, cat) VALUES('cl01', 'Celular de teclas', 198.9, 50, 2);
INSERT INTO tb_produtos (codigo, produto, preco, qtde, cat) VALUES('cl02', 'Celular Touch', 459.9, 89, 2);
INSERT INTO tb_produtos (codigo, produto, preco, qtde, cat) VALUES('tl01', 'Telefone com fio', 59.9, 30, 2);
INSERT INTO tb_produtos (codigo, produto, preco, qtde, cat) VALUES('tl02', 'Telefone sem fio', 175.0, 75, 2);
INSERT INTO tb_produtos (codigo, produto, preco, qtde, cat) VALUES('tl03', 'Telefone sem fio com ramal', 320.2, 130, 2);
INSERT INTO tb_produtos (codigo, produto, preco, qtde, cat) VALUES('ro01', 'Roda aço 14"', 80.0, 130, 3);
INSERT INTO tb_produtos (codigo, produto, preco, qtde, cat) VALUES('ro02', 'Roda Liga 17"', 320.0, 80, 3);