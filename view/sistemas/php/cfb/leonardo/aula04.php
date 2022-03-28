<?php
    //Arrays
    $vet = array(7);
    $vet2 = array("nome"=>"Bruno", "cidade"=>"BH", "curso"=>"PHP");

    $mat = array(
        array("Carro1", 65000), 
        array("Carro2", 35000), 
        array("Carro3", 50000)
    );

    $i = 6;

    echo "Carro A ".$mat[0][0]." - Valor: ".$mat[0][1]."<br/>";
    echo "Carro B ".$mat[1][0]." - Valor: ".$mat[1][1]."<br/>";
    echo "Carro C ".$mat[2][0]." - Valor: ".$mat[2][1]."<br/>";

    $vet[0] = "Carro";
    $vet[1] = "Avião";
    $vet[2] = "Navio";
    $vet[3] = "Moto";
    $vet[4] = "Onibus";
    $vet[5] = 123456;
    $vet[6] = $vet2["nome"];

    echo "Elemento de indice $i = ".$vet[$i]."<br/>";

    echo "Nome: ".$vet2["nome"]." - Cidade: ".$vet2["cidade"]." - Curso: ".$vet2["curso"]."<br/>";
?>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <title>Aula 4 de PHP - Vetores / Arrays</title>
    </head>
    <body>

    </body>
</html>