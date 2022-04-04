CREATE TABLE `tb_clientes` (
  `codigo` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;COMMIT,
  `nome` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `telefone` varchar(15) NOT NULL,
  `cidade` varchar(30) NOT NULL
  PRIMARY KEY (`codigo`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `telefone` (`telefone`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

INSERT INTO `tb_clientes` (`codigo`, `nome`, `email`, `telefone`, `cidade`) VALUES
(12, 'Bruno', 'bruno@gmail.com', '21999999999', 'Rio de Janeiro'),
(13, 'Bruno Santos', 'brunosantos@gmail.com', '21999999988', 'Rio de Janeiro'),
(14, 'Bruno Santos', 'bruno22@gmail.com', '21999999977', 'Rio de Janeiro');