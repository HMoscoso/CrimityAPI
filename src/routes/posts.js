const Router = require('express');
const {deletePostById, getPostById, getPosts, getTotalPost, postPosts, updatePostById} = require('../models/Post');


const router = Router();

router.get('/posts', getPosts);

router.post('/posts/post', postPosts);

router.get('/posts/get/:id', getPostById);

router.get('/posts/count', getTotalPost);

router.delete('/posts/delete/:id', deletePostById);

router.put('/posts/put/:id', updatePostById);


module.exports = router;
