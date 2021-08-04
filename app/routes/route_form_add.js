module.exports = (app) => {
    app.get('/formulario_inclusao', (req, res) => {
        res.render("./admin/form_add")
    })
}