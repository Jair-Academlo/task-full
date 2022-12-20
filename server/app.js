const express = require('express');
const cors = require('cors');

const { userRouter } = require('./routes/user.routes');
const { taskRouter } = require('./routes/task.routes');

const app = express();

//middlewares

app.use(express.json());
app.use(cors());

//endpoints

app.use('/api/v1/users', userRouter);
app.use('/api/v1/task', taskRouter);

module.exports = { app };
