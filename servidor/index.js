const express = require('express');
const conectarDB = require('./config/db')

//Creamos server
const app = express();

//Conectamos la BD
conectarDB();

//Ruta Pcipal
app.get('/', (req, res)=>{
    res.send('Hola Gono');
})

app.listen(4000, ()=>{
    console.log("Server is Running MTF!");
})