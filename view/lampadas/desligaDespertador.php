<?php
    session_start();

    unset($_SESSION['hora_despertador']);

    unset($hora_despertador);

    header("Location:relogio.php");
?>