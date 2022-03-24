<?php

$con=mysqli_connect("localhost","root","","mini_utilidades"); 
     mysqli_select_db($con,"mini_utilidades"); 

$user=$_POST['fmail'];      
$vsenha=$_POST['fsenha'];

$sql="UPDATE tb_login SET senha='$vsenha' WHERE username='$user'";

    $res=mysqli_query($con,$sql);

    if($res) {
        echo "Senha atualizado com sucesso!<br/><br/>";
        echo "<a href='index.html'>Logar</a>";
    }else{
        echo "ERRO na atualização da senha<br/><br/>";

        echo "<a href='resetPassword.html'>Voltar</a>";
    }

    mysqli_close($con);

?>    