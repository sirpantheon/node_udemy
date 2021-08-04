module.exports = (app) => {
    app.get('/relatorio', (req, res) => {
        res.render("./relatorio/relatorio")
    })
}