const { User } = require('../models/user.model');
const { Task } = require('../models/taks.model');

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const newUser = await User.create({ name, email, password });

    res.status(201).json({
      message: 'usuario creado',
      status: 'operacion exitosa',
      newUser,
    });
  } catch (error) {
    console.log(error);
  }
};

const AllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      where: { status: 'Active' },
      include: Task,
    });

    res.status(200).json({
      message: 'has traido con exito todos los usuarios creados',
      status: 'operacion exitosa',
      users,
    });
  } catch (error) {
    console.log(error);
  }
};

const userById = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = await User.findOne({ where: { id } });

    if (!userId) {
      res.status(404).json({
        message: 'oye ese id no existe',
        status: 'operacion fallida',
      });
    } else {
      res.status(200).json({
        message: 'este es el id que estabas buscando',
        status: 'opecion exitosa',
        userId,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;
    const userUpdater = await User.findOne({ where: { id } });
    if (!userUpdater) {
      return res.status(404).json({
        messaage: 'el usuario no se ha encontrado, no se puede actualizar',
        status: 'opecion fallida',
      });
    } else {
      res.status(200).json({
        message: 'El usuario se ha actualizado',
        status: 'operacion exitosa',
        userUpdater,
      });

      await userUpdater.update({ name, email });
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const userDelete = await User.findOne({ where: { id } });

    if (!userDelete) {
      return res.status(404).json({
        message: 'El susuario no se encontro, no se puede eliminar',
        status: 'operacion fallida',
      });
    } else {
      res.status(200).json({
        message: 'El usuario se ha eliminado',
        status: 'operacion exitosa',
        userDelete,
      });

      await userDelete.update({ status: 'cancelled' });
    }
  } catch (error) {
    console.log(error);
  }
};
module.exports = { createUser, AllUsers, userById, updateUser, deleteUser };
