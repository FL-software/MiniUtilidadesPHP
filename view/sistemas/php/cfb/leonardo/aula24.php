<?php
    class Carro {
        public $cor;
        public static $vel = 0;

        function Carro($cr) {
            $this->cor = $cr;
            self::$vel = 0;
        }

        function mudaVel ($vl) {
            self::$vel = $vl;
        }

        function status() {
            echo "<hr/>";
            echo "Cor: ".$this->cor;
            echo "<br/>Velocidade: ".self::$vel;
            echo "<hr/>";
        }
    }

    $car1 = new Carro("Vermelho");
    $car2 = new Carro("Verde");
    $car3 = new Carro("Azul");

    $car1->status();
    $car2->status();
    $car3->status();

    echo "<br/>Velocidade alterada<br/><br/>";

    $car1->mudaVel(100);

    $car1->status();
    $car2->status();
    $car3->status();

    echo "<br/>Velocidade alterada<br/><br/>";

    $car3->mudaVel(230);

    $car1->status();
    $car2->status();
    $car3->status();
?>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <title>Aula 24 de PHP - Classes parte 5 (static)</title>
    </head>
    <body>
    </body>
</html>