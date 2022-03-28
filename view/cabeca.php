<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="../css/all.css">
        <link rel="stylesheet" href="../css/cabeca.css">
        <title>FL Software - Mini Utilidades - Cabeca</title>
    </head>
    <body>
        <div id="logo_topo">
            <a href="home.php" target="corpo">
                <img src="../img/LogoPequeno.jpeg" alt="">
            </a>
        </div>
        <div id="usuario_topo">
            <p>
                <?php
                    include "usuarioLogado.php";
                ?>
                <br/>
                <a href="logout.php" target="_parent">Logout</a>
            </p>
        </div>
    </body>
</html>