const mysql = require('mysql2');

class Database {
  getConnection() {
    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      //Si no tiene configurado el mysql con contrasena la siguiente
      // no es necesaria
      database: 'cursos'
    });
    return connection;
  }

}
module.exports = Database;


