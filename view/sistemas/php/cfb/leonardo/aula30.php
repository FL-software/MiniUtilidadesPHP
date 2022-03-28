<?php
    include "aula29conexao.inc";

    $vnome = "zig";
    $vuser = "ziccao";
    $vsenha = "zig123";
    $vmail = "canalfesssorbruno@gmail.com";
    $vtel = "0800";
    $vst = 1;
    $vobs =  "tudo ok zig";
    $sql = "INSERT INTO tb_cadastro VALUES (NULL, '$vnome', '$vuser', '$vsenha', '$vmail', '$vtel', $vst, '$vobs')";
    $res = mysqli_query($con, $sql);
    $num = mysqli_affected_rows($con);

    echo "$num registro inserido.";
     
    mysqli_close($con);
?>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <title>Aula 30 de PHP - MySQL: Comando Insert</title>
    </head>
    <body>
    </body>
</html>