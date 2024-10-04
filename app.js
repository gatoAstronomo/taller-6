const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3021;

// Configurar el motor de plantillas EJS
app.set('view engine', 'ejs');

// Middleware para manejar datos de formularios
app.use(bodyParser.urlencoded({ extended: true }));

// Función para obtener el color basado en las coordenadas
function getColor(m, n) {
    const colors = ["red", "blue", "green", "yellow"];
    const colorIndex = (m + n) % colors.length;
    return colors[colorIndex];
}

// Ruta para mostrar el formulario
app.get('/', (req, res) => {
    res.render('formulario');
});

// Ruta para procesar el formulario y generar la tabla
app.post('/generar-tabla', (req, res) => {
    const ancho = parseInt(req.body.ancho);
    const alto = parseInt(req.body.alto);
    res.render('tabla_p1', { ancho, alto, getColor });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor ejecucion en puerto ${port}`);
});
