'use strict'

const express = require('express');
const app = express();
const PORT = process.env.PORT;
const conString = process.env.DATABASE_URL;
const client = new pg.Client(conString);
client.connect();
client.on('error', err => {
  console.error(err);
});
app.get('/', (req, res) => res.send(' #1 Testing: Nothing means nothing, yeah. '));

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
