// This file should be run once to populate the database with seed data!!

const Career = require('./career_model.js');
const connection = require('./db_connection.js');
const careerData = require('./seed_data.js');

connection.once('open', () => {
  connection.db.dropCollection('careers', (err, res) => {
    if (err) console.log('This is the error:', err);
    Career.insertMany(careerData, (error) => {
      if (err) console.log(error);
      connection.close();
    });
  });
});
