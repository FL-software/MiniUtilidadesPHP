<html>
	<head>
		<title>Teste PHP</title>
	</head>
	<body>
		<?php
            $FUNCIONARIOs = array(0 => "José",
                                  1 => "João",
                                  2 => "Maria",
                                  3 => "Pedro",
                                  4 => "Carla");

            echo "<b>Funcionários</b>";
            echo "<ul>";
            echo "<li>".$FUNCIONARIOs[0];
            echo "<li>".$FUNCIONARIOs[1];
            echo "<li>".$FUNCIONARIOs[3];
            echo "</ul><p>";
            echo "<b>Funcionárias</b>";
            echo "<ul>";
            echo "<li>".$FUNCIONARIOs[2];
            echo "<li>".$FUNCIONARIOs[4];
            echo "</ul>";
		?>
	</body>
</html>