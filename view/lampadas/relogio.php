<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../../css/all.css">
    <link rel="stylesheet" href="../../css/lampadas/relogio.css">
    <title>FL Software - Mini Utilidades - Relógio</title>
</head>
<body>
    <h1>Relógio</h1>
    <div>
        <img src="../../img/relogio.png" id="relogio">
        <?php
            include "relogioMecanismo.php";
        ?>
    </div> 
    <form method="post" action="relogioDespertador.php">
        <label for="hora">Despertador</label>    
        <input type="time" name="hora" value="<?php echo $hora_despertador; ?>">
        <input type="submit" value="Ligar">
    </form>
    <form method="post" action="desligaDespertador.php">
        <input type="submit" value="Desligar">
    </form>
</body>
</html>