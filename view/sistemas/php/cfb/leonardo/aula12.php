<?php
    function aula() {
        echo "<hr/>Olá mundo<br/>";
        echo "Aula sobre funções<hr/>";
    }

    aula();

    function soma($n1, $n2) {
        $res = $n1 + $n2;

        echo "<br/>A soma de $n1 com $n2 = $res<br/>";
    }

    soma(5, 20);

    function soma2($n1, $n2) {
        $res = $n1 + $n2;

        return $res;
    }

    $so = soma2(10, 5);

    echo "<br/>resultado = $so <br/>";

    $valores = array(1, 3, 5, 7, 9, 12, 6, 4, 20, 18, 19, 34, 2);

    function media($val) {
        $tam = count($val);
        $soma = 0;

        for($i = 0; $i < $tam; $i++) {
            $soma += $val[$i];
        }

        return $soma / $tam;
    }

    $med = media($valores);

    echo "<br/>Media = $med<br/>";
?>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <title>Aula 12 de PHP - Funções</title>
    </head>
    <body>
    </body>
</html>