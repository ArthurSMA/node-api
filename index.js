const express = require('express');
const usuarioRouter = require('./src/routes/usuarioRouter');

const app = express();
const PORT = 4000;

app.use('/api/usuarios', usuarioRouter)

app.listen(PORT, () => {
    console.log(`Api sendo rodada na porta ${PORT}`);
});

app.get('/', (req, res) => {
    res.send("Api em funcionamento");
})

app.get('/about', (req, res) => {
    res.send("Esta é minha rota sobre")
})

module.exports = app;