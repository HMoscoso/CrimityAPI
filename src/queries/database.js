import sql from 'mssql'


const dbSettings = {
    user: 'hillary',
    password: 'wanchan',
    server: '54.237.180.198',
    database: 'crimity',
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