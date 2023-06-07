let db = require('../config/dbConnection')();


module.exports.getClientesAPI = function(app){
    app.get('/clientes', function(req, res){
        db.query('select * from cliente;', function(erro, result){
            if(erro){
                console.log("Erro: " + erro);
            }

            res.json(result);
        });
    })
}

module.exports.createClienteAPI = function(app){
    app.post('/clientes', function(req, res){
        const {razaosocial, cnpj, limite_credito} = req.body;
        console.log(razaosocial + " " + cnpj  + " " + limite_credito);

        const data = [razaosocial, cnpj, limite_credito];

        db.query('insert into cliente(nome, cnpj, limite_credito) values(?, ?);', data, function(erro, result){
            if(erro){
                console.log("Erro: " + erro);
            }
            res.status(201).json({message: "ok"});
        });
    })
}