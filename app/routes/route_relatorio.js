const dbconnection = require('../../config/db')


module.exports = (app) => {

    const connection = dbconnection();

    app.get('/relatorio', (req, res) => {

        connection.query('select * from controle', (erro, result) => {
            res.render("relatorio/relatorio", { relatorio: result });
        });
    });
}