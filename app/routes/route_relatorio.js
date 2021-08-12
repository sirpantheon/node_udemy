const db = require("../../database/db")

module.exports = (app) => {

    app.get('/relatorio', (req, res) => {


        async function selectCustomers() {
            connection.query("select * from controle;", function(error, result) {
                res.render("./relatorio", { controle: result });

            });
        }

    });
}