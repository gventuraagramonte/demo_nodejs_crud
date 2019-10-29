const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UsuarioSchema = new Schema({

    codigo: String,
    nombre: String,
    apellido: String,
    email: String,
    estado: String

});


module.exports = mongoose.model('usuarios', UsuarioSchema);
