<?php
    include "conexaoMiniUtilidades.php";

    $user  = $_POST['fmail'];      
    $senha = $_POST['fsenha'];
    $sql   = "UPDATE tb_login SET senha='$senha' WHERE username='$user'";
    $res   = mysqli_query($con,$sql);
    $linha = mysqli_affected_rows($con);

    if ($linha > 0) {
        echo "Senha atualizada!<br/><br/>";
        echo "<a href='index.html'>Logar</a>";
    }else{
        echo "Não foi possível efetuar a atualização da senha<br/><br/>";
        echo "<a href='resetPassword.html'>Tentar novamente</a>";
    }

    mysqli_close($con);
?>    