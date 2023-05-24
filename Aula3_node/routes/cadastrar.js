 //Método get:
 module.exports.g = function(app){
    app.get('/cadastrar', function(req, res){
        res.render('acoes/cadastrar');
    });
}

//Método post:
module.exports.p = function(app){
    app.post('/cadastrar', (req, res) =>{
        const {nome, cnpj, limiteCredito} = req.body;
        console.log('Nome: ' + nome);
        console.log('CNPJ: ' + cnpj);
        console.log('Limite de Credito: ' + limiteCredito);

        res.render('acoes/cliente_cadastrado');
    });
}

//Método put:
module.exports.u = function(app){
    app.put('/cadastrar/:id', function(req, res){
        const clienteID = req.params.id;
        console.log("ID recebido: " + clienteID);

        res.status(201).json({mensagem : 'PUT realizado com sucesso!'});
    });
}