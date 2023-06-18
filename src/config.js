const config = require('dotenv');

config.config();

console.log(process.env.PORT)

module.exports = {  
    port: process.env.PORT || 4000,
    dbUser: process.env.DB_USER || "",
    dbPassword: process.env.DB_PASSWORD || "",
    dbServer: process.env.DB_SERVER || "",
    dbDataBase: process.env.DB_DATABASE || "",
};
