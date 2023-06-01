const { getConnection, sql, queries } = require('../queries/index');

module.exports = {  const: getCrimes = async (req, res) => {

    try{

        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllCrimes);
        res.json({crimes: result.recordset});

    } catch( error) {

        res.status(500);
        res.send(error.message);

    }

}}


module.exports = {  const: postCrime = async (req, res) => {
    
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
        .query(queries.addNewCrimes);

        res.json({ latitude, longitude, ndelito, descripcion });

    } catch( error) {

        res.status(500);
        res.send(error.message);

    }


}}

module.exports = {  const: getCrimeById = async (req, res) => {

    const { id } = req.params;

    const pool = await getConnection();
    const result = await pool
        .request()
        .input("crimeId", id)
        .query(queries.getCrimeId);

    res.send(result.recordset[0]);
}}


module.exports = {  const: deleteCrimeById = async (req, res) => {

    const { id } = req.params;

    const pool = await getConnection();
    const result = await pool
        .request()
        .input("crimeId", id)
        .query(queries.deleteCrime);

    res.sendStatus(204);
}}

module.exports = {  const: getTotalCrime = async (req, res) => {

    const pool = await getConnection();
    const result = await pool
        .request()
        .query(queries.getCountTotalCrimes);

    res.send(result.recordset[0]);

}}

module.exports = {  const: updateCrimeById = async (req, res) => {

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
        .query(queries.updateCrimes);

    res.send({ latitude, longitude, ndelito, descripcion });

}}