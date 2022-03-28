<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <title>Aula 42 de PHP - Trabalhando com Arquivos - Parte 2 - Livro de visitas</title>
    </head>
    <body>
        <?php
            $nome     = $_POST["f_nome"];
            $msg      = $_POST["f_msg"];
            $conteudo = $msg."\r\n".$nome."\r\n";

            $arquivo = fopen("aula42visitas.txt","a");

            fwrite($arquivo, $conteudo);

            echo "Mensagem gravada: $conteudo";

            fclose($arquivo);
        ?>
        <hr/>
        <a href="aula42.html" target="_self">Voltar</a>
    </body>
</html>