<html>
	<head>
		<title>Teste PHP</title>
	</head>
	<body>
		<?php
            $x = 6;
            $y = 3;
            $resultado = ($x < 10 && $y > 1);
            
            echo "<br><b>x = 6 e y = 3 | x < 10 && y > 1:</b><br><br>";
            
            if ($resultado == 1)
            {
                echo "verdadeiro";
            }
            else
            {
                echo "falso";
            }

            echo "<br>";

            $x = 6;
            $y = 3;
            $resultado = ($x == 5 || $y == 5);
            
            echo "<br><b>x = 6 e y = 3 | x == 5 || y == 5:</b><br><br>";
            
            if ($resultado == 1)
            {
                echo "verdadeiro";
            }
            else
            {
                echo "falso";
            }

            echo "<br>";

            $x = 6;
            $y = 3;
            $resultado = (!($x == $y));
            
            echo "<br><b>x = 6 e y = 3 | !(x == y):</b><br><br>";
            
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
            $y = 5;
            $resultado = ($x == 5 XOR $y == 5);
            
            echo "<br><b>x = 5 e y = 5 | x == 5 XOR y == 5:</b><br><br>";
            
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