const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const usuarioRoutes = require('./routes/r_usuario');
const usuario_tipoRoutes = require('./routes/r_usuario_tipo');
const indexRoutes = require('./routes/r_index');

const app = express();

// conn db
mongoose.connect('mongodb://localhost/bd_compuciber')
    .then(db => console.log('Db connected'))
    .catch(err => console.log(err));


// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use('/public', express.static(__dirname + '/public'));
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/dx', express.static(__dirname + '/public/dx'));
app.use('/image', express.static(__dirname + '/public/image'));


// routes
app.use('/usuario_tipo', usuario_tipoRoutes);
app.use('/usuario', usuarioRoutes);
app.use('/index', indexRoutes);
app.use('/', indexRoutes);
app.use('*', indexRoutes);
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');


// starting the server
app.listen(3000, () => {

    console.log('Server on port 3000');

});
