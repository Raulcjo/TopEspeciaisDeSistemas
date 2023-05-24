let express = require('express');
let app = express();

app.set('view engine', 'ejs');
//app.set('views', 'visualizacoes');
app.use(express.static('views/static'));
app.use(express.json());
app.use(express.urlencoded({enteded: true}));

module.exports = app;