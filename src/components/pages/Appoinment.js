// Appointment.js

import React, { useState } from 'react';
import './Appointment.css';

const Appointment = () => {
  const [action, setAction] = useState('Request Appointment');

  const handleButtonClick = () => {
    setAction(action === 'Request Appointment' ? 'Submit Appointment' : 'Request Appointment');
  };

  const handleGoBack = () => {
    setAction('Request Appointment');
  };

  return (
    <div className='container'>
      <img className='appointment-banner' src="./login-banner.jpg" alt="banner" />
      <div className="header">
        <div className="text" style={{ fontSize: '70px' }}>
          {action}
        </div>
        <div className="underline"></div>
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
          <div className="inputs">
            <div className='input'><input type='text' placeholder="Name" /></div>
          </div>
          <div className="inputs">
            <div className='input'>
              <input type='email' placeholder="Email" />
            </div>
          </div>
          <div className="inputs">
            <div className='input'>
              <input type='password' placeholder="Password" />
            </div>
          </div>
          <div className='go-back-container'>
            <div className='go-back' onClick={handleGoBack}>
              Go Back
            </div>
          </div>
        </>
      ) : null}
      <div className='submit-container'>
        <div className={action === "Submit Appointment" ? "submit" : "submit white"} onClick={handleButtonClick}>
          {action}
        </div>
      </div>
    </div>
  );
};

export default Appointment;
