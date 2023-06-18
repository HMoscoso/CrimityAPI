import { Router } from 'express'
import { deletePostById, getPostById, getPosts, getTotalPost, postPosts, updatePostById } from '../models/Post.js';

const router = Router();
import faker from 'faker'

router.get('/posts', getPosts);

router.post('/posts/post', postPosts);

router.get('/posts/get/:id', getPostById);

router.get('/posts/count', getTotalPost);

router.delete('/posts/delete/:id', deletePostById);

router.put('/posts/put/:id', updatePostById);


export default router