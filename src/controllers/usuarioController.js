const data = require('../data/usuario.json');

const listarUsuarios = (req, res) => {
    data.usuarios
        ? res.status(200).json(data.usuarios)
        : res.status(404).json(notification.msg[4]);
};

const buscarUsuarioPorID = (req, res) => {
    const usuarioId = parseInt(req.params.id);
    const usuario = data.usuarios.find((item) => item.id === usuarioId);

    usuario
        ? res.status(200).json(usuario)
        : res.status(404).json(notification.msg[4]);
};


module.exports = {
    listarUsuarios,
    buscarUsuarioPorID
}