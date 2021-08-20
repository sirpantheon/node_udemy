const dbConnection = require('../../config/dbConnection')

module.exports = (app) => {

    const connection = dbConnection();

    app.get('/relatorio', (req, res) => {

        connection.query('select * from controle', (erro, result) => {
            res.render("relatorio/relatorio.ejs", { relatorio: result });
        });
    });
}