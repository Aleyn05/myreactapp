import React from 'react';
import './LogIn.css';

const LogIn = () => {
  const action = "Log In";

  const handleLoginClick = () => {
    // Replace 'YOUR_GOOGLE_DRIVE_LINK' with the actual link you want to redirect to
    window.location.href = 'https://docs.google.com/spreadsheets/d/1lVVUBI05Jdo15jd9iGeZ2wXW7iXLd09T/edit?usp=drive_link&ouid=105305282206737456035&rtpof=true&sd=true';
  };

  return (
    <div className='login-container'>
      <img className='login-banner' src="./login-banner.jpg" alt="banner" />
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Log In" ? <div></div> :
          <div className='input'><input type='text' placeholder="Name" /></div>}
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
      <div className='submit-container'>
        {action === "Log In" ? <div></div> : <div className='forgot-password'>Forgot Password? <span>Click Here!</span> </div>}
        <div className={action === "Log In" ? "submit gray" : "submit"} onClick={handleLoginClick}>{action}</div>
      </div>
    </div>
  );
};

export default LogIn;
