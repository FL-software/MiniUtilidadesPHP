<?php
    $hora = date("H"); //h: 12 horas - H:24 horas
    $minuto = date("i");
    $grau_hora = $hora * 30 + $minuto / 2 + 34;
    $grau_minuto = $minuto * 6 + 33;

    echo "<img src='../../img/ponteiro.png' id='ponteiro-minuto' style='transform: rotate({$grau_minuto}deg);'>";
    echo "<img src='../../img/ponteiro.png' id='ponteiro-hora' style='transform: rotate({$grau_hora}deg);'>";

    session_start();

    if(isset($_SESSION['hora_despertador'])) {
        $hora_despertador = $_SESSION['hora_despertador'];

        if ($hora_despertador == $hora.":".$minuto) {        
            echo "<audio controls autoplay>                
                    <source src='../../audio/explosao.mp3' type='audio/mpeg'>
                    Seu navegador não é compatível.
                </audio>";
        }
    }

    header("Refresh:60");
?>