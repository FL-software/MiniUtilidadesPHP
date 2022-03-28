<?php
    session_start();

    if (isset($_SESSION['username']) && isset($_SESSION['numLogin'])) {
        $username = $_SESSION['username'];
        $numLogin = $_SESSION['numLogin'];
        
        echo "$username ($numLogin)";
    } else {
        echo "Não foi possível obter os dados da sessão";
        echo "<a href='principal.php'>Tentar novamente</a>";
    }
?>