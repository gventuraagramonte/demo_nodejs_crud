/*
const mongoose = require('mongoose');


// mongodb conn
mongoose.connect('mongodb://localhost/ACME')
    .then(db => {
        console.log('** Db connected: Inicio **')
        const clienteSchema = mongoose.Schema({
           // _id: Object,
            CODCLIENTE: String,
            CODCLIENTE: String,
            FECNAC: String,
            NOMBRECOMPLETO: String,
            NOMBRE: String,
            APELLIDO: String,
            SEXO: String
        });
        
        var Cliente = mongoose.model('clientes',clienteSchema);
        const cliente = Cliente.find();

        console.log({ cliente });

        console.log('** Db connected: FIN **')
        
    })
    .catch(err => console.log(err));



//const cliente = Cliente.find();
*/


// getting-started.js
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ACME', { useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('we are connected!');
});

var kittySchema = new mongoose.Schema({
    name: String
});

var Kitten = mongoose.model('Kitten', kittySchema);
var silence

var insertarVarios = () => {
    for (let i = 0; i < 10; i++) {
        silence = new Kitten({ name: 'Silence' + Math.random() });
        silence.save();
    }
};

var listar = async () => {
    const kittens = await Kitten.find();
    for (let i = 0; i < kittens.length; i++) {
        //console.log(kittens[i]['name']);
        console.log(kittens[i]['name']);
    }
};

var eliminarUno = () => {
    Kitten.deleteOne({ name: 'Silence' }, function (err) {
        if (err) return handleError(err);
        // deleted at most one tank document
    });
};

var eliminarTodo = () => {
    Kitten.remove();
};

eliminarTodo();
listar();