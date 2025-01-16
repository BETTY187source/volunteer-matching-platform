 // src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/volunteers')
      .then((res) => res.json())
      .then((data) => setVolunteers(data));
  }, []);

  return (
    <div className="App">
      <h1>Volunteer Matching Platform</h1>
      <h2>Volunteer Listings</h2>
      <ul>
        {volunteers.map((volunteer) => (
          <li key={volunteer._id}>
            <h3>{volunteer.name}</h3>
            <p>Skills: {volunteer.skills.join(', ')}</p>
            <p>Location: {volunteer.location}</p>
            <p>Availability: {volunteer.availability}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
