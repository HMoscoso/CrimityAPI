const Router = require('express');
const {deleteUserById, getTotalUser, getUserById, getUserEmail, getUsers, postUser, updateUserById} = require('../models/User');


const router = Router();

router.get('/users', getUsers);

router.post('/users/post', postUser);

router.get('/users/get/id/:id', getUserById);

router.get('/users/count', getTotalUser);

router.delete('/users/delete/:id', deleteUserById);

router.put('/users/put/:id', updateUserById);

router.get('/users/get/:email/:password', getUserEmail);


module.exports = router;
