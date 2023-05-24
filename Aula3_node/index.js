//Segunda maneira - com express:

var app = require('./config/server');

let rotaHome = require('./routes/home');
rotaHome.g(app);

let rotaCadastar = require('./routes/cadastrar');
rotaCadastar.g(app);
rotaCadastar.p(app);
rotaCadastar.u(app);

let pessoaJson = require('./pessoa.json');
//console.log(pessoa.pessoaJson) //Verificação da implementação
let rotaListar = require('./routes/listar');
rotaListar.g(app, pessoaJson);


app.listen(8000, function(){
    console.log('Servidor ininciado  na porta 8000!');
});