<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../../css/all.css">
    <title>FL Software - Mini Utilidades - Cadastro Cliente</title>
</head>
<body>
    <h1>Cadastro Cliente</h1>

    <form method="get" action="cliente.php">
    <label for="">Nome:</label>    
    <input type="text" name="fnome"><br/><br/>
    <label for="">E-mail:</label>    
    <input type="e-mail" name="fmail"><br/><br/>
    <label for="">Telefone:</label>    
    <input type="text" name="ftel"><br/><br/>
    <label for="">Cidade:</label>    
    <input type="text" name="fcidade"><br/><br/>
    <input type="submit" value="Salvar"><br/><br/>   

    </form>

    <a href="pesquisa.php"><button>Pesquisa</button></a>

</body>
</html>