<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <title>Aula 39 de PHP - MySQL: Login</title>
    </head>
    <body>
        <?php
            if (isset($_COOKIE["numLogin"]) && isset($_GET["num1"])) {
                $n1 = $_GET["num1"];
                $n2 = $_COOKIE["numLogin"];

                if ($n1 != $n2) {
                    echo "login não efetuado";
                    exit;
                }
            } else {                
                echo "login não efetuado";
                exit;
            }
            
            include "aula29conexao.inc";

            echo "Página inicial";

            mysqli_close($con);
        ?>
    </body>
</html>