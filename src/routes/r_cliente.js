const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    console.log('cliente => index');
});
router.get('/index', async (req, res) => {
    console.log('cliente => index');
});
router.get('/created', async (req, res) => {
    console.log('cliente => created');
});
router.get('/read', async (req, res) => {
    console.log('cliente => read');
});
router.get('/update', async (req, res) => {
    console.log('cliente => update');
});
router.get('/delete', async (req, res) => {
    console.log('cliente => delete');
});
router.get('/toList', async (req, res) => {
    console.log('cliente => toList');
});

module.exports = router;