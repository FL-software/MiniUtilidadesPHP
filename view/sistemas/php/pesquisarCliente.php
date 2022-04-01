<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body> 
<?php  

include "../../conexaoMiniUtilidades.php";

$vcod = $_GET['fcod'];
$vnome = $_GET['fnome'];
$vmail = $_GET['fmail'];
$vtel = $_GET['ftel'];
$vcidade = $_GET['fcidade'];

    echo "<form name='f_excluir' method='post' action='pesquisarCliente.php?fcod=$vcod&fnome=$vnome&fmail=$vmail&ftel=$vtel&fcidade=$vcidade'>      
     <table border='1'>
         <tr>
         <td>Código</td><td>Nome</td><td>E-mail</td><td>Telefone</td><td>Cidade</td><td>Selecionar</td>
         </tr>";

    if(isset($_POST['bt_editar']) && isset($_POST['sel'])) {
        foreach ($_POST['sel'] as $codigo) {
        header("Location:atualizarCliente.php?fcod=$codigo");
        }
    }

if (isset($_POST['bt_excluir']) && isset($_POST['sel'])) {
    foreach ($_POST['sel'] as $codigo) {
        $sql = "DELETE FROM tb_clientes WHERE codigo = $codigo";
        $res = mysqli_query($con, $sql);
    }
} else {
    //echo "form NÃO submetido";
}

$sql = "";

if (isset($vcod) && $vcod != "") {    
    $sql = " WHERE codigo=$vcod";
}

if (isset($vnome) && $vnome != "") {
    if ($sql == ""){
        $sql = " WHERE nome='$vnome'"; 
    }else{
        $sql = $sql." AND nome='$vnome'";
    }
}

if (isset($vmail) && $vmail != "") {
    if ($sql == ""){
        $sql = " WHERE email='$vmail'"; 
    }else{
        $sql = $sql." AND email='$vmail'"; 
    }
}

if (isset($vtel) && $vtel != "") {
    if ($sql == ""){
        $sql = " WHERE telefone='$vtel'"; 
    }else{
        $sql = $sql." AND telefone='$vtel'";
    }
}

if (isset($vcidade) && $vcidade != "") {
    if ($sql == ""){
        $sql = " WHERE cidade='$vcidade'"; 
    }else{
        $sql = $sql." AND cidade='$vcidade'"; 
    }
}

$sql = "SELECT * FROM tb_clientes".$sql;
$res = mysqli_query($con,$sql);
//echo $sql;

while ($vreg=mysqli_fetch_row($res)) {
    $vcod = $vreg[0];
    $vnome = $vreg[1];
    $vmail = $vreg[2];
    $vtel = $vreg[3];
    $vcidade = $vreg[4];

    echo "<tr>";
    echo "<td>$vcod</td><td>$vnome</td><td>$vmail</td><td>$vtel</td><td>$vcidade</td>";
    echo "<td align=center><input type=checkbox value=$vcod name=sel[]></td>";
    echo "</tr>";
}

mysqli_close($con);

?>

</table>
    <br>
        <input type="submit" value="Excluir" name="bt_excluir"/>        
        <input type="submit" value="Editar" name="bt_editar"/>        
    </form>
    <br>
    
</body>
</html>