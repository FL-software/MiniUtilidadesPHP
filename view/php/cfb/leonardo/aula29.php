<?php
    include "aula29conexao.inc";

    $res = mysqli_query($con, "SELECT * FROM tb_cadastro");
    $linhas = mysqli_num_rows($res);

    echo "Encontrados $linhas registros na tabela tb_cadastro";
    
    mysqli_close($con);
?>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <title>Aula 29 de PHP - Executando comandos MySQL</title>
    </head>
    <body>
    </body>
</html>