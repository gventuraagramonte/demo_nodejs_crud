const path =  require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

// conn db
mongoose.connect('mongodb://localhost/bd_compuciber')
.then( db => console.log('Db connected') )
.catch(err=>console.log(err));

// middlewares
app.use(morgan('dev'));
app.use( express.urlencoded({extended:false}) );
app.use('/css' , express.static(__dirname + '/public/css') );
app.use('/js' , express.static(__dirname + '/public/js') );
app.use('/dx' , express.static(__dirname + '/public/dx') );
app.use('/image' , express.static(__dirname + '/public/image') );

// routes settings
const indexRoutes = require('./routes/r_index');
const usuarioRoutes = require('./routes/r_usuario');

// routes
app.use('/usuario', usuarioRoutes);
app.use('/index', indexRoutes);
app.use('/', indexRoutes);
app.use('*', indexRoutes);

app.set('views', path.join( __dirname , '/views' ) );
app.set('view engine', 'ejs' );

// starting the server
app.listen(3000, ()=>{
    console.log('Server on port 3000');
});
