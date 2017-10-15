const mongoose = require('mongoose');
require('env2')('./config.env');

const db = mongoose.connection;
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, {
  useMongoClient: true
});

module.exports = db;
