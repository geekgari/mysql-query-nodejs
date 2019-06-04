const express = require('express');
const morgan = require('morgan');
const port = process.env.PORT || 8800;
const app = express();

let connection = require('./db');
/***************************************************** */
app.use(morgan('dev'));

//to check home page working...
app.get('/', (req, res) => {
  console.log('Responding to root');
  res.send('Hey root!');
});

//to get all users
app.get('/users', (req, res) => {
  let sql = 'SELECT * FROM users';
  connection.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

app.get('/user/:id', (req, res) => {
  console.log('Fetching a user with id' + req.params.id);

  const userId = req.params.id;
  let querystring = 'SELECT * FROM users WHERE id = ?';
  connection.query(querystring, [userId], (err, rows) => {
    if (err) {
      console.log('Failed to query the users ' + err);
      res.sendStatus(500);
      res.end();
      return;
    } else {
      console.log('Fetched users successfully');
      res.json(rows);
    }
  });
});

app.listen(port, () => console.log(`Listening to port ${port}`));
