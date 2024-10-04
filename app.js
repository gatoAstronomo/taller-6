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

app.listen(3021, () => {
    console.log('Servidor ejecucion en puerto 3021');
});