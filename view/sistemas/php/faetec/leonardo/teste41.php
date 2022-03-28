<html>
	<head>
		<title>Página PHP</title>
	</head>
	<body>
        <?php
            $user = $_COOKIE["usuario"];

            echo "O usuário $user está conectado.";
        ?>
	</body>
</html>