<!doctype html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Tabela Fipe</title>
    <link rel="stylesheet" href="lib/style.css">
</head>

<body>
    <form name="formFipe" id="formFipe" method="post" action="controller/controllerFipe.php">
        <div class="form">
            <select name="brand" id="brand" required>
                <option value="">Selecione</option>
            </select>

            <select name="vehicles" id="vehicles" required>
                <option value="">Selecione</option>
            </select>

            <select name="year" id="year" required>
                <option value="">Selecione</option>
            </select>
        </div>
    </form>

    <script src="lib/zepto.min.js"></script>
    <script src="lib/javascript.js"></script>
</body>
</html>