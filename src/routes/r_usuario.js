const express = require('express');
const router = express.Router();
const Usuario = require('../models/m_usuario');

router.get('/created', async (req, res) => {

    var usu = new Usuario();

    usu['codigo'] = req.query.codigo;
    usu['nombre'] = req.query.nombre;
    usu['apellido'] = req.query.apellido;
    usu['email'] = req.query.email;

    await usu.save();
    const usuarios = await Usuario.find();
    res.send({ usuarios });

});
router.get('/read', async (req, res) => {
    console.log('usuario => read');
});
router.get('/update', async (req, res) => {

    var usu = new Usuario();

    usu['codigo'] = req.query.codigo;
    usu['nombre'] = req.query.nombre;
    usu['apellido'] = req.query.apellido;
    usu['email'] = req.query.email;
    
    //await Usuario.updateOne({_id: req.query._id}, usu);

});
router.get('/delete', async (req, res) => {

    await Usuario.deleteOne({_id:req.query._id});
    const usuarios = await Usuario.find();
    res.send({ usuarios });

});
router.get('/toList', async (req, res) => {

    const usuarios = await Usuario.find();
    res.send({ usuarios });

});
router.get('/', async (req, res) => {

    console.log('usuario => index');

});
router.get('*', async (req, res) => {

    console.log('usuario => index');

});

module.exports = router;