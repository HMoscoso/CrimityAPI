const Router = require('express');
const getUsers = require('../models/User');
const {deleteUserById, getTotalUser, getUserById, getUserEmail, postUser, updateUserById} = require('../models/User');


const router = Router();

router.get('/users', getUsers.getUsers);

router.post('/users/post', postUser);

router.get('/users/get/id/:id', getUserById);

router.get('/users/count', getTotalUser);

router.delete('/users/delete/:id', deleteUserById);

router.put('/users/put/:id', updateUserById);

router.get('/users/get/:email/:password', getUserEmail);


module.exports.router = router;
