<html>
	<head>
		<title>Página PHP</title>
	</head>
	<body>
        <?php
            if (isset($_GET['valor']))
            {
                $valor = $_GET['valor'];
            
                echo "Você clicou no link $valor <p>";
            }
            else
            {    
                echo "Clique em um dos links abaixo:<p>";
            }
        ?>
        <a href="teste43.php?valor=1">Link 1</a><br>
        <a href="teste43.php?valor=2">Link 2</a><br>
        <a href="teste43.php?valor=3">Link 3</a><br>
        <a href="teste43.php?valor=4">Link 4</a><br>
        <a href="teste43.php?valor=5">Link 5</a><br>
        <a href="teste43.php">Voltar</a><br>
	</body>
</html>