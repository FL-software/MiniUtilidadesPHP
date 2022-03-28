<?php
    class aula {
        //Private e Protected
        protected $var1 = "Bom dia";
        protected $var2 = "canalfessorbruno@gmail.com";
        protected $var3 = "www.webveste.com.br";

        function escreve() {
            echo "<br/>Método da classe aula";
            echo "<br/>".$this->var1;
            echo "<br/>".$this->var2;
            echo "<br/>".$this->var3;
        }
    }

    //Herança
    class canal extends aula {
        var $vc1 = "Curso de PHP";
        var $vc2 = "Bruno";

        function escreve2() {
            echo "<br/>Método da classe canal";
            echo "<br/>".$this->vc1;
            echo "<br/>".$this->vc2;          
            echo "<br/>".$this->var1;
            echo "<br/>".$this->var2;
            echo "<br/>".$this->var3;
        }
    }

    $aulaOBJ = new aula();

    $aulaOBJ->escreve();

    $canalOBJ = new canal();

    echo "<hr/>";

    //$canalOBJ->escreve();
    $canalOBJ->escreve2();
 
    echo "<hr/>";            
    //echo "<br/>".$aulaOBJ->var1;
    //echo "<br/>".$aulaOBJ->var2;
    //echo "<br/>".$aulaOBJ->var3;
?>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <title>Aula 21 de PHP - Classes parte 2 (herança)</title>
    </head>
    <body>
    </body>
</html>