const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'S!F!R!?#',
    database: 'anfragen_database'
})

module.exports = connection;