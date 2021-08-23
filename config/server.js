const express = require("express");
//const consign = require("consign");
const Load = require("express-load")


const app = express();
app.set('view engine', 'ejs')
app.set('views', './app/views')



Load('./config/db.js', { verbose: true })
    .then('app/routes')
    .then('app/models')
    .into(app)
    /*consign({ cwd: 'app' })
        .include('routes')
        .then('models')
        .into(app)
    */
module.exports = app