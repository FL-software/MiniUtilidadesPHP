-- canalfb.tb_transportes definition

CREATE TABLE `tb_transportes` (
  `cod` int(11) NOT NULL,
  `transporte` varchar(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

INSERT INTO tb_transportes (cod, transporte) VALUES(1, 'Carro');
INSERT INTO tb_transportes (cod, transporte) VALUES(2, 'Avião');
INSERT INTO tb_transportes (cod, transporte) VALUES(3, 'Navio');
INSERT INTO tb_transportes (cod, transporte) VALUES(4, 'Trem');