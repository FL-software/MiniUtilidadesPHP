<html>
	<head>
		<title>Página PHP</title>
	</head>
	<body>
		<?php
            if (isset($_POST['usuario']))
            {
                $user = $_POST['usuario'];

                setcookie("usuario", $user);

                $mensagem = "Usuario $user conectado.<p>";
            }
            else
            {
                $mensagem = "Digite o seu nome de usuário<p>";
            }
            
            echo $mensagem;
        ?>
        <form method="post" action="teste40.php">
            Nome de Usuário: <input type="text" name="usuario">
            <br>
            <input type="submit" value="Enviar">
        </form>
	</body>
</html>