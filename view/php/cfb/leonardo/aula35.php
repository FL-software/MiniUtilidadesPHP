<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <title>Aula 35 de PHP - MySQL: Comando Delete</title>
    </head>
    <body>
        <?php
            include "aula29conexao.inc";

            $sql = "DELETE FROM tb_cadastro WHERE cod = '3'";
            $res = mysqli_query($con, $sql);
            $lin = mysqli_affected_rows($con);

            if ($lin > 0) {
                echo "Registro deletado";
            } else {
                echo "Nenhum registro deletado";
            }

            mysqli_close($con);
        ?>
    </body>
</html>