<?php
    include "aula29conexao.inc";

    mysqli_set_charset($con, 'utf8');

    $vnome  = $_GET["fnome"]; 
    $vuf    = $_GET["fuf"]; 
    $vt_tmp = Array(0, 0, 0, 0);

    echo "Nome: $vnome - Estado: $vuf<br/>";
    echo "Transportes selecionados:<br/>";

    foreach ($_GET["ftransp"] as $tra) {
        $vt_tmp[$tra - 1] = 1;
        
        echo "$tra<br/>";
    }
        
    echo "<hr/>";

    $sql = "INSERT INTO tb_pesquisa VALUES (NULL, '$vnome', '$vuf', $vt_tmp[0], $vt_tmp[1], $vt_tmp[2], $vt_tmp[3])";
    $res = mysqli_query($con, $sql);

    echo "Pesquisa gravada";

    mysqli_close($con);
?>