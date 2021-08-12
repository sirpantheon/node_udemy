async function connect() {
    if (global.connection && global.connection.state !== "disconnected")
        return global.connection;

    const mysql = require('mysql');
    let connection = await mysql.createConnection("mysql://root:22insertscrol@localhot:3306/controle_c_c");
    console.log("conectou no banco de dados!!");
    global.connection = connection;
    return connection;
}
connect();
module.exports = {}