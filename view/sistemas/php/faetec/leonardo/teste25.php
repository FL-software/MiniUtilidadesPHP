<html>
	<head>
		<title>Teste PHP</title>
	</head>
	<body>
		<?php
           $cor = "branco";

           if ($cor == "vermelho")
           {
               echo("A variável contém o valor 'vermelho'.");
           }
           else if ($cor == "azul")
           {
               echo("A variável contém o valor 'azul'.");
           }
           else if ($cor == "amarelo")
           {
               echo("A variável contém o valor 'amarelo'.");
           }
           else
           {
               echo("O valor da variável não foi identificado");
           }
		?>
	</body>
</html>