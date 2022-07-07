const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'node',
    password: 'node',
    database: 'crud_node',
});

conexion.connect((error)=>{
    if(error){
        console.error('Error de conexion: ' + error);
        return;
    }
    console.log('Se ha conectado a la base de datos');
})

module.exports = conexion