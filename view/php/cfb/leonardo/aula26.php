<?php
?>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <title>Aula 26 de PHP - Enviando e-mails</title>
    </head>
    <body>
        <form name="email" method="post" action="aula26envia.php">
            <label>e-mail</label><br/>
            <input type="text" name="email_txt"/><br/>
            <label>Assunto</label><br/>
            <input type="text" name="assunto_txt"/><br/>
            <label>Mensagem</label><br/>
            <textarea type="text" name="msg_txt" row="5" cols="50"/></textarea><br/><br/>
            <input type="submit" value="enviar">
        </form>
    </body>
</html>