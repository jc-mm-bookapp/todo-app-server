'use strict'

const express = require('express');
const app = express();
const PORT = process.env.PORT;
const conString = 'postgres://teehbplufjhbya:cdeab23e5a259b227109041ca1a326ea71643ecd21c9f06c5cd46f12098c6186@ec2-54-204-39-46.compute-1.amazonaws.com:5432/d7a63eb769ugos';
const client = new pg.Client(conString);
client.connect();
client.on('error', err => {
  console.error(err);
});
app.get('/', (req, res) => res.send('Testing 1, 2, 3'));

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
