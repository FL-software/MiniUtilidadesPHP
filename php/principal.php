<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="../plugins/bootstrap-5.1.3-dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="../css/all.css">
        <link rel="stylesheet" href="../css/principal.css">
        <title>FL Software - Mini Utilidades - Principal</title>
    </head>
    <body>
        <?php
            include "verificaLogin.php";
        ?>
        <div id="topo" class="row">
            <iframe name="cabeca" src="cabeca.php"></iframe>
        </div>
        <div id="meio" class="row">
            <div id="esquerda" class="col-md-auto">
                <iframe name="menu" src="../menu.html"></iframe>
            </div>
            <div id="direita" class="col">
                <iframe name="corpo" src="home.php"></iframe>
            </div>
        </div>
        <div id="fundo" class="row">
            <iframe name="rodape" src="../rodape.html"></iframe>
        </div>
    </body>
</html>