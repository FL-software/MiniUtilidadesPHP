<?php
    session_start();

    $_SESSION['vnome'] = "Bruce";
    $_SESSION['vtexto'] = "texto para teste";
    $_SESSION['vlog'] = "n";

    //unset($_SESSION['vnome']);

    echo $_SESSION['vnome'];
    echo "<br/>".$_SESSION['vtexto'];

    if(isset($_SESSION['vcanal'])) {
        echo "<br/>".$_SESSION['vcanal'];
    } else {
        echo "<br/></ht>Variável vcanal NÃO foi definida";
    }
    
    //session_destroy();
?>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <title>Aula 19 de PHP - Sessões</title>
    </head>
    <body>
        <br/>
        <a href="aula19pg1.php" target="_self">Segunda página</a>
    </body>
</html>