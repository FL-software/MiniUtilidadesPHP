<?php

$con=mysqli_connect("localhost","root","","mini_utilidades"); 
     mysqli_select_db($con,"mini_utilidades"); 

$nome=$_POST['fnome'];
$user=$_POST['fmail'];
$senha=$_POST['fsenha'];

$sql="INSERT INTO tb_login VALUES ('$nome', '$user', '$senha')";
$res=mysqli_query($con,$sql);
$linha=mysqli_affected_rows($con);

if($linha > 0){
    $num=rand(100000,900000);
    session_start();
    $_SESSION['numLogin']=$num;
    $_SESSION['username']=$user;
    header("Location:index.html?num1=$num");
}else{
    echo "ERRO no login<br/>";
    echo "<a href='register.html'>Efetuar cadastro</a>";
}

    mysqli_close($con);

?>    