const mongoose = require('mongoose');
const conf = require('./conf');

const mongoUri = conf.mongo_uri;

mongoose.Promise = global.Promise;

// connect to mongo db
mongoose.connect(mongoUri, { useNewUrlParser: true })
  .then(console.log('connected to mongoDB'));

mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${mongoUri}`);});

module.exports = mongoose;
