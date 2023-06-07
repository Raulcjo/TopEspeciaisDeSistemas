let app = require('./config/server'); //Importa o servidor Express configurado anteriormente 

let rotaHome = require('./routes/home'); //Impotação da rotaHome 
rotaHome(app); //Executando a rotaHome

let rotaCliente = require('./routes/cliente');
rotaCliente.getClientesAPI(app);
rotaCliente.createClienteAPI(app);

app.listen(8000, function(){ //Configurando a porta que o servidor vai funcionar
    console.log("Servidor iniciado na porta 8000");
});

