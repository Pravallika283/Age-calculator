import React, { useState } from 'react';
import moment from 'moment';
import './AgeCalculator.css'; // Import CSS for styling

const AgeCalculator = () => {
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState('');

  const handleBirthdateChange = (event) => {
    setBirthdate(event.target.value);
  };

  const calculateAge = () => {
    const today = moment();
    const birthDate = moment(birthdate);
    const age = today.diff(birthDate, 'years');
    setAge(age);
  };

  return (
    <div className="age-calculator">
      <h1>Age Calculator</h1>
      <h3>Enter your date of birth</h3>
      <input
        type="date"
        value={birthdate}
        onChange={handleBirthdateChange}
      />
      <button className="calculate-button" onClick={calculateAge}>
        Calculate Age
      </button>
      {age && <p><b>Your age is: {age} years</b></p>}
    </div>
  );
};

export default AgeCalculator;
