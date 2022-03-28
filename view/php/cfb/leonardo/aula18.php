<?php
    $texto="Curso de PHP";
    $nome="Bruno";
    $canal="vlog do fessor Bruno";

    echo "<a href=aula18pg1.php?tx=".urlencode($texto)
                                    ."&no=".urlencode($nome)
                                    ."&cn=".urlencode($canal)
                                    ." target=_self>Abre pg1</a>"
?>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <title>Aula 18 de PHP - Passagem de valores</title>
    </head>
    <body>
    </body>
</html>