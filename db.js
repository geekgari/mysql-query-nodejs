const mysql = require('mysql');
const dotenv = require('dotenv');
require('dotenv').config();

let connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

connection.connect((err) => {
  if (!err) {
    console.log('Database is connecting');
  } else {
    console.log('Error connection');
  }
});

//*** create db name ***/
// var sql = 'CREATE DATABASE contact_info';

//*** create table ***/
// var sql =
//   'CREATE TABLE users(id MEDIUMINT(9) UNSIGNED NOT NULL AUTO_INCREMENT, first_name VARCHAR(100), last_name VARCHAR(100), birthday date, sex CHAR(1), address VARCHAR(100), city VARCHAR(50), state VARCHAR(2), postal_code VARCHAR(10), day_phone VARCHAR(10), email VARCHAR(100), primary key(id))';

//*** insert users ***/
// var sql =
//   'INSERT INTO users(id, first_name, last_name, birthday, sex, address, city, state, postal_code, day_phone, email) VALUES ?';

//*** input contact info ***/
// var values = [
//   [
//     '1',
//     'Bobby',
//     'Champs',
//     '1991-08-24',
//     'M',
//     '123 Garfield St',
//     'San Francisco',
//     'CA',
//     '94101',
//     '4158342945',
//     'bob@yahoo.com'
//   ],
//   [
//     '2',
//     'Sarina',
//     'Kati',
//     '1984-02-14',
//     'F',
//     '68 Verence St',
//     'San Jose',
//     'CA',
//     '95106',
//     '2133458542',
//     'skati@gmail.com'
//   ],
//   [
//     '3',
//     'Jackie',
//     'Cho',
//     '1964-07-20',
//     'M',
//     '9742 Waterfall Rd',
//     'San Rafael',
//     'CA',
//     '92057',
//     '3359372833',
//     'jcho@gmail.com'
//   ]
// ];

// connection.query(sql, [values], (err, results) => {
//   if (err) throw err;
//   console.log(results);
// });

module.exports = connection;
