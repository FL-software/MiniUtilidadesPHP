<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <title>Aula 38 de PHP - MySQL: Comando Update</title>
    </head>
    <body>
        <?php
            include "aula29conexao.inc";

            //UPDATE tabela SET campo a ser alterado WHERE condição 
            $sql = "UPDATE tb_cadastro SET telefone = '3155555555' WHERE cod = 9";
            $res = mysqli_query($con, $sql);

            if ($res) {
                echo "Registros atualizado com sucesso!";
            } else {
                echo "ERRO na atualização do registro";
            }

            mysqli_close($con);
        ?>
    </body>
</html>