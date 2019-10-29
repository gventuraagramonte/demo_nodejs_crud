//

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const x = new Schema({

    codigo: String,
    nombres: String,
    apellidos: String,
    email: { type: String, unique: true },
    telefono_celular: String,
    estado: String

}, { collection: 'afiliacion' });


module.exports = mongoose.model('afiliacion', x);
