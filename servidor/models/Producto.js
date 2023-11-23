const mongoose = require('mongoose');

const ProductoSchena = mongoose.Schema({
    producto: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    ubicacion: {
        type: String,
        required: true
    },
    precio: {
        type: String,
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    },


});

module.exports = mongoose.model('Producto', ProductoSchena)