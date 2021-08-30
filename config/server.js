const express = require("express");
const Load = require("express-load")
const bodyParser = require("body-parser")


const app = express();
app.set('view engine', 'ejs')
app.set('views', './app/views')

app.use(bodyParser.urlencoded({ extended: true }))

Load('./config/db.js', { verbose: true })
    .then('app/routes')
    .then('app/models')
    .into(app)

module.exports = app