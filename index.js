const express = require('express')
const app = express()
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 8080;

const ENV_UNIQ = Math.floor(Math.random() * 1000).toString();

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get('/env', (req, res) => {
  res.send({ appInstanceId: ENV_UNIQ });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});