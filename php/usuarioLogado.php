<?php
    session_start();

    if(isset($_SESSION['username']) && isset($_SESSION['numLogin'])){
        $username = $_SESSION['username'];
        $numLogin = $_SESSION['numLogin'];
        
        echo "$username ($numLogin)";
    }
?>