<?php
    session_start();

    unset($_SESSION["username"]);
    unset($_SESSION["numLogin"]);

    if (!isset($_SESSION['username']) && !isset($_SESSION['numLogin'])) {
        session_destroy();

        header("Location:../index.html");
    } else {
        echo "Não foi possível efetuar o logout";
        echo "<a href='logout.php'>Tentar novamente</a>";
    }
?>