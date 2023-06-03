const Router = require('express');
const getCrimes = require('../models/Crime');
const {deleteCrimeById, getTotalCrime, getCrimeById, postCrime, updateCrimeById} = require('../models/Crime');


const router = Router();

router.get('/crimes', getCrimes.getCrimes);

router.post('/crimes/post', postCrime);

router.get('/crimes/get/id/:id', getCrimeById);

router.get('/crimes/count', getTotalCrime);

router.delete('/crimes/delete/:id', deleteCrimeById);

router.put('/crimes/put/:id', updateCrimeById);


module.exports = router;
