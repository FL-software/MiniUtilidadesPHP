<?php
    $i = 0; 
    $tam = 5;
    $vet = array($tam);
    
    for($i = 0; $i < $tam; $i++) {
        echo "Valor de i: $i<br/>";
    }

    echo "--------------------------------------<br/>";
    
    for($i = 0; $i < $tam; $i++) {
        $vet[$i] = $i*2;
    }

    echo "<br/>";    
    
    for($i = 0; $i < 240; $i++) {
        echo "-";
    }

    echo "<br/><br/>";

    for($i = 0; $i < $tam; $i++) {
        echo "Valor da posição $i: $vet[$i]<br/>";
    }
?>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <title>Aula 9 de PHP - Loop FOR</title>
    </head>
    <body>
    </body>
</html>