<html>
	<head>
		<title>Teste PHP</title>
	</head>
	<body>
		<?php
           $a = & $b;
           $b = 100;

           unset($b);

           $b = 200;

           echo $a;
		?>
	</body>
</html>