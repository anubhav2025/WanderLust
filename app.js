const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express(); //initialise new express application

const port = process.env.port || 30001;

require('dotenv').config();

//some middlewares
app.use(express.urlencoded( { extended: true }));
app.use(express.static('public'));
app.use(expressLayouts);

app.set('layout', './layouts/main'); //setting main folder for layouts
app.set('view engine', 'ejs');

const routes = require('./server/routes/recipeRoutes.js')
app.use('/', routes);

app.listen(port, () => console.log(`Listening to port ${port}`));