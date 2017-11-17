const express = require('express')
const app = express()

let count = 0;

app.get('/', (req, res) => {
  count++;
  res.send(`I've been seen ${count} times.`)
});
