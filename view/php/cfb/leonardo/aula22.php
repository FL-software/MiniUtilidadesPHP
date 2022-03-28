<?php
    abstract class CarroBase {
        public $potencia;
        public $velMax;
        public $portas;
        public $ligado = false;

        function liga() {
            $this->ligado = true;
        }

        abstract function teste();

        function desligar() {
            $this->ligado = false;
        }

        function status() {
            echo "<hr/>";
            echo "Potência: ".$this->potencia;
            echo "<br/>Velocidade Máxima: ".$this->velMax;
            echo "<br/>Portas: ".$this->potencia;
            echo "<br/>";

            if ($this->ligado) {
                echo "Carro ligado";
            } else {
                echo "Carro desligado";
            }

            echo "<hr/>";
        }
    }

    class Carro extends CarroBase {
        function Carro($pt, $vm, $po) {
            $this->potencia = $pt;
            $this->velMax = $vm;
            $this->portas = $po;
            $this->status();
        }

        function teste() {
        }
    }

    $carro1 = new Carro(150, 280, 4);
    $carro2 = new Carro(100, 180, 4);
    $carro3 = new Carro(80, 160, 2);
    $carro4 = new Carro(300, 380, 4);

    $carro1->liga();
    $carro1->status();    
?>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <title>Aula 22 de PHP - Classes parte 3 (abstract)</title>
    </head>
    <body>
    </body>
</html>