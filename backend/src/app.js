const express = require('express');
const cors = require('cors');

const app = express() ; 
//middleware
app.use(cors())
app.use(express.json()) 

//Configuracion

app.set('port' , process.env.PORT || 5000 )

module.exports = app;






