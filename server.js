'use strict'

const express = require('express');
const cors = require('cors');
const pg = require('pg');
const app = express();
const PORT = process.env.PORT;
const conString = process.env.DATABASE_URL;
const client = new pg.Client(conString);
client.connect();
client.on('error', err => {
  console.error(err);
});
app.use(cors());

app.get('/api/v1/books', (req, res) => {
  let SQL = 'SELECT book_id, title, author, image_url, isbn FROM books;';
  client.query(SQL)
    .then(results => res.send(results.rows))
    .catch(console.error);
});

  // --------------------------------------------------------------
  // --------------------------------------------------------------

app.get('/api/v1/books/:id', (req, res) =>{
  let SQL ='SELECT book_id, title, author, image_url, isbn, book_description FROM books WHERE book_id = $1;';
  let values = [
    req.params.id
  ];
  client.query(SQL, values)
    .then(results => res.send(results.rows))
    .catch(console.error);

})

// app.post('/api/v1/books', (req, res) =>{
//   let SQL ='INSERT INTO books (title, author, image_url, isbn, book_description) VALUES ($1, $2, $3, $4, $5);';
//   let values = [
//     req.body.title,
//     req.body.author,
//     req.body.image_url,
//     req.body.isbn,
//     req.body.description
//   ];
//   client.query(SQL, values)
//     .then(results => res.send(console.log('Update success!')))
//     .catch(console.error);
// })

  // --------------------------------------------------------------
  // --------------------------------------------------------------

app.get('*', (req, res) => {
  res.status(404).send('This route does not exist: 01 for a test message');
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
