<?php
    session_start();
    
    if (!isset($_SESSION['username']) || !isset($_SESSION['numLogin'])) {
        //usuário não logado
        header("Location:../index.html");
    } else {
        //usuário logado
    }
?>