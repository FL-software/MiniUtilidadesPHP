<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <title>Aula 40 de PHP - MySQL: Login</title>
    </head>
    <body>
        <?php
            session_start();

            if (isset($_SESSION["numLogin"]) && isset($_GET["num1"])) {
                $n1 = $_GET["num1"];
                $n2 = $_SESSION["numLogin"];

                if ($n1 != $n2) {
                    echo "login não efetuado";
                    exit;
                }
            } else {                
                echo "login não efetuado";
                exit;
            }
            
            include "aula29conexao.inc";

            echo "Página inicial<br/>";
            echo "Username: ".$_SESSION['username']."<br/>";

            //unset($_SESSION["numLogin"]);
            //session_unregister("numLogin");
            //$_SESSION = array();
            //session_destroy();

            mysqli_close($con);
        ?>
    </body>
</html>