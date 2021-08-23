const dbconnection = require('../../config/db')
const modelRelatorio = require('../models/model_relatorio')


module.exports = (app) => {

    const connection = dbconnection();

    app.get('/relatorio', (req, res) => {

        modelRelatorio.getRelatorio(connection, (erro, result) => {
            res.render("relatorio/relatorio", { relatorio: result })
        });
    });
}