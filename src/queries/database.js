const sql = require('mssql');
const config = require('../config');


const dbSettings = {
    user: config.dbUser,
    password: config.dbPassword,
    server: config.dbServer,
    database: config.dbDataBase,
    options: {
        trustedConnection: true,
        encrypt: true,
        trustServerCertificate: true,
      },
}

async function getConnection(){
    try{
    const pool = await sql.connect(dbSettings)
    return pool;
    } catch (error){
        console.error(error);
    }
}

module.exports = getConnection();
module.exports = {sql};

sql.connect(dbSettings)