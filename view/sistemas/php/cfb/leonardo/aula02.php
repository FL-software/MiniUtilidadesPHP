<?php
    //Variáveis
    $vnome = "Bruno";
    $vnum = 10;
    $vnum2 = 20.5;
    $vsoma = 0;

    //Constantes
    define("cnome","Bruno");
    define("ver", PHP_VERSION);
    define("dir", __DIR__);

    echo "Nome: $vnome<br/>";

    $vnome = "Campos";

    echo "Nome: $vnome<br/>";

    $vnome = "Bruno";

    echo "Nome: ".$vnome."<br/>";

    $vsoma = 10 + 20;

    echo "Soma: $vsoma<br/>";

    echo "<hr/>";

    echo "Constante cnome: ".cnome."<br/>";

    echo "Nome do arquivo: ".__FILE__."<br/>";

    echo "Versão do PHP: ".ver."<br/>";

    echo "Pasta: ".dir."<br/>";

    echo "Versão do SO: ".PHP_OS."<br/>";

    echo "Número da linha: ".__LINE__."<br/>";
?>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <title>Aula 2 de PHP - Constantes e Variáveis</title>
    </head>
    <body>

    </body>
</html>