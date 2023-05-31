var mysql = require('mysql');

module.exports = function(){
    return mysql.createConnection({
        host: 'localhost',
        //port: '', //Porta para poder fazer a conexão
        user: 'root',
        password: 'password', //A senha depende de cada banco de dados
        database: 'sisvenda',
        insecureAuth: true
    });
}
