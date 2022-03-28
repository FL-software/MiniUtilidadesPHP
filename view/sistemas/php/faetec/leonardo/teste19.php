<html>
	<head>
		<title>Teste PHP</title>
	</head>
	<body>
		<?php
            $x = 2;

            echo "<br><b>x = 2 | x + 2:</b><br><br>";
            echo ($x + 2);
            echo "<br>";

            $x = 2;

            echo "<br><b>x = 2 | 5 - x:</b><br><br>";
            echo (5 - $x);
            echo "<br>";
            
            $x = 4;

            echo "<br><b>x = 4 | x * 5:</b><br><br>";
            echo ($x * 5);
            echo "<br>";
            
            $x = 15;

            echo "<br><b>x = 15 | x / 5:</b><br><br>";
            echo ($x / 5);
            echo "<br>";
            
            $x = 10;

            echo "<br><b>x = 10 | x % 8:</b><br><br>";
            echo ($x % 8);
            echo "<br>";
            
            $x = 5;
            $x++;

            echo "<br><b>x = 5 | x++:</b><br><br>";
            echo ($x);
            echo "<br>";
            
            $x = 5;
            $x--;

            echo "<br><b>x = 5 | x--:</b><br><br>";
            echo ($x);
            echo "<br>";
            
            $x = 8;

            echo "<br><b>x = 8 | x:</b><br><br>";
            echo ($x);
            echo "<br>";
            
            $x = 8;
            $x = $x + 10;

            echo "<br><b>x = 8 | x = x + 10:</b><br><br>";
            echo ($x);
            echo "<br>";
            
            $x = 8;
            $x += 10;

            echo "<br><b>x = 5 | x += 10:</b><br><br>";
            echo ($x);
            echo "<br>";
		?>
	</body>
</html>