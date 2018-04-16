// @flow
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const DOCS_PATH = '../../docs/';
const PORT = 8082;
const IP_ADRESS = 'localhost';

app.set('port', PORT);
app.set('ipAdress', IP_ADRESS);


// set native promises as mongoose promise
mongoose.Promise = global.Promise;

// set mongoDB connection

// Mongo Prod

mongoose.connect('mongodb://root:root@cluster0-shard-00-00-bdaye.mongodb.net:27017,cluster0-shard-00-01-bdaye.mongodb.net:27017,cluster0-shard-00-02-bdaye.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin', (error) => {
  if (error) {
    console.error('Please make sure Mongodb is installed and running!');
    throw error;
  }
  mongoose.connection.db.dropDatabase();
});
// get the default connection
const db = mongoose.connection;


// bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// inject test date to mongo
require('./injectMongo');

app.use(express.static(path.join(__dirname, DOCS_PATH)));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, DOCS_PATH, 'index.html')));

/* eslint-disable no-console */
app.listen(
  PORT,
  IP_ADRESS,
  () => console.log(`
    ==============================================
    -> Server 🏃 (running) on ${IP_ADRESS}:${PORT}
    ==============================================
  `)
);
/* eslint-enable no-console */
