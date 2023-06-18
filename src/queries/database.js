const sql = require('mssql');
const config = require('../config');


const dbSettings = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_DATABASE,
    options: {
        trustedConnection: true,
        encrypt: true,
        trustServerCertificate: true,
      },
}

async function getConnection(){
    try{
    const pool = await sql.ConnectionPool(dbSettings)
    return pool;
    } catch (error){
        console.error(error);
    }
}

module.exports.getConnection = getConnection;
module.exports.sql = sql;

sql.ConnectionPool(dbSettings)