const queries = require('../queries/query');
const getConnection = require('../queries/database');
const sql = require('../queries/database');

const getUsers = async (req, res) => {

    try{

        const pool = await getConnection.getConnection();
        const result = await pool.request().query(queries.queries.getAllUsers);
        res.json({users: result.recordset});

    } catch( error) {

        res.status(500);
        res.send(error.message);

    }

}
module.exports.getUsers = getUsers;

module.exports = {  const: postUser = async (req, res) => {
    
    const { fullName, email, phoneNum, password } = req.body;
    let { avatar } = req.body;

    if ( fullName == null || email == null || phoneNum == null || password == null ){
        return res.status(400).json({msg: 'Bad Request. Please Fill all fields'})
    }

    
    if (avatar == null) avatar = "https://pfps.gg/assets/pfps/1184-bear.png";

    try{

        const pool = await getConnection.getConnection()
    
        await pool.request()
        .input("fullName", sql.sql.VarChar, fullName)
        .input("email", sql.sql.VarChar, email)
        .input("phoneNum", sql.sql.VarChar, phoneNum)
        .input("password", sql.sql.VarChar, password)
        .input("avatar", sql.sql.VarChar, avatar)
        .query(queries.queries.addNewUsers);

        res.json({ fullName, email, phoneNum, password, avatar });

    } catch( error) {

        res.status(500);
        res.send(error.message);

    }


}}

module.exports = {  const: getUserById = async (req, res) => {

    const { id } = req.params;

    const pool = await getConnection.getConnection();
    const result = await pool
        .request()
        .input("userId", id)
        .query(queries.queries.getUserId);

    res.send(result.recordset[0]);
}}

module.exports = { const: getUserEmail = async (req, res) => {

    const { email, password } = req.params;

    const pool = await getConnection.getConnection();
    const result = await pool
        .request()
        .input("email", sql.sql.VarChar, email)
        .input("password", sql.sql.VarChar, password)
        .query(queries.queries.getUserMail);

    res.send({user: result.recordset[0]});
}}


module.exports = {  const: deleteUserById = async (req, res) => {

    const { id } = req.params;

    const pool = await getConnection.getConnection();
    const result = await pool
        .request()
        .input("userId", id)
        .query(queries.queries.deleteUser);

    res.sendStatus(204);
}}

module.exports = {  const: getTotalUser = async (req, res) => {

    const pool = await getConnection.getConnection();
    const result = await pool
        .request()
        .query(queries.queries.getCountTotalUsers);

    res.send(result.recordset[0]);

}}

module.exports = {  const: updateUserById = async (req, res) => {

    const { id } = req.params;

    const { fullName, email, phoneNum, password, avatar } = req.body;

    if ( fullName == null || email == null || phoneNum == null || password == null || avatar == null ){
        return res.status(400).json({msg: 'Bad Request. Please Fill all fields'})
    }

    const pool = await getConnection.getConnection();
    const result = await pool
        .request()
        .input("fullName", sql.sql.VarChar, fullName)
        .input("email", sql.sql.VarChar, email)
        .input("phoneNum", sql.sql.VarChar, phoneNum)
        .input("password", sql.sql.VarChar, password)
        .input("avatar", sql.sql.VarChar, avatar)
        .input("userId", sql.sql.Int, id)
        .query(queries.queries.updateUsers);

    res.send({ fullName, email, phoneNum, password, avatar });

}}