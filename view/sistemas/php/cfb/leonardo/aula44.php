<?php
    include "aula29conexao.inc";

    mysqli_set_charset($con, 'utf8');
?>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <title>Aula 44 de PHP - MySQL - Formulario com múltiplas tabelas</title>
    </head>
    <body>
        <h1>Pesquisa:</h1>
        <form name="fcad" action="aula44Processa.php" method="get">
            <label>Nome:</label><br/>
            <input type="text" name="fnome"/><br/><br/>

            <label>Selecione seu estado:</label><br/>
            <select name="fuf">
                <?php
                    $sql = "SELECT * FROM tb_uf ORDER BY uf";
                    $res = mysqli_query($con, $sql);

                    while ($vreg = mysqli_fetch_row($res)) {
                        $vuf = $vreg[0];
                        $vsigla = $vreg[1];

                        echo "<option value=$vsigla>$vuf</option>";
                    }
                ?>
            </select><br/><br/>

            <label>Selecione seu meio de transporte favorido:</label><br/>
            <?php
                $sql = "SELECT * FROM tb_transportes";
                $res = mysqli_query($con, $sql);

                while ($vreg = mysqli_fetch_row($res)) {
                    $vcod = $vreg[0];
                    $vtra = $vreg[1];

                    echo "<input type=checkbox name=ftransp[] value=$vcod>$vtra<br/>";
                }
            ?>
            <br/>

            <input type="submit" value="Gravar Pesquisa"/>
        </form>
    </body>
</html>
<?php
    mysqli_close($con);
?>