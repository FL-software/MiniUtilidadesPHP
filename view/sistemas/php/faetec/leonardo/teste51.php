<html>
    <head>
        <title>Página PHP</title>
    </head>
    <body>
        <?php
            $link = mysqli_connect("127.0.0.1", "root", "") 
            or die("Não foi possível conectar");

            mysqli_SELECT_db($link,"teste") 
            or die("Não foi possível selecionar o banco de dados");

            $consulta = "SELECT * FROM Clientes";

            $resultado = mysqli_query($link, $consulta) 
            or die("Falha na execução da consulta");

            while ($linha = mysqli_fetch_assoc($resultado))
            {
                $nomeDaEmpresa = $linha["NomeDaEmpresa"];
                $nomeDoContato = $linha["NomeDoContato"];

                echo "<b>Nome da empresa:</b> $nomeDaEmpresa<br>";
                echo "<b>Nome do Contato:</b> $nomeDoContato<br>";
            }
        ?>
    </body>
</html>