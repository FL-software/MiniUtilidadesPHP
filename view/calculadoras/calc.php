<?php

include ("./formCalc.php");

if ($_POST) {
$v1 = $_POST['txtV1'];
$v2 = $_POST['txtV2'];
$op = $_POST['operacao'];

$total = 0;

if ($op == 'Soma') {
    $total = $v1 + $v2;
    
} else if ($op == 'Subtracao') {
    $total = $v1 - $v2;
    
} else if ($op == 'Multiplicacao') {
    $total = $v1 * $v2;
    
} else if ($op == 'Divisao') {
    $total = $v1 / $v2;
    
    }
    echo "Resultado: <input type='text' value='".$total."' disabled>";
}

?>