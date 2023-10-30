const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.get("/", usuarioController.listarUsuarios);
router.get("/:id", usuarioController.buscarUsuarioPorID);
router.post("/", usuarioController.cadastrarUsuario);
router.put("/:id", usuarioController.editarUsuario);
router.delete("/:id", usuarioController.deletarUsuario);

module.exports = router;