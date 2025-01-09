// routes/volunteers.js
const express = require('express');
const Volunteer = require('../models/Volunteer');
const router = express.Router();

// Create a new volunteer
router.post('/', async (req, res) => {
  const { name, email, skills, location, availability } = req.body;

  try {
    const newVolunteer = new Volunteer({ name, email, skills, location, availability });
    await newVolunteer.save();
    res.status(201).json(newVolunteer);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Get all volunteers
router.get('/', async (req, res) => {
  try {
    const volunteers = await Volunteer.find();
    res.status(200).json(volunteers);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
