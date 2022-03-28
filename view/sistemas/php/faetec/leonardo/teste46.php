<html>
	<head>
		<title>Página PHP</title>
	</head>
	<body>
        <?php
            if (isset($_GET['pnome']) && isset($_GET['snome']))
            {
                $pnome = $_GET['pnome'];
                $snome = $_GET['snome'];
            
                echo "Olá $pnome  $snome <p>";
            }
            else
            {    
                echo "Digite um nome:<p>";
            }
        ?>
        <form method="get" action="teste46.php">
            Primeiro Nome: <input type="text" name="pnome">
            <br><br>
            Sobrenome: <input type="text" name="snome">
            <br><br>
            <input type="submit" value="Enviar">
        </form>
	</body>
</html>