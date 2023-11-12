const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

morgan.token('date', function() {
    return new Date().toISOString() 
});

const morganMiddleware = morgan(function (tokens, req, res) {
    const usuarioFilePath = path.join(__dirname, '../data/usuario.json');

    try {
        const usuarioData = require(usuarioFilePath);

        if (usuarioData.usuarios && Array.isArray(usuarioData.usuarios)) {
            usuarioData.usuarios.forEach(usuario => {
                usuario.log = {
                    'timestamp': tokens.date(req, res),
                    'method': tokens.method(req, res),
                    'url': tokens.url(req, res),
                    'status': tokens.status(req, res),
                };
            });

            const json = JSON.stringify(usuarioData, null, 4);

            fs.writeFile(usuarioFilePath, json, 'utf8', (err) => {
                if (err) {
                    console.log(`Error writing file to disk: ${err}`);
                }
            });
        } else {
            console.log('usuarioData.usuarios is not an array');
        }
    } catch (err) {
        console.log(`Error reading file or processing data: ${err}`);
    }

    return null;
});

module.exports = morganMiddleware;
