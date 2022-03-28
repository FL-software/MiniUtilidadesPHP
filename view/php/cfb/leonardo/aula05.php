<?php
    //IF-ELSE
    $nota = 40;

    if($nota >= 70){
        echo "<font color=blue>Aprovado</font>";
    }else if($nota >= 50){
        echo "<font color=orange>Recuperação</font>";
    }else{
        echo "<font color=red>Reprovado</font>";
    }
    
    if (($nota >= 40) & ($nota <= 60)){
        echo "<hr/>Aluno selecionado";
    }else{
        echo "<hr/>Aluno fora da faixa";
    }
?>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <title>Aula 5 de PHP - Condicional IF-ELSE</title>
    </head>
    <body>

    </body>
</html>