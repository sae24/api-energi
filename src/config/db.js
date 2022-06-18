const mysql = require('mysql2');

require('dotenv').config;

const connection = mysql.createConnection({
    host: process.env.DB_HOSTNAME,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
})

connection.connect(err => {
    let message = !err ? 'connected' : 'not connected';
    console.log(`Mysql : ${err}`)
})

module.exports = connection;