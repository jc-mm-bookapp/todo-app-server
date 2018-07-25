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

app.get('/', (req, res) => res.send('Cream Rising'));


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
