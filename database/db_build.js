// This file should be run once to import seed data to the database!!

const careerModel = require('./career_model.js');
const db = require('./db_connection.js');
const careers = require('./seed_data.js');

db.once('open', () => {
  console.log('we are connected to DB');
  careerModel.collection.drop(); // once app is open, drop schema career

  careers.forEach((career) => {
    career.save((error, result) => {
      if (error) {
        // render error hbs
        return console.log(error);
      }
      return console.log('Saved seed data to database');
    });
  });
});
