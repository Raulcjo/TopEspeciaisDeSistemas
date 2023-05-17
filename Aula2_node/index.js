let http = require('http');
let express = require('express');
let app = express();

//request - corresponde ao cliente ou navegador -> solicitação (Back end)
//response - corresponde ao servidor -> resposta (Front end)

/* Primeira maneira - sem o express:
let servidor = http.createServer(function(req, res){
    let endereco = req.url; 
    console.log("URL: " + endereco);

    if(endereco == '/cadastrar'){
        res.end('<HTML><head><title>Pagina de cadastro</title></head><body><h1>Pagina cadastral!</h1></body></HTML>');
    } else if(endereco == '/listar'){
        res.end('<HTML><head><title>Pagina de listagem</title></head><body><h1>Pagina de listagens</h1></body></HTML>');
    } else {
        res.end('<HTML><head><title>Pagina inicial</title></head><body><h1>Pagina Inicial</h1></body></HTML>');
    }
});
servidor.listen(8000);
//nodemon para e recomeça o servidor
*/

//Segunda maneira - com express:

app.set('view engine', 'ejs');
app.use(express.static('views/static'));

app.get('/', function(req, res){
    //res.send('<HTML><head><title>Pagina inicial</title></head><body><h1>Pagina Inicial</h1></body></HTML>'); 
    res.render('index');
});

app.get('/cadastrar', function(req, res){
    //res.send('<HTML><head><title>Pagina de cadastro</title></head><body><h1>Pagina cadastral</h1></body></HTML>');
    res.render('acoes/cadastrar');
});

app.get('/listar', function(req, res){
    //res.send('<HTML><head><title>Pagina de listagem</title></head><body><h1>Pagina de listagens</h1></body></HTML>');
    res.render('acoes/listar');
});

app.listen(8000, function(){
    console.log('Servidor ininciado  na porta 8000!');
});