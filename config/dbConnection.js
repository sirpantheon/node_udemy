const mysql = require('mysql2');

module.exports = () => {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456789',
        database: 'controle_c_c'
    });
}