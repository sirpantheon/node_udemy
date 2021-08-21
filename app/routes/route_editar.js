const dbconnection = require('../../config/db')

module.exports = (app) => {

    const connection = dbconnection();

    app.get('/editar', (req, res) => {

        connection.query('select * from controle where id_controle = 2', (erro, result) => {
            res.render("relatorio/editar", { editar: result });
        });
    });
}