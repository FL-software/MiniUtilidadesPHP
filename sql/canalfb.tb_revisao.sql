-- canalfb.tb_revisao definition

CREATE TABLE `tb_revisao` (
  `codigo` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(30) NOT NULL,
  `senha` varchar(20) NOT NULL,
  `sexo` varchar(1) NOT NULL,
  `esporte` varchar(12) NOT NULL,
  `tcarro` tinyint(1) NOT NULL DEFAULT '0',
  `tmoto` tinyint(1) NOT NULL DEFAULT '0',
  `tonibus` tinyint(1) NOT NULL DEFAULT '0',
  `comentario` varchar(255) NOT NULL,
  PRIMARY KEY (`codigo`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;