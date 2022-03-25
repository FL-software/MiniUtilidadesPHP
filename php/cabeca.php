<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="css/all.css">
        <link rel="stylesheet" href="css/cabeca.css">
        <title>FL Software - Mini Utilidades - Cabeca</title>
    </head>
    <body>
        <?php
            include "usuarioLogado.php";
        ?>
        <header>
        <i id="iconMenu" onclick="responsiveSidebar()" class="fas fa-bars"></i>
        <a href="index.html"> <i class="fas fa-sign-out-alt"></i> Logout</a>
        </header>
    </body>
</html>