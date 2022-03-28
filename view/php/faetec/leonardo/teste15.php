<html>
	<head>
		<title>Teste PHP</title>
	</head>
	<body>
		<?php     
            function calculaAreaCirculo($raio, $exponenciador)
            {
                return M_PI * pow($raio, $exponenciador);
            }

            $meuRaio = 5;
            $meuExponenciador = 2;
            $area = calculaAreaCirculo($meuRaio, $meuExponenciador);

            echo "<b>Raio</b> = $meuRaio<br>";
            echo "<b>Área</b> = $area<br>";
		?>
	</body>
</html>