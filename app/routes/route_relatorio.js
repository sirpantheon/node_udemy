const db = require("../../database/db")

module.exports = (app) => {

    app.get('/relatorio', (req, res) => {

        connection.query("select * from controle;", (error, result) => {
            res.render("./relatorio", { controle: result });

        });


    });
}