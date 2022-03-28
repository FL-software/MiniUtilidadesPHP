<html>
	<head>
		<title>Teste PHP</title>
	</head>
	<body>
		<?php
           $i = 1; 
           
           while ($i < 10000)
           {
                echo($i);

                $i *= 2;

                echo(" vezes 2 é igual a $i <br>");
           }
		?>
	</body>
</html>