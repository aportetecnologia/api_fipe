FIPE Grátis
Com esse pacote você poderá consultar dados atualizados da tabela FIPE.
Utilizando a api de http://fipeapi.appspot.com/
A API de Consulta Tabela FIPE foi desenvolvida para facilitar o acesso aos dados disponíveis na Tabela FIPE, como marcas nacionais e modelos de Carro, Motos e Caminhões.

Como Funciona
Através de técnicas de scrapping em tempo real, utilizamos os resultados fornecidos de forma aberta na própria página da FIPE para montagem da estrutura utilizada na API.

Nenhum dado é armazenado em banco de dados, também não existem rotinas programáticas para "baixar a tabela" completamente. Toda a comunicação é feita em tempo real, como um proxy, toda resultado de consulta vem diretamente do site da Fundação FIPE.

Atenção: Não recomendamos o uso desta API em massa, não utilize esta API para baixar ou fazer backup da Tabela FIPE com frequência. Recomendamos o consumo desta API em tempo real de acordo com as necessidades de consulta para cada veículo ou marca.

Como Utilizar
A API disponibiliza seus dados de busca no formato JSON. Confira a URL base de acesso a API:

http://fipeapi.appspot.com/api/1/[tipo]/[acao]/[parametros].json
O parametro [tipo] aceita três possíveis valores: carros, motos ou caminhoes.

O parametro [acao] está relacionado ao tipo de dados que você deseja obter.

Primeiro liste as marcas do tipo de veiculo que você deseja, através da ação marcas e sem nenhum parâmetro:

GET: http://fipeapi.appspot.com/api/1/carros/marcas.json
A resposta será um array de dados no formato JSON:

[
    {"key": "audi-6", "id": 6, "fipe_name": "Audi", "name": "AUDI"},
    {"key": "bmw-7", "id": 7, "fipe_name": "BMW", "name": "BMW"},
    {"key": "gm-chevrolet-23", "id": 23, "fipe_name": "GM - Chevrolet", "name": "CHEVROLET"},
    {"key": "fiat-21", "id": 21, "fipe_name": "Fiat", "name": "FIAT"},
    ...
]
Na sequencia você poderá obter a listagem de veículos de uma determinada marca, através da ação veiculos juntamente com o código (id) da marca desejada.
Por exemplo a marca Fiat (21):

GET: http://fipeapi.appspot.com/api/1/carros/veiculos/21.json
E a resposta:

[
    ...
    {"key": "palio-4826", "name": "Palio 1.0 Celebr. ECONOMY F.Flex 8V 4p", "id": "4826", "fipe_name": "Palio 1.0 Celebr. ECONOMY F.Flex 8V 4p"},
    {"key": "palio-4827", "name": "Palio 1.0 ECONOMY Fire Flex 8V 2p", "id": "4827", "fipe_name": "Palio 1.0 ECONOMY Fire Flex 8V 2p"},
    {"key": "palio-4828", "name": "Palio 1.0 ECONOMY Fire Flex 8V 4p", "id": "4828", "fipe_name": "Palio 1.0 ECONOMY Fire Flex 8V 4p"},
    {"key": "palio-505", "name": "Palio 1.0/ Trofeo 1.0 Fire/ Fire Flex 2p", "id": "505", "fipe_name": "Palio 1.0/ Trofeo 1.0 Fire/ Fire Flex 2p"},
    ...
]
Após escolher o veículo desejado é possível consultar os modelos e os anos disponíveis para uma futura consulta de preços. Através da ação veiculo (no singular) juntamente com o código da marca e o código (id) do veículo.
Por exemplo Palio 1.0 ECONOMY Fire Flex 8V 4p:

GET: http://fipeapi.appspot.com/api/1/carros/veiculo/21/4828.json
E a resposta:

[
    {"fipe_codigo": "32000-1", "name": "Zero KM Gasolina", "key": "32000-1", "veiculo": "Palio 1.0 ECONOMY Fire Flex 8V 4p", "id": "32000-1"},
    {"fipe_codigo": "2014-1", "name": "2014 Gasolina", "key": "2014-1", "veiculo": "Palio 1.0 ECONOMY Fire Flex 8V 4p", "id": "2014-1"},
    {"fipe_codigo": "2013-1", "name": "2013 Gasolina", "key": "2013-1", "veiculo": "Palio 1.0 ECONOMY Fire Flex 8V 4p", "id": "2013-1"},
    {"fipe_codigo": "2012-1", "name": "2012 Gasolina", "key": "2012-1", "veiculo": "Palio 1.0 ECONOMY Fire Flex 8V 4p", "id": "2012-1"},
    ...
]
Por fim adicionando mais um parâmetro a ação veiculo será possível visualizar o preço corrente da Tabela FIPE para este veículo/modelo/ano. Continuando com o exemplo a cima para obter o valor de um veículo do ano 2013 a Gasolina utilizaremos o id 2013-1:

GET: http://fipeapi.appspot.com/api/1/carros/veiculo/21/4828/2013-1.json
E a resposta será o objeto JSON relacionado aos dados deste veículo:

{
    "id": "2013",
    "ano_modelo": "2013",
    "marca": "Fiat",
    "name": "Palio 1.0 ECONOMY Fire Flex 8V 4p",
    "veiculo": "Palio 1.0 ECONOMY Fire Flex 8V 4p",
    "preco": "R$ 23.055,00",
    "combustivel": "Gasolina",
    "referencia": "agosto de 2015",
    "fipe_codigo": "001267-0",
    "key": "palio-2013"
}
Com isto descubrimos os detalhes do veículo Palio 1.0 ECONOMY Fire Flex 8V 4p ano 2013 a Gasolina.

Utilizando Códigos da FIPE
Se você possui algum código FIPE para consulta, também é possível efetuar as consultas.

GET: http://fipeapi.appspot.com/api/1/carros/veiculo/21/001267-0.json
GET: http://fipeapi.appspot.com/api/1/carros/veiculo/21/001267-0/2013-1.json

