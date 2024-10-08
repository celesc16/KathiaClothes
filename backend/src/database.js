const mysql = require('mysql2'); 
require('dotenv').config();  // Cargar las variables de entorno

//cadena de conexiones
const db = mysql.createConnection( {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME

});

db.connect( err => {
    if(err){
        console.log('error de conexion' , err);
        throw err;
    }
    console.log('Conexion a la base de dato establecida');
})

module.exports = db;
