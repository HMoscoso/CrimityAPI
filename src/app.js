const express = require('express');
const config = require('./config');

const userRoutes = require('./routes/users');
const crimeRoutes = require('./routes/crimes');
const postRoutes = require('./routes/posts');

const app = express();

//settings
app.set('port', config.port)

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(userRoutes.router);
app.use(crimeRoutes);
app.use(postRoutes);


module.exports = app;