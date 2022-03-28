<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <title>Aula 37 de PHP - MySQL: Deletando registros selecionados</title>
    </head>
    <body>
        <form name="f_excluir" method="post" action="aula37.php">
            <table border="1">
                <tr>
                    <td>Código</td><td>Nome</td><td>Selecionar</td>
                </tr>
                <?php
                    include "aula29conexao.inc";

                    if (isset($_POST['sel'])) {
                        foreach ($_POST['sel'] as $codigo) {
                            $sql = "DELETE FROM tb_cadastro WHERE cod = $codigo";
                            $res = mysqli_query($con, $sql);
                        }
                    } else {
                        echo "form NÃO submetido";
                    }

                    $sql = "SELECT * FROM tb_cadastro ORDER BY cod";
                    $res = mysqli_query($con, $sql);

                    while ($reg = mysqli_fetch_row($res)) {
                        $vcod   = $reg[0];
                        $vnome  = $reg[1];
                        
                        echo "<tr>";
                        echo "<td>$vcod</td><td>$vnome</td>";
                        echo "<td align=center><input type=checkbox value=$vcod name=sel[]></td>";
                        echo "</tr>";
                    }

                    mysqli_close($con);
                ?>
            </table>
            <br/>
            <input type="submit" value="Excluir" name="bt_excluir"/>
        </form>
    </body>
</html>