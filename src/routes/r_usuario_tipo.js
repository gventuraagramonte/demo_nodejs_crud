const express = require('express');
const router = express.Router();
const UsuarioTipo = require('../models/m_usuario_tipo');


router.get('/created', async (req, res) => {

    try {

        var usuTipo = new UsuarioTipo();
        usuTipo['codigo'] = "cantidad";
        usuTipo['descripcion'] = req.query.descripcion;
        usuTipo['estado'] = "A";

        await UsuarioTipo.countDocuments(function (err, count) {

            usuTipo['codigo'] = count + 1;
            console.log(usuTipo['codigo']);

        });
        await usuTipo.save();
        res.send("El Usuario Tipo se ha creado de manera exitosa");

    } catch (error) {

        res.send("Hubo un error " + error);

    }


});


router.get('/read', async (req, res) => {
    /*
    console.log('UsuarioTipo => read');
    */
});


router.get('/update', async (req, res) => {

    try {

        const doc = await UsuarioTipo.findOne({ _id: req.query._id });
        const update = {
            descripcion: req.query.descripcion
        };

        await doc.updateOne(update);
        res.send("El Usuario Tipo se ha modificado de manera exitosa");

    } catch (error) {

        res.send("Hubo un error " + error);

    }



});


router.get('/delete', async (req, res) => {

    try {

        const doc = await UsuarioTipo.findOne({ _id: req.query._id });
        const update = {
            estado: 'I'
        };

        await doc.updateOne(update);
        res.send("El Usuario Tipo se ha eliminado de manera exitosa");

    } catch (error) {

        res.send("Hubo un error " + error);

    }



});


/*
router.get('/delete', async (req, res) => {

    await UsuarioTipo.deleteOne({ _id: req.query._id });
    const usuario_tipos = await UsuarioTipo.find();
    res.send({ usuario_tipos });

});
*/


router.get('/toList', async (req, res) => {

    try {

        const usuario_tipos = await UsuarioTipo.find({ estado: 'A' });

        res.send({ usuario_tipos });

    } catch (error) {

        console.error(error);

    }



});


router.get('/', async (req, res) => {

    console.log('Usuario Tipo => index');

});


router.get('*', async (req, res) => {

    console.log('Usuario Tipo => index');

});


module.exports = router;