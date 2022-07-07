const express = require('express');
const app = express();

app.set('view engine','ejs'); //Invocar al motor de plantillas

app.use(express.urlencoded({extends:false}));
app.use(express.json());

app.use('/', require('./router'));

app.listen(5000, ()=>{
    console.log('Servidor Corriendo en http://localhost:5000')
});



