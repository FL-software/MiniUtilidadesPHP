<?php
    class Carro {
        var $tipo; //1 = Passei /2 = Esporte /3 = Utilitário
        var $velMax;
        var $nome;
        var $liga;
        var $vel = 0;

        function Carro($tp, $no){
            $this->liga = false;
            $this->tipo = $tp;
            $this->nome = $no;

            if ($tp == 1) {
                $this->velMax = 160;
            } else if ($tp == 2) {  
                $this->velMax = 300;
            } else {  
                $this->velMax = 100;
            }            
        }

        function id() {
            echo "<hr/>";
            echo "Nome do carro: ".$this->nome;
            echo "<br/>Tipo do carro: ".$this->tipo;
            echo "<br/>Velocidade Máxima: ".$this->velMax;
            echo "<br/>Velocidade Atual: ".$this->vel;

            if($this->liga) {
                echo "<br/>Este carro está LIGADO";
            } else {
                echo "<br/>Desligado";
            }
        }

        function ligar() {
            $this->liga = true;
        }

        function desligar() {
            $this->liga = false;
        }

        function velocidade($vl) {
            if ($vl > $this->velMax){
                $this->vel = $this->velMax;
            } else {
                $this->vel = $vl;
            }
        }
    }

    $carro1 = new Carro(2, "Rapid");
    $carro2 = new Carro(3, "Carregador");
    $carro3 = new Carro(1, "Basic");
    $carro4 = new Carro(2, "Veloz"); 
    $carro5 = new Carro(2, "Flecha");

    $carro1->ligar();
    $carro3->ligar();
    $carro5->ligar();

    $carro5->velocidade(400);

    $carro3->desligar();
    
    $carro1->id();
    $carro2->id();
    $carro3->id();
    $carro4->id();
    $carro5->id();
?>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <title>Aula 20 de PHP - Classes parte 1</title>
    </head>
    <body>
    </body>
</html>