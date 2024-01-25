import React from 'react';
import './Teleconsult.css';

function Teleconsult() {
  return (
    <div className='teleconsult-container'>
      <img src="./teleconsult.jpg" alt="teleconsult" />
      <h1>Teleconsult</h1>
      <p>
        For concerns that are not urgent, and patient is not very sick.
        <br/>For patients that are still relatively active, eating well, have not been sick for an extended period of time (no more than 2 days), or have been seen for this concern before at our clinic
        <br/>Not all consults can be done virtually. Cases that may need laboratory work and/or imaging are best seen as in-clinic consults.
        <br/>F2F consult is preferred, for a more accurate assessment and recommendation.
      </p>
    </div>


  );
}

export default Teleconsult;
