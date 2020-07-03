const express = require('express');
const bodyParser = require('body-parser')
const cors = require ('cors');

const app = express();

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.use(cors({credentials: true, 
  origin: 'http://localhost:3001', //se pone el origen de DONDE VIENE LA SOLICITUD (osea del front)
  allawedHeaders: ['Content-Type']
}))

app.use(require('./routes/routes_gets'));

app.listen(3000, ()=>{console.log('Mona Loading...')} );