exports.getRelatorio = async(connection, callback) => {

    await connection.query('select * from controle', callback);
}
exports.getEditar = async(connection, callback) => {

    await connection.query('select * from controle where id_controle = 2', callback);
}

exports.salvarRegistro = async(registroADD, connection, callback) => {
    await connection.query('INSERT INTO controle set ?', registroADD, callback)
}