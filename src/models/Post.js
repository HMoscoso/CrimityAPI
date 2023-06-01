const { getConnection, sql, queries } = require('../queries/index');


module.exports = {  const: getPosts = async (req, res) => {

    try{

        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllPosts);
        res.json({posts: result.recordset});

    } catch( error) {

        res.status(500);
        res.send(error.message);

    }

}}


module.exports = {  const: postPosts = async (req, res) => {
    
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
        .query(queries.addNewPosts);

        res.json({ fullName, email, avatar, description, distritoId });

    } catch( error) {

        res.status(500);
        res.send(error.message);

    }


}}

module.exports = {  const: getPostById = async (req, res) => {

    const { id } = req.params;

    const pool = await getConnection();
    const result = await pool
        .request()
        .input("postId", id)
        .query(queries.getPostId);

    res.send(result.recordset[0]);
}}


module.exports = {  const: deletePostById = async (req, res) => {

    const { id } = req.params;

    const pool = await getConnection();
    const result = await pool
        .request()
        .input("postId", id)
        .query(queries.deletePost);

    res.sendStatus(204);
}}

module.exports = {  const: getTotalPost = async (req, res) => {

    const pool = await getConnection();
    const result = await pool
        .request()
        .query(queries.getCountTotalPosts);

    res.send(result.recordset[0]);

}}

module.exports = {  const: updatePostById = async (req, res) => {

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
        .query(queries.updatePosts);

    res.send({ fullName, email, avatar, description });

}}