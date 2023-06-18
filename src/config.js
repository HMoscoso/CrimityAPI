
import { config } from 'dotenv'
config();

console.log(process.env.PORT)

export default{
    port: 8080,
    dbUser: process.env.DB_USER || "",
    dbPassword: process.env.DB_PASSWORD || "",
    dbServer: process.env.DB_SERVER || "",
    dbDataBase: process.env.DB_DATABASE || "",
}