import { Router } from 'express'
import { deleteUserById, getTotalUser, getUserById, getUserEmail, getUsers, postUser, updateUserById } from '../models/User.js';

const router = Router();
import faker from 'faker'

router.get('/users', getUsers);

router.post('/users/post', postUser);

router.get('/users/get/id/:id', getUserById);

router.get('/users/count', getTotalUser);

router.delete('/users/delete/:id', deleteUserById);

router.put('/users/put/:id', updateUserById);

router.get('/users/get/:email/:password', getUserEmail);


export default router
