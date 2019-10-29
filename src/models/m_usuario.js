const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const x = new Schema({

    codigo: String,
    nombre: String,
    apellido: String,
    email: String,
    usuario_tipo: mongoose.Schema.Types.ObjectId,
    estado: String

}, { collection: 'usuario' });


module.exports = mongoose.model('usuario', x);
