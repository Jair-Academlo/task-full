const express = require('express');
const { createUserValidator } = require('../middlewares/validator.middleware');

const {
  createUser,
  AllUsers,
  userById,
  updateUser,
  deleteUser,
} = require('../controllers/user.controller');

const router = express.Router();

router.post('/', createUserValidator, createUser);
router.get('/', AllUsers);
router.get('/:id', userById);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = { userRouter: router };
