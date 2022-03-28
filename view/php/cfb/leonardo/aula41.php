<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <title>Aula 41 de PHP - Trabalhando com Arquivos</title>
    </head>
    <body>
        <?php
            //r  = Abre p/leitura, ponteiro no inicio
            //r+ = Abre p/leitura e escrita
            //w  = Abre p/escrita, ponteiro no inicio e zera, se arquivo não existir ele o cria
            //w+ = Abre p/leitura e escrita
            //a  = Abre p/escrita, ponteiro no final, se arquivo não existir ele o cria
            //a+ = Abre p/leitura e escrita
            //x  = Abre p/escrita, ponteiro no inicio, se arquivo já existir ele gera um erro do tipo E_WARNING
            //x+ = Abre p/leitura e escrita
            
            $arquivo  = fopen("aula41.txt", "a");

            fwrite($arquivo, "\r\nCurso de PHP.");

            $arquivo  = fopen("aula41.txt", "r");
            $conteudo = fread($arquivo, 100);

            echo $conteudo;

            fclose($arquivo);
        ?>
    </body>
</html>