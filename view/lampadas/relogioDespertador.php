<?php
    if (isset($_POST['hora'])) {
        session_start();

        $_SESSION['hora_despertador'] = $_POST['hora'];
    }

    header("Location:relogio.php");
?>