exports.getRelatorio = (connection, callback) => {

    connection.query('select * from controle', callback);
}
exports.getEditar = (connection, callback) => {

    connection.query('select * from controle where id_controle = 2', callback);
}