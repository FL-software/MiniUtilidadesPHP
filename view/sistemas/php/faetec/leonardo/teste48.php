<html>
	<head>
		<title>Página PHP</title>
	</head>
	<body>
        <?php
            $destinatario = "cookie.maia@gmail.com";
            
            $assunto = "Como enviar e-mails via PHP";

            $mensagem = "<h2>Envio de e-mails via PHP</h2>
            <p>Despois que o servidor está configurado, é muito simples enviar e-mails com o PHP, usando apenas a função mail(). Você deve indicar como parâmetros o destinatário, o assunto e a mensagem. Para enviar cabeçalhos adicionais, como informações sobre o formato da mensagem, há um quarto parâmetro.</p>";

            $mensagem = wordwrap($mensagem, 70, "\r\n");

            $cabecalho = "From: webmaster@example.com" . "\r\n".
                         "MIME-Version: 1.0"."\r\n".
                         "Content-type: text/html; charset=iso-8859-1"."\r\n";

            mail($destinatario, $assunto, $mensagem, $cabecalho);

            echo "e-mail enviado com sucesso";
        ?>
	</body>
</html>