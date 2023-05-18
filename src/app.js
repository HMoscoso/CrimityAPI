import express from 'express'
import config from './config.js'
import morgan from 'morgan';
import cors from 'cors';

import userRoutes from './routes/users.js'
import crimeRoutes from './routes/crimes.js'
import postRoutes from './routes/posts.js'

const app = express();

//settings
app.set('port', config.port)

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(userRoutes);
app.use(crimeRoutes);
app.use(postRoutes);


export default app;