/* eslint no-console:0 */
/* eslint consistent-return:0 */
import path from 'path';
import webpack from 'webpack';
import express from 'express';
import devMiddleware from 'webpack-dev-middleware';
import hotMiddleware from 'webpack-hot-middleware';
import config from '../../webpack.hot.reload.config';
import chalk from 'chalk';
import mongoose from 'mongoose';

import adminRoutes from './routes/admin';
import infirmierRoutes from './routes/infirmier';
import patientRequestRoutes from './routes/patientRequest';

const app = express();
const DOCS_PATH = '../../docs/';

if(process.env.NODE_ENV === 'dev') {
  const compiler = webpack(config);

  app.use(devMiddleware(compiler, {
    publicPath: config.output.publicPath,
    historyApiFallback: true
  }));

  app.use(hotMiddleware(compiler));

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });
} else {
  app.use(express.static(path.join(__dirname, DOCS_PATH)));

  app.get('/', (req, res) => res.sendFile(path.join(__dirname, DOCS_PATH, 'index.html')));
}


adminRoutes.setup(app, '/api/admin');
infirmierRoutes.setup(app, '/api/infirmier');
patientRequestRoutes.setup(app, '/api/patient');

// set native promises as mongoose promise
mongoose.Promise = global.Promise;

// set mongoDB connection

// Mongo Prod

mongoose.connect('mongodb://admin:Infiproxi4Fun!@ds247479.mlab.com:47479/infiproxi', (error) => {
  if (error) {
    console.error('Please make sure Mongodb is installed and running!');
    throw error;
  }
  mongoose.connection.db.dropDatabase();
  require('./injectMongo');
});

// get the default connection
const db = mongoose.connection;


// bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//require('./injectMongo');

app.listen(8910, (err) => {
  if (err) {
    return console.error(err);
  }
  console.log(
    `
      =====================================================
      -> Server (${chalk.bgBlue('Hot reload')}) 🏃 (running) on ${chalk.green('localhost')}:${chalk.green('8910')}
      =====================================================
    
       The app is now running in ${process.env.NODE_ENV} mode. I wish you an happy coding time ${chalk.red('<3')}
    `
  );
});



