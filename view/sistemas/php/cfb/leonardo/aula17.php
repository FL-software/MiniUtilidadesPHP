<?php
    if(isset($_POST["f_nome"])) {
        $vnome = $_POST["f_nome"];

        echo "Nome: $vnome<br/>";
    } else {        
        echo "Dados não foram submetidos";
?>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <title>Aula 17 de PHP - Isset</title>
    </head>
    <body>
        <br/><br/>
        <form name="f_aula" method="post" action="aula17.php">
            <label>Nome:</label><br/>
            <input type="text" name="f_nome"/><br/>
            <input type="submit" value="Enviar"/>
        </form>
    </body>
</html>
<?php
    }
?>