const queries = require('../queries/query');
const getConnection = require('../queries/database');
const sql = require('../queries/database');

const getPosts = async (req, res) => {

    try{

        const pool = await getConnection();
        const result = await pool.request().query('SELECT * FROM Posts');
        res.json({posts: result.recordset});

    } catch( error) {

        res.status(500);
        res.send(error.message);

    }

}
module.exports.getPosts = getPosts;


const postPosts = async (req, res) => {
    
    const { fullName, email, avatar, description, distritoId } = req.body;

    if ( fullName == null ||  email == null || avatar == null || description == null || distritoId == null ){
        return res.status(400).json({msg: 'Bad Request. Please Fill all fields'})
    }


    try{

        const pool = await getConnection()
    
        await pool.request()
        .input("fullName", sql.VarChar, fullName)
        .input("email", sql.VarChar, email)
        .input("avatar", sql.VarChar, phoneNum)
        .input("description", sql.VarChar, password)
        .input("distritoId", sql.Int, avatar)
        .query('INSERT INTO Posts (fullName, email, avatar, description, distritoId) VALUES (@fullName, @email, @avatar, @description, @distritoId)');

        res.json({ fullName, email, avatar, description, distritoId });

    } catch( error) {

        res.status(500);
        res.send(error.message);

    }


}
module.exports.postPosts = postPosts;


const getPostById = async (req, res) => {

    const { id } = req.params;

    const pool = await getConnection();
    const result = await pool
        .request()
        .input("postId", id)
        .query('SELECT * FROM Posts WHERE postId = @postId');

    res.send(result.recordset[0]);
}
module.exports.getPostById = getPostById;


const deletePostById = async (req, res) => {

    const { id } = req.params;

    const pool = await getConnection();
    const result = await pool
        .request()
        .input("postId", id)
        .query('DELETE FROM Posts WHERE postId = @postId');

    res.sendStatus(204);
}
module.exports.deletePostById = deletePostById;


const getTotalPost = async (req, res) => {

    const pool = await getConnection();
    const result = await pool
        .request()
        .query('SELECT COUNT(*) FROM Posts');

    res.send(result.recordset[0]);

}
module.exports.getTotalPost = getTotalPost;


const updatePostById = async (req, res) => {

    const { id } = req.params;

    const { fullName, email, avatar, description, distritoId } = req.body;

    if ( fullName == null || email == null || phoneNum == null || password == null || avatar == null ){
        return res.status(400).json({msg: 'Bad Request. Please Fill all fields'})
    }

    const pool = await getConnection();
    const result = await pool
        .request()
        .input("postId", sql.Int, id)
        .input("fullName", sql.VarChar, fullName)
        .input("email", sql.VarChar, email)
        .input("avatar", sql.VarChar, avatar)
        .input("description", sql.VarChar, description)
        .query('UPDATE Posts SET fullName = @fullName, email = @email, avatar = @avatar, description = @description WHERE postId = @postId');

    res.send({ fullName, email, avatar, description });

}
module.exports.updatePostById = updatePostById;