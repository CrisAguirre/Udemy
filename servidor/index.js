const express = require('express');
const conectarDB = require('./config/db')
const cors = require('cors')

//Creamos server
const app = express();

//Conectamos la BD
conectarDB();
app.use(cors());

app.use(express.json());
app.use('/api/productos', require('./routes/producto'));

//app.use('/api/productos', require('./routes/producto'));
//Ruta Pcipal
//app.get('/', (req, res)=>{
  //  res.send('Hola Gono');
//})

app.listen(4000, ()=>{
    console.log("Server is Running MTF!");
})