const dbconnection = require('../../config/db')
const modelRelatorio = require('../models/model_relatorio')

module.exports = (app) => {
    const connection = dbconnection();


    app.get('/formulario_inclusao', (req, res) => {
        res.render("./admin/form_add")
    })

    app.post('/salvar', (req, res) => {
        let registroADD = req.body

        modelRelatorio.salvarRegistro(registroADD, connection, (req, res) => {

            res.redirect('back')
        })
    })
}