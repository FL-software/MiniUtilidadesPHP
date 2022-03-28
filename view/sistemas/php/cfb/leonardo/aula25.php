<?php
    //Final, a palavra reservada final, diz que o método não pode ser sobrescrito
    class CarroBase {
        public $cor;
        public $vel = 0;

        function CarroBase($cr) {
            $this->cor = $cr;
        }

        function status() {
            echo "<hr/>";
            echo "Carro: ".$this->cor;
            echo "<br/>Velocidade: ".$this->$vel;
            echo "<hr/>";
        }

        final function Cor() {
            echo "<hr/>";
            echo "Minha cor: ".$this->cor;
            echo "<br/>Método original<hr/>";
        }
    }

    class Carro extends CarroBase {
        /*
        function Cor() {
            echo "<hr/>";
            echo "Cor: ".$this->cor."<hr/>";
        }
        */
    }

    final class Transp extends CarroBase {
    }

    $car = new Carro("Vermelho");
    $tra = new Transp("Azul");

    $car->Cor();
    $tra->Cor();
?>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <title>Aula 25 de PHP - Classes parte 6 (final)</title>
    </head>
    <body>
    </body>
</html>