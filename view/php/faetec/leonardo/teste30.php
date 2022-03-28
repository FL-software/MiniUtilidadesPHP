<html>
	<head>
		<title>Teste PHP</title>
	</head>
	<body>
		<?php
           function soma($valor1, $valor2)
           {
               $resultado = $valor1 + $valor2;

               return ($resultado);
           }
           
           $x = soma(7, 8);

           echo($x);
		?>
	</body>
</html>