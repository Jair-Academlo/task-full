require('colors');
const { app } = require('./app');
const { db } = require('./utils/database');
const { User } = require('./models/user.model');
const { Task } = require('./models/taks.model');

db.authenticate()
  .then(() => console.log('datos autenticados'.magenta))
  .catch(error => console.log(error));

db.sync()
  .then(() => console.log('datos sincronizados'.magenta))
  .catch(error => console.log(error));

//relacion muchos a uno

User.hasMany(Task, { foreignKey: 'userId' });
Task.belongsTo(User);

const PORT = 4100;

app.listen(PORT, () => {
  console.log(`el servidor se esta ejecutando en el puerto ${PORT}`.cyan);
});
//hola a todos esto es un ensayo
