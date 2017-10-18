const app = require('./server.js');
const connection = require('./../database/db_connection.js');

const PORT = process.env.PORT || 9876;

connection.once('open', () => {
  console.log('Connected to database');
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});
