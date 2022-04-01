<?php

include "../../conexaoMiniUtilidades.php";

$vnome = $_GET['fnome'];
$vmail = $_GET['fmail'];
$vtel = $_GET['ftel'];
$vcidade = $_GET['fcidade'];

$sql = "INSERT INTO tb_clientes VALUES (NULL, '$vnome', '$vmail', '$vtel', '$vcidade')";
$res = mysqli_query($con,$sql);
$linha = mysqli_affected_rows($con);

if ($linha > 0) {
    echo "Registro Gravado com Sucesso!<br/><br/>";
}else{
    echo "ERRO ao Gravar<br/><br/>";
}

echo "<a href='cadastrarCliente.php'><button >Voltar</button></a>";

mysqli_close($con);

?>