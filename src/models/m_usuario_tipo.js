const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const x = new Schema({

    codigo: String,
    descripcion: String,
    estado: String

} ,
{ collection: 'usuario_tipo'});


module.exports = mongoose.model('usuario_tipo', x);
