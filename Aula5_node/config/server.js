let express = require('express'); //importou a função express
let app = express(); //executou a função express

app.set('view engine','ejs'); //configurando o EJS como visualizador padrão
app.use(express.static('views/static')); //Configurando o Express para arquivos estáticos 
app.use(express.json()); //Configurando Express para trabalhar com JSONs
app.use(express.urlencoded({extend: true})); //Configurando para receber formulários html com json

module.exports = app;