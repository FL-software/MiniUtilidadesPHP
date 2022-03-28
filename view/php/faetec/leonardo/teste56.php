<html>
    <head>
        <title>Página PHP</title>
    </head>
    <body>
        <?php
            $link = mysqli_connect("127.0.0.1", "root", "") 
            or die("Não foi possível conectar");

            mysqli_set_charset($link, 'utf8');
            mysqli_SELECT_db($link,"teste") 
            or die("Não foi possível selecionar o banco de dados");

            $codigoDoCliente = "EELTD";

            $consulta = "DELETE FROM Clientes 
                         WHERE CodigoDoCliente = '$codigoDoCliente'";

            $resultado = mysqli_query($link, $consulta) 
            or die("Falha na execução da consulta");

            echo "Registro excluído com sucesso";
        ?>
    </body>
</html>