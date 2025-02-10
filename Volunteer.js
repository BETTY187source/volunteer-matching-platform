                         
// models/Volunteer.js
const mongoose = require('mongoose');

const volunteerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  skills: [String],
  location: { type: String, required: true },
  availability: { type: String, required: true },
});

const Volunteer = mongoose.model('Volunteer', volunteerSchema);

module.exports = Volunteer;
