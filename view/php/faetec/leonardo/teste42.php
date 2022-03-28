<?php
    if (isset($_POST['usuario']))
    {
        $user = $_POST['usuario'];

        setcookie("usuario", $user, time() + 3600);

        //Expira em uma hora
        $mensagem = "Usuario $user conectado. Expira em uma hora<p>";
    }
    else
    {
        $mensagem = "Digite o seu nome de usuário<p>";
    }
    
    echo $mensagem;
?>
<html>
	<head>
		<title>Teste PHP</title>
	</head>
	<body>
        <form method="post" action="teste42.php">
            Nome de Usuário: <input type="text" name="usuario">
            <br>
            <input type="submit" value="Enviar">
        </form>
	</body>
</html>