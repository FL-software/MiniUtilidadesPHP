<html></html>
	<head>
		<title>Teste PHP</title>
	</head>
	<body>
		<?php
            $x = 5;
            $resultado = ($x == 8);
            
            echo "<br><b>x = 5 | x == 8:</b><br><br>";
            
            if ($resultado == 1)
            {
                echo "verdadeiro";
            }
            else
            {
                echo "falso";
            }

            echo "<br>";

            $x = 5;
            $resultado = ($x != 8);
            
            echo "<br><b>x = 5 | x != 8:</b><br><br>";
            
            if ($resultado == 1)
            {
                echo "verdadeiro";
            }
            else
            {
                echo "falso";
            }
            
            echo "<br>";

            $x = 5;
            $resultado = ($x > 8);
            
            echo "<br><b>x = 5 | x > 8:</b><br><br>";
            
            if ($resultado == 1)
            {
                echo "verdadeiro";
            }
            else
            {
                echo "falso";
            }
            
            echo "<br>";

            $x = 5;
            $resultado = ($x <> 8);
            
            echo "<br><b>x = 5 | x < 8:</b><br><br>";
            
            if ($resultado == 1)
            {
                echo "verdadeiro";
            }
            else
            {
                echo "falso";
            }
            
            echo "<br>";

            $x = 5;
            $resultado = ($x >= 8);
            
            echo "<br><b>x = 5 | x >= 8:</b><br><br>";
            
            if ($resultado == 1)
            {
                echo "verdadeiro";
            }
            else
            {
                echo "falso";
            }
            
            echo "<br>";

            $x = 5;
            $resultado = ($x <= 8);
            
            echo "<br><b>x = 5 | x <= 8:</b><br><br>";
            
            if ($resultado == 1)
            {
                echo "verdadeiro";
            }
            else
            {
                echo "falso";
            }
            
            echo "<br>";
		?>
	</body>
</html>