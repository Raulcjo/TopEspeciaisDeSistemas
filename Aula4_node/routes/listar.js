var connection = require('../config/dbConnectoin')(); //Conexão com banco de dados


module.exports.g = function(app){
    app.get('/listar', function(req, res){
        connection.query('select * from cliente;', function(erro, result){
            if(erro){
                console.log(erro);
            }
            else{
                res.render('acoes/listar', {clientes: result});
            }
        });
    });
}

module.exports.listaAPI = function(app){
    app.get('/api/listar', function(req, res){
        connection.query('select * from cliente;', (erro, result) =>{
            //res.status(200).json(arqJson); //Exibindo direto o json
            res.status(200).json(result);
        });  
    });
}
