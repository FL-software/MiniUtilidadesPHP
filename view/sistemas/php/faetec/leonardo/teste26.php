<html>
	<head>
		<title>Teste PHP</title>
	</head>
	<body>
		<?php
           $d = getdate();
           $dia = $d['wday'];

           echo "$dia <br>";

           switch ($d['wday'])
           {
                case 6:
                    echo("Finalmente Sexta");
                    break;
                case 7:
                    echo("Super Sábado");
                    break;
                case 1:
                    echo("Domingo Sonolento");
                    break;
                default:
                    echo("Estou esperando pelo fim da semana");
           }
		?>
	</body>
</html>