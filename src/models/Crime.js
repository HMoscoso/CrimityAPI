
const getConnection = require('../queries/database');
const sql = require('../queries/database');

const getCrimes = async (req, res) => {

    try{

        const pool = await getConnection();
        const result = await pool.request().query('SELECT * FROM Crimes');
        res.json({crimes: result.recordset});

    } catch( error) {

        res.status(500);
        res.send(error.message);

    }

}
module.exports.getCrimes = getCrimes;


const postCrime = async (req, res) => {
    
    const { latitude, longitude, ndelito, descripcion } = req.body;

    if ( latitude == null || longitude == null || ndelito == null || descripcion == null ){
        return res.status(400).json({msg: 'Bad Request. Please Fill all fields'})
    }

    

    try{

        const pool = await getConnection()
    
        await pool.request()
        .input("latitude", sql.Float, latitude)
        .input("longitude", sql.Float, longitude)
        .input("ndelito", sql.VarChar, ndelito)
        .input("descripcion", sql.VarChar, descripcion)
        .query('INSERT INTO Crimes (latitude, longitude, ndelito, descripcion) VALUES (@latitude, @longitude, @ndelito, @descripcion)');

        res.json({ latitude, longitude, ndelito, descripcion });

    } catch( error) {

        res.status(500);
        res.send(error.message);

    }


}

module.exports.postCrime = postCrime;

const getCrimeById = async (req, res) => {

    const { id } = req.params;

    const pool = await getConnection();
    const result = await pool
        .request()
        .input("crimeId", id)
        .query('SELECT * FROM Crimes WHERE crimeId = @crimeId');

    res.send(result.recordset[0]);
}
module.exports.getCrimeById = getCrimeById;


const deleteCrimeById = async (req, res) => {

    const { id } = req.params;

    const pool = await getConnection();
    const result = await pool
        .request()
        .input("crimeId", id)
        .query('DELETE FROM Crimes WHERE crimeId = @crimeId');

    res.sendStatus(204);
}
module.exports.deleteCrimeById = deleteCrimeById;

const getTotalCrime = async (req, res) => {

    const pool = await getConnection();
    const result = await pool
        .request()
        .query('SELECT COUNT(*) FROM Crimes');

    res.send(result.recordset[0]);

}
module.exports.getTotalCrime = getTotalCrime;

const updateCrimeById = async (req, res) => {

    const { id } = req.params;

    const { latitude, longitude, ndelito, descripcion } = req.body;

    if ( latitude == null || longitude == null || ndelito == null || descripcion == null ){
        return res.status(400).json({msg: 'Bad Request. Please Fill all fields'})
    }

    const pool = await getConnection();
    const result = await pool
        .request()
        .input("latitude", sql.Float, latitude)
        .input("longitude", sql.Float, longitude)
        .input("ndelito", sql.VarChar, ndelito)
        .input("descripcion", sql.VarChar, descripcion)
        .input("crimeId", sql.Int, id)
        .query('UPDATE Crimes SET latitude = @latitude, longitude = @longitude, ndelito = @ndelito, descripcion = @descripcion WHERE crimeId = @crimeId');

    res.send({ latitude, longitude, ndelito, descripcion });

}
module.exports.updateCrimeById = updateCrimeById;