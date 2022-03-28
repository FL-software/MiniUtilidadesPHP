<?php
    $dia = date("d");
    $mes = date("m");
    $ano = date("Y"); //y: dois digitos - Y: quatro digitos
    $meses = array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");

    echo $dia." de ".$meses[$mes - 1]." de ".$ano."<br/>";
?>