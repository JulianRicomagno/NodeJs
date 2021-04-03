//Se importan los modulos
const express = require('express');
const bodyParser = require('body-parser');

//Llamamos conexion, routes
const conn = require('./conn/conn');
const api = require('./routes')

//Llamamos express
const app = express();

//Convertir peticiones a Json
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);
app.use(bodyParser.json());

app.use('/api', api);

//Creamos el puerto de salida del servidor
const port = process.env.PORT || 4005;

//Se envia mensaje para probar respuesta del servidor
app.get('/', (req, res) => res.send('Server Express'));

//Ponemos a escuchar el servidor
app.listen(port, () => {
    console.log(`Express running on: http://localhost:${port}`);
});
