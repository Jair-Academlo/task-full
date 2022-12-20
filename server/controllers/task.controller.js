const { Task } = require('../models/taks.model');

const crearTarea = async (req, res) => {
  try {
    const { title, userId, limitDate, startDate } = req.body;
    const nuevaTarea = await Task.create({
      title,
      userId,
      limitDate,
      startDate,
    });
    res.status(201).json({
      message: 'Tarea creada con exito',
      status: 'operacion exitosa',
      nuevaTarea,
    });
  } catch (error) {
    console.log(error);
  }
};

const obtenerTareas = async (req, res) => {
  try {
    const todasLasTareas = await Task.findAll();

    res.status(200).json({
      message: 'tareas encontradas',
      status: 'operacion exitosa',
      todasLasTareas,
    });
  } catch (error) {
    console.log(error);
  }
};

const tareasViaStatus = async (req, res) => {
  try {
    const { status } = req.params;

    const viaStatus = await Task.findAll({ where: { status } });

    if (!['Active', 'completed', 'late', 'cancelled'].includes(status)) {
      return res.status(404).json({
        message: 'El status no fue encontrado',
        status: ' operacion fallida',
      });
    } else {
      res.status(200).json({
        message: 'Estas son las tareas encontradas con el status buscado',
        status: 'operacion exitosa',
        viaStatus,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const actualizarTarea = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findOne({ where: { id } });

    const { time } = req.body;

    if (new Date(time) < new Date(task.startDate)) {
      return res.status(404).json({
        message: 'la fecha de tarea de inicio es mayor a la de la entrega',
        status: 'error de tiempos',
      });
    } else {
      await task.update({
        finishDate: new Date(time),
        status:
          new Date(task.limitDate) >= new Date(time) ? 'completed' : 'late',
      });
    }

    res.status(200).json({
      message: 'Bien Hecho, la tarea se ha actualizado',
      status: 'operacion exitosa',
    });
  } catch (error) {
    console.log(error);
  }
};

const cancelarTarea = async (req, res) => {
  try {
    const { id } = req.params;
    const tareaCancelada = await Task.findOne({ where: { id } });

    if (!tareaCancelada) {
      return res.status(404).json({
        message: 'La tarea no se pudo cancelar, Id no encontrado',
        status: 'operacion fallida',
      });
    } else if (tareaCancelada.status == 'Active') {
      await tareaCancelada.update({ status: 'cancelled' });
    } else {
      res.status(404).json({
        message: 'Error esta tarea no se puede cancellar',
        status: 'operacion fallida',
      });
    }

    res.status(200).json({
      message: 'La tarea se cancelo exitosamente',
      status: 'operacion exitosa =)',
      tareaCancelada,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  crearTarea,
  obtenerTareas,
  tareasViaStatus,
  actualizarTarea,
  cancelarTarea,
};
