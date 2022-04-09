const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'da3m0nNugg3t$',
  database: 'employeetracker'
});

module.exports = connection;