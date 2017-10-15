// This file should be run once to import seed data to the database!!

const Career = require('./career_model.js');
const connection = require('./db_connection.js');
const careerData = require('./seed_data.js');

// db.once('open', () => {
//   console.log('we are connected to DB');
//   careerModel.collection.drop(); // once app is open, drop schema career
//
//   careerData.forEach((career) => {
//     career.save((error, result) => {
//       if (error) {
//         return console.log(error);
//       }
//       return console.log('Saved seed data to database');
//     });
//   });

connection.once('open', () => {
  connection.db.dropCollection('careers', (err, res) => {
    if (err) console.log('This is the error:', err);
    Career.insertMany(careerData, (error) => {
      if (err) console.log(error);
      connection.close();
    });
  });
});
