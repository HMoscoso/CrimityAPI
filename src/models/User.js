
const getConnection = require('../queries/database');
const sql = require('../queries/database');

const getUsers = async (req, res) => {

    try{

        const pool = await getConnection.getConnection();
        const result = await pool.request().query('SELECT * FROM Users');
        res.json({users: result.recordset});

    } catch( error) {

        res.status(500);
        res.send(error.message);

    }

}
module.exports.getUsers = getUsers;

const postUser = async (req, res) => {
    
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
        .query('INSERT INTO Users (fullName, email, phoneNum, password, avatar) VALUES (@fullName, @email, @phoneNum, @password, @avatar)');

        res.json({ fullName, email, phoneNum, password, avatar });

    } catch( error) {

        res.status(500);
        res.send(error.message);

    }


}

module.exports.postUser = postUser;

const getUserById = async (req, res) => {

    const { id } = req.params;

    const pool = await getConnection.getConnection();
    const result = await pool
        .request()
        .input("userId", id)
        .query('SELECT * FROM Users WHERE userId = @userId');

    res.send(result.recordset[0]);
}

module.exports.getUserById = getUserById;

const getUserEmail = async (req, res) => {

    const { email, password } = req.params;

    const pool = await getConnection.getConnection();
    const result = await pool
        .request()
        .input("email", sql.sql.VarChar, email)
        .input("password", sql.sql.VarChar, password)
        .query('SELECT * FROM Users WHERE email = @email and password = @password');

    res.send({user: result.recordset[0]});
}

module.exports.getUserEmail = getUserEmail;



const deleteUserById = async (req, res) => {

    const { id } = req.params;

    const pool = await getConnection.getConnection();
    const result = await pool
        .request()
        .input("userId", id)
        .query('DELETE FROM Users WHERE userId = @userId');

    res.sendStatus(204);
}
module.exports.deleteUserById = deleteUserById;


const getTotalUser = async (req, res) => {

    const pool = await getConnection.getConnection();
    const result = await pool
        .request()
        .query('SELECT COUNT(*) FROM Users');

    res.send(result.recordset[0]);

}

module.exports.getTotalUser = getTotalUser;


const updateUserById = async (req, res) => {

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
        .query('UPDATE Users SET fullName = @fullName, email = @email, phoneNum = @phoneNum, password = @password, avatar = @avatar WHERE userId = @userId');

    res.send({ fullName, email, phoneNum, password, avatar });

}

module.exports.updateUserById = updateUserById;