const express = require('express');
const app = express();
const ejs = require('ejs');

function getColor(m, n) {
    const colors = ["red", "blue", "green", "yellow"];
    const colorIndex = (m + n) % colors.length;
    return color[colorIndex];
}

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const m = 4;
    const n = 10;

    res.render('tabla_p1', { getColor,m , n });
})

// Ruta para procesar el formulario y generar la tabla
app.post('/generar-tabla', (req, res) => {
    const ancho = parseInt(req.body.ancho);
    const alto = parseInt(req.body.alto);
    res.render('tabla_p1', { ancho, alto });
});

app.listen(3021, () => {
    console.log('Servidor ejecucion en puerto 3021');
});