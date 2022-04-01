<?php
    include "../../conexaoMiniUtilidades.php";

    $vcod = $_GET['fcod'];
    $vnome = $_GET['fnome'];
    $vmail = $_GET['fmail'];
    $vtel = $_GET['ftel'];
    $vcidade = $_GET['fcidade'];

    $sql   = "UPDATE tb_clientes SET nome='$vnome', email='$vmail', telefone='$vtel', cidade='$vcidade' WHERE codigo=$vcod";
    $res   = mysqli_query($con, $sql);
    $linha = mysqli_affected_rows($con);

    if ($linha > 0) {
        echo "Atualizada bem Sucedida!<br/><br/>";
        echo "<a href='pesquisa.php'><button>Pesquisar</button></a>";
        echo "<a href='cadastrarCliente.php'><button>Cadastrar</button></a>";
    }else{
        echo "Não foi possível efetuar a atualização!<br/><br/>";
        echo "<a href='atualizarCliente.php?fcod=".$_GET['fcod']."'><button>Voltar</button></a>";
    }

    mysqli_close($con);
?>   