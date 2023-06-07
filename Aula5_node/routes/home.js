module.exports = function(express){
    express.get('/', function(request, response){
        response.render('pages/home/index'); //Renderizando uma página web
    });
}