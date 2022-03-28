<html>
	<head>
		<title>Teste PHP</title>
	</head>
	<body>
		<?php     
            function soma($a)
            {
                global $b;
                $b = $a + 5;
            }       

            soma(10);

            echo "O valor de 'b' é $b<br>";
		?>
	</body>
</html>