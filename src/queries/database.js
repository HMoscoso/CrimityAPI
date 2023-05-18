import sql from 'mssql'
import config from '../config'


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

export async function getConnection(){
    try{
    const pool = await sql.connect(dbSettings)
    return pool;
    } catch (error){
        console.error(error);
    }
}

export {sql};

sql.connect(dbSettings)