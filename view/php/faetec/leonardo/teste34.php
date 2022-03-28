<html>
	<head>
		<title>Teste PHP</title>
	</head>
	<body>
		<?php
           $a = & $b;
           $b = 100;

           echo $a;
		?>
	</body>
</html>