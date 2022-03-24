<?php

$con=mysqli_connect("localhost","root","","mini_utilidades"); 
     mysqli_select_db($con,"mini_utilidades"); 

$vnome=$_POST['fnome'];
$vuser=$_POST['fmail'];
$vsenha=$_POST['fsenha'];

$sql="INSERT INTO tb_login VALUES ('$vnome', '$vuser', '$vsenha')";
$res=mysqli_query($con,$sql);

if($linha > 0){
    $num=rand(100000,900000);
    session_start();
    $_SESSION['numLogin']=$num;
    $_SESSION['username']=$user;
    header("Location:principal.html?num1=$num");
}else{
    echo "ERRO no login<br/>";
    echo "<a href='index.html'>Efetuar login</a>";
}

    mysqli_close($con);

?>    