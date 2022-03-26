<?php
    include "conexaoMiniUtilidades.php";

    $user  = $_POST['fmail'];      
    $senha = $_POST['fsenha'];
    $sql   = "UPDATE tb_login SET senha='$senha' WHERE username='$user'";
    $res   = mysqli_query($con,$sql);
    $linha = mysqli_affected_rows($con);

    if ($linha > 0) {
        echo "Senha atualizado com sucesso!<br/><br/>";
        echo "<a href='index.html'>Logar</a>";
    }else{
        echo "Falha na atualização da senha<br/><br/>";
        echo "<a href='resetPassword.html'>Voltar</a>";
    }

    mysqli_close($con);
?>    