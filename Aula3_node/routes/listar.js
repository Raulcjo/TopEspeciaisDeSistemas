module.exports.g = function(app, arqJson){
    app.get('/listar', function(req, res){
        //console.log(pessoa.json);
        res.render('acoes/listar', {pessoa: arqJson});

    });
}