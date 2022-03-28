<html>
	<head>
		<title>Página PHP</title>
	</head>
	<body>
        <?php
            if (isset($_POST['pnome']) && isset($_POST['snome']))
            {
                $pnome = $_POST['pnome'];
                $snome = $_POST['snome'];
            
                echo "Olá $pnome  $snome <p>";
            }
            else
            {    
                echo "Digite um nome:<p>";
            }
        ?>
        <form method="post" action="teste45.php">
            Primeiro Nome: <input type="text" name="pnome">
            <br><br>
            Sobrenome: <input type="text" name="snome">
            <br><br>
            <input type="submit" value="Enviar">
        </form>
	</body>
</html>