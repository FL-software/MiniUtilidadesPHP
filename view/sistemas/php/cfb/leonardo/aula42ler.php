<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <title>Aula 42 de PHP - Trabalhando com Arquivos - Parte 2 - Livro de visitas</title>
    </head>
    <body>
        <?php            
            $arquivo  = fopen("aula42visitas.txt", "r");

            while(!feof($arquivo)){
                echo fgets($arquivo, 4096);
                echo "<br/>".fgets($arquivo, 100);
                echo "<br/><br/>";
            }

            fclose($arquivo);
        ?>
        <hr/>
        <a href="aula42.html" target="_self">Voltar</a>
    </body>
</html>