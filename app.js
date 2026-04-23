const db = require('./db');

db.query('SELECT * FROM tasks', (err, result) => {
  if (err) throw err;
  console.log(result);
});