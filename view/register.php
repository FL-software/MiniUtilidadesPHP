<?php
    include "conexaoMiniUtilidades.php";

    $nome  = $_POST['fnome'];
    $user  = $_POST['fmail'];
    $senha = $_POST['fsenha'];
    $sql   = "INSERT INTO tb_login VALUES (NULL, '$nome', '$user', '$senha')";
    $res   = mysqli_query($con, $sql);
    $linha = mysqli_affected_rows($con);

    if ($linha > 0) {
        $num = rand(100000,900000);

        session_start();

        $_SESSION['numLogin'] = $num;
        $_SESSION['username'] = $user;

        header("Location:../index.html?num1=$num");
    } else {
        echo "Não foi possível efetuar o login<br/>";
        echo "<a href='register.html'>Tentar novamente</a>";
    }

    mysqli_close($con);
?>    