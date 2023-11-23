//Rutas para producto
const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoConotroller');

// api/productos
router.post('/', productoController.crearProducto);
module.exports = router;