const express = require('express');
const router = express.Router();
const Usuario = require('../models/m_usuario');


router.get('/created', async (req, res) => {

    try {

        var usu = new Usuario();
        usu['codigo'] = "cantidad";
        usu['nombre'] = req.query.nombre;
        usu['apellido'] = req.query.apellido;
        usu['email'] = req.query.email;
        usu['usuario_tipo'] = req.query.usuario_tipo;
        usu['estado'] = "A";

        await Usuario.countDocuments(function (err, count) {

            usu['codigo'] = count + 1;
            console.log(usu['codigo']);

        });


        await usu.save();
        res.send("El usuario se ha creado de manera exitosa");

    } catch (error) {

        //console.error(error);
        res.send("Hubo un error " + error);

    }

});


router.get('/read', async (req, res) => {

    console.log('usuario => read');

});


router.get('/update', async (req, res) => {

    try {

        const doc = await Usuario.findOne({ _id: req.query._id });
        const update = {
            nombre: req.query.nombre,
            apellido: req.query.apellido,
            email: req.query.email,
            usuario_tipo: req.query.usuario_tipo
        };

        await doc.updateOne(update);
        res.send("El usuario se ha modificado de manera exitosa");

    } catch (error) {

        //console.error(error);
        res.send("Hubo un error " + error);

    }
});


router.get('/delete', async (req, res) => {

    try {

        const doc = await Usuario.findOne({ _id: req.query._id });
        const update = {
            estado: 'I'
        };

        await doc.updateOne(update);
        res.send("El usuario se ha eliminado de manera exitosa");

    } catch (error) {

        //console.error(error);
        res.send("Hubo un error " + error);
        
    }
});


/*
router.get('/delete', async (req, res) => {

    await Usuario.deleteOne({ _id: req.query._id });
    const usuarios = await Usuario.find();
    res.send({ usuarios });

});
*/


router.get('/toList', async (req, res) => {

    try {

        const usuarios = await Usuario.find({ estado: 'A' });

        res.send({ usuarios });

    } catch (error) {

        console.error(error);
        //res.send("Hubo un error " + error);
    }


});


router.get('/', async (req, res) => {

    console.log('usuario => index');

});


router.get('*', async (req, res) => {

    console.log('usuario => index');

});


module.exports = router;