<?php
    include "aula29conexao.inc";

    $vcat1 = $_POST["F_Cat1"];
    $vcat2 = $_POST["F_Cat2"];
    $sql  = "SELECT * FROM tb_produtos WHERE cat = $vcat1 OR cat = $vcat2";
    $res  = mysqli_query($con, $sql);
    $lin  = mysqli_num_rows($res);

    echo "$lin registros encontrados";
    
    mysqli_close($con);
?>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <title>Aula 32 de PHP - MySQL: Comando Select</title>
    </head>
    <body>
        </br>
        <a href="aula32Formulario.html">Voltar</a>
    </body>
</html>