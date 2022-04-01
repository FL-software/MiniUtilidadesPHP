-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 01-Abr-2022 às 19:54
-- Versão do servidor: 5.7.17
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mini_utilidades`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_clientes`
--

CREATE TABLE `tb_clientes` (
  `codigo` int(6) NOT NULL,
  `nome` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `telefone` varchar(15) NOT NULL,
  `cidade` varchar(30) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `tb_clientes`
--

INSERT INTO `tb_clientes` (`codigo`, `nome`, `email`, `telefone`, `cidade`) VALUES
(12, 'Bruno', 'bruno@gmail.com', '21999999999', 'Rio de Janeiro'),
(13, 'Bruno Santos', 'brunosantos@gmail.com', '21999999988', 'Rio de Janeiro'),
(14, 'Bruno Santos', 'bruno22@gmail.com', '21999999977', 'Rio de Janeiro');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tb_clientes`
--
ALTER TABLE `tb_clientes`
  ADD PRIMARY KEY (`codigo`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `telefone` (`telefone`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tb_clientes`
--
ALTER TABLE `tb_clientes`
  MODIFY `codigo` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
