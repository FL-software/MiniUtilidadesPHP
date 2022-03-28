<?php
    $i = 0; 
    $tam = 5;
    $vet = array($tam);

    while($i < $tam) {
        echo "Valor da variável i: $i<br/>";

        $i++; // $i = $i + 1;
    }

    echo "<br/><hr/><br/>";

    $i = 0; 

    while($i < $tam) {

        $vet[$i] = "PHP";
        $i++;
    }

    $i = 0; 

    while($i < $tam) {
        echo "$vet[$i]<br/>";

        $i++;
    }
?>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <title>Aula 7 de PHP - Loop While</title>
    </head>
    <body>
    </body>
</html>