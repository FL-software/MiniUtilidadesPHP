-- canalfb.tb_cadastro definition

CREATE TABLE `tb_cadastro` (
  `cod` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(30) NOT NULL,
  `username` varchar(15) NOT NULL,
  `senha` varchar(15) NOT NULL,
  `email` varchar(40) NOT NULL,
  `telefone` varchar(13) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '0',
  `obs` varchar(200) NOT NULL,
  PRIMARY KEY (`cod`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;