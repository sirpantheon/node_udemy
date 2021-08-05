module.exports = (app) => {

    app.get('/relatorio', (req, res) => {
        const mysql = require('mysql');

        let connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'controle_c_c'
        });
        connection.query("select * from controle;", function(error, result) {
            //res.render("./relatorio/relatorio", { controle: result });
            res.send(result);
        });


    });
}