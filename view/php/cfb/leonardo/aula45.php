<?php
    include "aula29conexao.inc";

    mysqli_set_charset($con, 'utf8');

    $vnome    = $_GET["f_nome"]; 
    $vsenha   = $_GET["f_senha"]; 
    $vsexo    = $_GET["f_sexo"]; 
    $vesporte = $_GET["f_esporte"];  

    if(isset($_GET["f_tcarro"])){
        $vtcarro = $_GET["f_tcarro"]; 

    } else {
        $vtcarro = 0; 
    }

    if(isset($_GET["f_tmoto"])){
        $vtmoto = $_GET["f_tmoto"]; 

    } else {
        $vtmoto = 0; 
    }

    if(isset($_GET["f_tonibus"])){
        $vonibus = $_GET["f_tonibus"];
    } else {
        $vonibus = 0; 
    }

    $vcoment = $_GET["f_coment"]; 
    $sql     = "INSERT INTO tb_revisao VALUES (NULL, '$vnome', '$vsenha', '$vsexo', '$vesporte', $vtcarro, $vtmoto, $vonibus, '$vcoment')";
    $res     = mysqli_query($con, $sql);

    echo "Registro gravado <br/>";
    echo "<a href=aula45Formulario.html target=_self>voltar</a>";

    mysqli_close($con);
?>