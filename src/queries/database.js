import sql from 'mssql'


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