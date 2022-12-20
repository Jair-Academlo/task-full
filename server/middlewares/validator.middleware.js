const { body, validationResult } = require('express-validator');

//valida si hay un error con validationResult
const checkResult = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  next();
};

//express validators users

const createUserValidator = [
  body('name').notEmpty().withMessage('el campo nombre no puede estar vacio'),
  body('email')
    .notEmpty()
    .withMessage('el campo email no puede estart vacio')
    .isEmail()
    .withMessage('tiene que tener un formato email'),
  body('password')
    .notEmpty()
    .withMessage('el campo password no puede estart vacio')
    .isLength({ min: 8 })
    .withMessage('debe tener minimo ocho caracteres')
    .isAlphanumeric()
    .withMessage('debe ser alfanumerico'),
  checkResult,
];

// validator task

const createTaskValidator = [
  body('title').notEmpty().withMessage('La tarea debe tener un titulo'),
  body('userId')
    .notEmpty()
    .withMessage('userId no puede estar vacio')
    .isNumeric()
    .withMessage('userId debe ser un numero'),
  body('limitDate')
    .notEmpty()
    .withMessage('La fecha no puede estar vacia')
    .matches(/\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}/)
    .withMessage('the date format must be  YYYY-MM-DD HH:mm:ss'),

  checkResult,
];

module.exports = { createUserValidator, createTaskValidator };
