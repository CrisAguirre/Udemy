const express = require('express');
//Creamos server
const app = express();
//Ruta Pcipal
app.get('/', (req, res)=>{
    res.send('Hola Gono');
})

app.listen(4000, ()=>{
    console.log("Server is Running MTF!");
})