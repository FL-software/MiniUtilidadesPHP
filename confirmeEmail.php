<?php

$con=mysqli_connect("localhost","root","","mini_utilidades"); 
     mysqli_select_db($con,"mini_utilidades"); 

    $user=$_POST['fmail']; 

    $sql="SELECT * FROM tb_login WHERE username='$user'";
    $res=mysqli_query($con,$sql);
    $linha=mysqli_affected_rows($con);

    if($linha > 0){
        $num=rand(100000,900000);
        session_start();
        $_SESSION['numLogin']=$num;
        $_SESSION['username']=$user;
        header("Location:resetPassword.html?num1=$num");
    }else{
        echo "ERRO no login<br/>";
        echo "<a href='confirmeEmail.html'>Confirmar E-mail</a>";
    }

    mysqli_close($con);