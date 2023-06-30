const mysql = require('mysql2/promise');

// Create the connection pool. The pool-specific settings are the defaults
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: '',
  password: '',
  waitForConnections: true,
  connectionLimit: 5
});

module.exports = pool;