const Sequelize = require("sequelize")
const sequelize = new Sequelize("controle_c_c", "root", "123456789", {
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(() => {
    console.log("sucesso")
}).catch(() => {
    console.log("falha" + erro)
})

module.exports = () => {
    return sequelize
}