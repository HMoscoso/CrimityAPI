import app from './app.js'



async function main(){
    await app.listen(4000);
    console.log('Server on port ' + process.env.PORT + DB_USER);
}

main();