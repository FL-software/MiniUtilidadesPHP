-- canalfb.tb_revisao definition

CREATE TABLE `tb_pesquisa` (
  `reg` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(20) NOT NULL,
  `uf` varchar(2) NOT NULL,
  `Carro` tinyint(4) NOT NULL,
  `Aviao` tinyint(4) NOT NULL,
  `Navio` tinyint(4) NOT NULL,
  `Trem` tinyint(4) NOT NULL,
  PRIMARY KEY (`reg`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;