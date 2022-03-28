<html>
	<head>
		<title>Página PHP</title>
	</head>
	<body>
        <?php
            if (isset($_FILES['arquivo']['name']))
            {
                $uploaddir = 'c:\\temp\\';
                $arquivo = $uploaddir.$_FILES['arquivo']['name'];
                            
                if (move_uploaded_file($_FILES['arquivo']['tmp_name'], $arquivo))
                {
                    print "O arquivo foi gravado com sucesso";
                }
                else
                {    
                    print "Erro. O arquivo não foi enviado";
                }
            }
        ?>
        <form enctype="multipart/form-data" action="teste47.php" method="POST">
            <input type="hidden" name="MAX_FILE_SIZE" value="30000">
            Enviar este arquivo: <input name="arquivo" type="file">
            <input type="submit" value="Enviar Arquivo">
        </form>
	</body>
</html>