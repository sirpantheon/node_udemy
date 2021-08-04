const app = require("./config/server");

const route_form_add = require("./app/routes/route_form_add")(app);
const route_home = require("./app/routes/route_home")(app);
const route_relatorio = require("./app/routes/route_relatorio")(app);

//aula 24...

app.listen(3000, () => {
    console.log("Sevidor Disponivel")
})