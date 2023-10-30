const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.get("/", usuarioController.listarUsuarios);
router.get("/:id", usuarioController.buscarUsuarioPorID);

module.exports = router;