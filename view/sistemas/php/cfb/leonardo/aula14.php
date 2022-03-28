<?php
    function aula($num) {
        if($num != 0) {
            echo "Função aula com valor $num<br/>";

            aula($num - 1);
        }
    }

    //aula(10);

    //4! = 3x3x2x1 = 24
    //3! = 3x2x1 = 6

    function fat($num) {
        if ($num < 0) {
            return - 1;
        }

        if ($num <= 1) {
            return 1;
        }

        return $num * fat($num - 1);
    }

    echo "Fatorial de -5: ".fat(-5);
?>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <title>Aula 14 de PHP - Funções Recursivas</title>
    </head>
    <body>
    </body>
</html>