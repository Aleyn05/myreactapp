// Appointment.js

import React, { useState } from 'react';
import './Appointment.css';

const Appointment = () => {
  const [action, setAction] = useState('Request Appointment');
  const [appointmentType, setAppointmentType] = useState('Imaging');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [petName, setPetName] = useState('');
  const [petColor, setPetColor] = useState('');
  const [petBreed, setPetBreed] = useState('');
  const [petSpecies, setPetSpecies] = useState('');
  const [petAge, setPetAge] = useState('');
  const [petBirthday, setPetBirthday] = useState('');

  const handleButtonClick = () => {
    if (action === 'Request Appointment') {
      setAction('Submit Appointment');
    } else {
      // Display a confirmation popup when the appointment is booked
      window.alert('Appointment Booked!');
      // You can also add further actions here, like submitting the form data to a server

      // Reset the form after submission
      setAction('Request Appointment');
      setAppointmentType('Imaging');
      setSelectedDoctor('');
      setSpecialRequests('');
      setSelectedDate('');
      setSelectedTime('');
      setFirstName('');
      setLastName('');
      setMobileNumber('');
      setPetName('');
      setPetColor('');
      setPetBreed('');
      setPetSpecies('');
      setPetAge('');
      setPetBirthday('');
    }
  };

  const handleGoBack = () => {
    setAction('Request Appointment');
  };

  const handleDropdownChange = (event) => {
    setAppointmentType(event.target.value);
  };

  const handleDoctorChange = (event) => {
    setSelectedDoctor(event.target.value);
  };

  const handleSpecialRequestsChange = (event) => {
    setSpecialRequests(event.target.value);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const generateTimeOptions = () => {
    const timeOptions = [];
    for (let i = 8; i <= 20; i++) {
      const formattedHour = i % 12 || 12;
      const period = i < 12 ? 'AM' : 'PM';
      const formattedTime = `${formattedHour}:00 ${period}`;
      timeOptions.push(
        <option key={formattedTime} value={formattedTime}>
          {formattedTime}
        </option>
      );
    }
    return timeOptions;
  };

  return (
    <div className='appointment-container'>
      <img className='appointment-banner' src="./login-banner.jpg" alt="banner" />
      <div className="header">
        {action === 'Request Appointment' && (
          <>
            <div className="text" style={{ fontSize: '70px' }}>
              {action}
            </div>
            <div className="underline"></div>
          </>
        )}
      </div>
      <div className="info-text">
        {action === 'Request Appointment' ? (
          <>
            <p>
              Read all the information on this page, then click the button below to book an appointment with us!
              <br />Online booking can be processed up to 2 hours before your target appointment time.
            </p>
            <p>
              Call us at (0927) 301-7353 to inquire about all available timeslots.
            </p>
            <p>
              <br />
              By submitting your personal details, you declare that the information you have given is true, correct, and complete.
              <p>You also hereby authorize Pet Health Hub to collect your information, and that your personal information is protected by RA 10173 or the Data Privacy Act of 2012.
              </p>
            </p>
          </>
        ) : null}
      </div>
      {action === "Submit Appointment" ? (
        <>
          <div className="left-column">
            <div className="inputs">
              <div className="input">
                <label className="label" htmlFor="firstName">First Name:</label>
                <input type="text" id="firstName" placeholder="Enter your first name" onChange={(e) => setFirstName(e.target.value)} />
              </div>
            </div>
            <div className="inputs">
              <div className="input">
                <label className="label" htmlFor="lastName">Last Name:</label>
                <input type="text" id="lastName" placeholder="Enter your last name" onChange={(e) => setLastName(e.target.value)} />
              </div>
            </div>
            <div className="inputs">
              <div className="input">
                <label className="label" htmlFor="mobileNumber">Mobile Number:</label>
                <input type="tel" id="mobileNumber" placeholder="Enter your mobile number" onChange={(e) => setMobileNumber(e.target.value)} />
              </div>
            </div>
            <div className="inputs">
              <div className="input">
                <label className="label" htmlFor="petName">Pet's Name:</label>
                <input type="text" id="petName" placeholder="Enter your pet's name" onChange={(e) => setPetName(e.target.value)} />
              </div>
            </div>
            <div className="inputs">
              <div className="input">
                <label className="label" htmlFor="petColor">Pet's Color:</label>
                <input type="text" id="petColor" placeholder="Enter your pet's color" onChange={(e) => setPetColor(e.target.value)} />
              </div>
            </div>
            <div className="inputs">
              <div className="input">
                <label className="label" htmlFor="petBreed">Pet's Breed:</label>
                <input type="text" id="petBreed" placeholder="Enter your pet's breed" onChange={(e) => setPetBreed(e.target.value)} />
              </div>
            </div>
            <div className="inputs">
              <div className="input">
                <label className="label" htmlFor="petSpecies">Type of Specie:</label>
                <input type="text" id="petSpecie" placeholder="Enter your pet's species" onChange={(e) => setPetSpecies(e.target.value)} />
              </div>
            </div>
            <div className="inputs">
              <div className="input">
                <label className="label" htmlFor="petAge">Pet's Age:</label>
                <input type="text" id="petAge" placeholder="Enter your pet's age" onChange={(e) => setPetAge(e.target.value)} />
              </div>
            </div>
            <div className="inputs">
              <div className="input">
                <label className="label" htmlFor="petBirthday">Pet's Birthday:</label>
                <input type="date" id="petBirthday" onChange={(e) => setPetBirthday(e.target.value)} />
              </div>
            </div>
          </div>
          <div className="right-column">
            <div className="inputs">
              <div className="input">
                <label htmlFor="appointmentType">Appointment Type:</label>
                <select id="appointmentType" value={appointmentType} onChange={handleDropdownChange}>
                  <option value="">Select Appointment Type</option>
                  <option value="Imaging">Imaging (ultrasound, X-rays)</option>
                  <option value="Consultation">Consultation / Standard</option>
                  <option value="TeleConsult">Tele/Video Consult</option>
                  <option value="LaboratoryTesting">Laboratory Testing</option>
                  <option value="Referral">Referral from another Veterinarian</option>
                </select>
              </div>
            </div>
            <div className="inputs">
              <div className="input">
                <label htmlFor="doctor">Select Doctor:</label>
                <select id="doctor" value={selectedDoctor} onChange={handleDoctorChange}>
                  <option value="">Select Doctor</option>
                  <option value="DrPerez">Dr. Perez</option>
                  <option value="DrAmel">Dr. Amel</option>
                  <option value="DrUy">Dr. Uy</option>
                </select>
              </div>
            </div>
            <div className="inputs">
              <div className="input">
                <label htmlFor="date">Select Date:</label>
                <input type="date" id="date" value={selectedDate} onChange={handleDateChange} />
              </div>
            </div>
            <div className="inputs">
              <div className="input">
                <label htmlFor="time">Select Time:</label>
                <select id="time" value={selectedTime} onChange={handleTimeChange}>
                  <option value="">Select Time</option>
                  {generateTimeOptions()}
                </select>
              </div>
            </div>
            <div className="inputs" style={{ height: '100px' }}>
              <div className="input">
                <label htmlFor="specialRequests">Special Requests (optional):</label>
                <textarea id="specialRequests" value={specialRequests} onChange={handleSpecialRequestsChange} />
              </div>
            </div>
            <div className='go-back-container'>
              <div className='go-back' onClick={handleGoBack}>
                Go Back
              </div>
            </div>
          </div>
        </>
      ) : null}
      <div className='submit-container'>
        <div className={action === "Submit Appointment" ? "submit" : "request-appointment"} onClick={handleButtonClick}>
          {action}
        </div>
      </div>
    </div>
  );
};

export default Appointment;
