import React, {useState} from 'react';
import './LogIn.css';

const LogIn = () => {

    const [action, setAction] = useState("Log In");

    return (
        <div className='container'>
            <img src="./login-banner.jpg" alt="banner"/>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action === "Log In" ? <div></div> :
                <div className='input'><input type='text' placeholder="Name"/></div>}
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
                <div className={action === "Log In" ? "submit gray" : "submit"} onClick={() => { setAction("Log In") }}>Log In</div>
            </div>
        </div>
    )
}

export default LogIn;