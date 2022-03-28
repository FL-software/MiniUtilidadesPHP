<?php
    $dia = date("d");
    $mes = date("m");
    $ano = date("Y"); //y: dois digitos - Y: quatro digitos
    $meses = array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");
    $hora = date("H"); //h: 12 horas - H:24 horas
    $minuto = date("i");
    $segundo = date("s");

    echo $dia." de ".$meses[$mes - 1]." de ".$ano."<br/>";
    echo $hora.":".$minuto.":".$segundo;  
?>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <title>Aula 15 de PHP - Manipulação de Data e Hora</title>
    </head>
    <body>
    </body>
</html>