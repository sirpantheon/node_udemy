const dbconnection = require('../../config/db')
const modelRelatorio = require('../models/model_relatorio')

module.exports = (app) => {

    const connection = dbconnection();

    app.get('/editar', (req, res) => {

        modelRelatorio.getEditar(connection, (erro, result) => {
            res.render("relatorio/editar", { editar: result })
        });
    });
}