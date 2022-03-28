
<html>
	<head>
		<title>Página PHP</title>
	</head>
	<body>
        <?php
            if (isset($_GET['nome']) && isset($_GET['sobrenome']))
            {
                $nome = $_GET['nome'];
                $sobrenome = $_GET['sobrenome'];
            
                echo "O nome selecionado foi $nome  $sobrenome <p>";
            }
            else
            {    
                echo "Selecione um nome:<p>";
            }
        ?>
        <a href="teste44.php?nome=Pedro&sobrenome=Silva">Pedro Silva</a><br>
        <a href="teste44.php?nome=Maria&sobrenome=Santos">Maria Santos</a><br>
        <a href="teste44.php">Voltar</a><br>
	</body>
</html>