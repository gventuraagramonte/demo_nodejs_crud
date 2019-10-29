const express = require('express');
const router = express.Router();
const Afiliacion = require('../models/m_afiliacion');


router.get('/created', async (req, res) => {

    try {

        var usu = new Afiliacion();
        usu['codigo'] = "cantidad";
        usu['nombres'] = req.query.nombres;
        usu['apellidos'] = req.query.apellidos;
        usu['email'] = req.query.email;
        usu['telefono_celular'] = req.query.telefono_celular;
        usu['estado'] = "A";

        await Afiliacion.countDocuments(function (err, count) {

            usu['codigo'] = count + 1;;

        });


        await usu.save();
        res.send("Registro satisfactorio");

    } catch (error) {

        let mensaje = "Ya te registraste con ese correo";
        if( error.code === 11000 ){
            res.send( "" + mensaje + " : " + req.query.email );
        }else{
            res.send( "" + error.code );
        }

        

    }
    

});


router.get('/read', async (req, res) => {

    console.log('usuario => read');

});


router.get('/update', async (req, res) => {
    /*
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
    */
});


router.get('/delete', async (req, res) => {
    /*
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
    */
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

        const afiliaciones = await Afiliacion.find({ estado: 'A' });

        res.send({ afiliaciones });

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