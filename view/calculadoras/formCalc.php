<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../../css/all.css">
    <<title>FL Software - Mini Utilidades - Calculadora PHP</title>
</head>
<body>
    <h1>Calculadora PHP</h1>

    <form method="post" action="calc.php">
        Valor 1: <input type="text" name="txtV1"><br>
        Valor 2: <input type="text" name="txtV2"><br>
        <br>
        <select name="operacao" id="operacao">
            <option value="Soma">Soma</option>
            <option value="Subtracao">Subtracao</option>
            <option value="Multiplicacao">Multiplicacao</option>
            <option value="Divisao">Divisao</option>
        </select>
        <br><br> <input type="submit" value="Calcular"> <br><br>
    </form>
</body>
</html>