import { getConnection, sql, queries } from '../queries/index.js';

export const getUsers = async (req, res) => {

    try{

        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllUsers);
        res.json({users: result.recordset});

    } catch( error) {

        res.status(500);
        res.send(error.message);

    }

};


export const postUser = async (req, res) => {
    
    const { fullName, email, phoneNum, password } = req.body;
    let { avatar } = req.body;

    if ( fullName == null || email == null || phoneNum == null || password == null ){
        return res.status(400).json({msg: 'Bad Request. Please Fill all fields'})
    }

    
    if (avatar == null) avatar = "https://pfps.gg/assets/pfps/1184-bear.png";

    try{

        const pool = await getConnection()
    
        await pool.request()
        .input("fullName", sql.VarChar, fullName)
        .input("email", sql.VarChar, email)
        .input("phoneNum", sql.VarChar, phoneNum)
        .input("password", sql.VarChar, password)
        .input("avatar", sql.VarChar, avatar)
        .query(queries.addNewUsers);

        res.json({ fullName, email, phoneNum, password, avatar });

    } catch( error) {

        res.status(500);
        res.send(error.message);

    }


};

export const getUserById = async (req, res) => {

    const { id } = req.params;

    const pool = await getConnection();
    const result = await pool
        .request()
        .input("userId", id)
        .query(queries.getUserId);

    res.send(result.recordset[0]);
};

export const getUserEmail = async (req, res) => {

    const { email, password } = req.params;

    const pool = await getConnection();
    const result = await pool
        .request()
        .input("email", sql.VarChar, email)
        .input("password", sql.VarChar, password)
        .query(queries.getUserMail);

    res.send({user: result.recordset[0]});
};


export const deleteUserById = async (req, res) => {

    const { id } = req.params;

    const pool = await getConnection();
    const result = await pool
        .request()
        .input("userId", id)
        .query(queries.deleteUser);

    res.sendStatus(204);
};

export const getTotalUser = async (req, res) => {

    const pool = await getConnection();
    const result = await pool
        .request()
        .query(queries.getCountTotalUsers);

    res.send(result.recordset[0]);

};

export const updateUserById = async (req, res) => {

    const { id } = req.params;

    const { fullName, email, phoneNum, password, avatar } = req.body;

    if ( fullName == null || email == null || phoneNum == null || password == null || avatar == null ){
        return res.status(400).json({msg: 'Bad Request. Please Fill all fields'})
    }

    const pool = await getConnection();
    const result = await pool
        .request()
        .input("fullName", sql.VarChar, fullName)
        .input("email", sql.VarChar, email)
        .input("phoneNum", sql.VarChar, phoneNum)
        .input("password", sql.VarChar, password)
        .input("avatar", sql.VarChar, avatar)
        .input("userId", sql.Int, id)
        .query(queries.updateUsers);

    res.send({ fullName, email, phoneNum, password, avatar });

};