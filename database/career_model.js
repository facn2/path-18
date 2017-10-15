const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const careerSchema = new Schema({
  title: String,
  tagline: String,
  description: String,
  image: String,
  degree: String,
  grade_bagrut: Number,
  grade_psychometric: Number,
  universities: String,
  salary_start: String,
  salary_ten_year: String
});

const Career = mongoose.model('Career', careerSchema);

module.exports = Career;