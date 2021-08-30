const mysql = require('mysql2/promise');

module.exports = () => {

    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456789',
        database: 'controle_c_c'
    })
}