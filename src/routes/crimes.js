import { Router } from 'express'
import { deleteCrimeById, getTotalCrime, getCrimeById, getCrimes, postCrime, updateCrimeById } from '../models/Crime.js';

const router = Router();
import faker from 'faker'

router.get('/crimes', getCrimes);

router.post('/crimes/post', postCrime);

router.get('/crimes/get/id/:id', getCrimeById);

router.get('/crimes/count', getTotalCrime);

router.delete('/crimes/delete/:id', deleteCrimeById);

router.put('/crimes/put/:id', updateCrimeById);


export default router