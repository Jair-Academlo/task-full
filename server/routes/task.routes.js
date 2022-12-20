const express = require('express');
const {
  crearTarea,
  obtenerTareas,
  tareasViaStatus,
  actualizarTarea,
  cancelarTarea,
} = require('../controllers/task.controller');
const { createTaskValidator } = require('../middlewares/validator.middleware');

const router = express.Router();

router.post('/', createTaskValidator, crearTarea);
router.get('/', obtenerTareas);
router.get('/:status', tareasViaStatus);
router.patch('/:id', actualizarTarea);
router.delete('/:id', cancelarTarea);

module.exports = { taskRouter: router };
