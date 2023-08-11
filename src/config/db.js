const mysql = require('mysql2/promise');
require('dotenv').config();

const DBHOST = process.env.DBHOST
const DBUSER = process.env.DBUSER
const SCHEMA = process.env.SCHEMA
const DBPASS = process.env.DBPASS

// Create the connection pool. The pool-specific settings are the defaults
const pool = mysql.createPool({
  host: DBHOST,
  user: DBUSER,
  database: SCHEMA,
  password: DBPASS,
  waitForConnections: true,
  connectionLimit: 5
});

module.exports = pool;