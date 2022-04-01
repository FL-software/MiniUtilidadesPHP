<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <link rel='stylesheet' href='../../css/all.css'>
    <title>FL Software - Mini Utilidades - Atualiza Cliente</title>
</head>
<body>
    <h1>Cadastro Cliente</h1>
    
    <?php

    include "../../conexaoMiniUtilidades.php";

    $sql = "SELECT * FROM tb_clientes WHERE codigo=".$_GET['fcod'];
    $res = mysqli_query($con,$sql);
    //echo $sql;
    
    if ($vreg=mysqli_fetch_row($res)) {
        $vcod = $vreg[0];
        $vnome = $vreg[1];
        $vmail = $vreg[2];
        $vtel = $vreg[3];
        $vcidade = $vreg[4];

    echo "<form method='get' action='atualiza.php'>
        <label for=''>Código:</label>    
        <input type='number' value='".$vcod."' name='cod' disabled>
        <input type='hidden' value='".$vcod."' name='fcod' ><br/><br/>
        <label for=''>Nome:</label>    
        <input type='text' value='".$vnome."' name='fnome'><br/><br/>
        <label for=''>E-mail:</label>    
        <input type='e-mail' value='".$vmail."' name='fmail'><br/><br/>
        <label for=''>Telefone:</label>    
        <input type='text' value='".$vtel."' name='ftel'><br/><br/>
        <label for=''>Cidade:</label>    
        <input type='text' value='".$vcidade."' name='fcidade'><br/><br/>
        <input type='submit' value='Atualizar'>    

    </form>";

    }
    
    mysqli_close($con);

    ?>
</body>
</html>