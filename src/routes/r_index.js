const express = require('express');
const router = express.Router();


router.get('/v_articulos', async (req, res) => {

    res.render('v_articulos', null);

});


router.get('/v_clientes', async (req, res) => {

    res.render('v_clientes', null);

});


router.get('/v_proveedores', async (req, res) => {

    res.render('v_proveedores', null);

});


router.get('/v_usuarios', async (req, res) => {

    res.render('v_usuarios', null);

});

router.get('/v_usuarios_tipo', async (req, res) => {

    res.render('v_usuarios_tipo', null);

});


router.get('*', async (req, res) => {

    res.render('v_index', null);

});


module.exports = router;