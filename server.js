const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser');

const port = 3001
const app = express()

app.use((_request, response, next) => {
  console.log("set header");
  response.header("x-powered-by", "ExpressServer");
  next();
});

app.listen(port, () => { console.log(`listening on port ${port}`) });
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/login', (request, response) => {
  console.log('Got body:', request.body);
  //response.status(200).json({ message: 'test' });
  response.status(200).json({
    accessToken: 'test',
    roles: ['admin'],
  })
});

