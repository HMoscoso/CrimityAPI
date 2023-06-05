const config = require('dotenv');

config.config();

console.log(process.env.PORT + process.env.DB_USER + process.env.DB_PASSWORD)

module.exports = {  
    port: process.env.PORT || 4000,
    dbUser: process.env.DB_USER || "",
    dbPassword: process.env.DB_PASSWORD || "",
    dbServer: process.env.DB_SERVER || "",
    dbDataBase: process.env.DB_DATABASE || "",
};
