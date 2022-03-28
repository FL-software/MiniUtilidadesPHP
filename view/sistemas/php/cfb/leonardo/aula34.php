<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <title>Aula 34 de PHP - MySQL: Comando Select</title>
    </head>
    <body>
        <table border="1">
            <tr>
                <td>Código</td><td>Produto</td><td>Preço</td><td>Qtde</td><td>Categoria</td>
            </tr>
            <?php
                include "aula29conexao.inc";    
                
                mysqli_set_charset($con, 'utf8');

                $vpes = "t%";
                $sql   = "SELECT * FROM tb_produtos WHERE codigo LIKE '$vpes'";
                $res   = mysqli_query($con, $sql);
                
                while ($reg = mysqli_fetch_row($res)) {
                    $vcod   = $reg[0];
                    $vprod  = $reg[1];
                    $vpreco = $reg[2];
                    $vqtde  = $reg[3];
                    $vcat   = $reg[4];
                    
                    echo "<tr>";
                    echo "<td>$vcod</td><td>$vprod</td><td>$vpreco</td><td>$vqtde</td><td>$vcat</td>";
                    echo "</tr>";
                }
                
                mysqli_close($con);
            ?>            
        </table>
    </body>
</html>