exports.getRelatorio = (connection, callback) => {

    connection.query('select * from controle', callback);
}