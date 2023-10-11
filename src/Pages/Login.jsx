import React, { useState } from 'react';
import '../Pages/Login.css'
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function FormStructor() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className='fade-in'>
      <div>
      <img src='../assets/img.jpg'/>
      </div>
    <div className={`form-structor ${isLogin ? '' : 'slide-up'}`}>
      <div className="signup">
        <h2 className="form-title" id="signup">
          <span>or</span> {isLogin ? 'Sign up' : 'Log in'}
        </h2>
        <div className="form-holder">
          <input type="text" className="input" placeholder="Name" />
          <input type="email" className="input" placeholder="Email" />
          <input type="password" className="input" placeholder="Password" />
        </div>
        <Link to="/HomePage"> {/* Link to Home Page */}
          <button className="submit-btn">{isLogin ? 'Sign up' : 'Log in'}</button>
        </Link>
      </div>
      <div className={`login ${isLogin ? 'slide-up' : ''}`}>
        <div className="center">
          <h2 className="form-title" id="login">
            <span>or</span> {isLogin ? 'Log in' : 'Sign up'}
          </h2>
          <div className="form-holder">
            <input type="email" className="input" placeholder="Email" />
            <input type="password" className="input" placeholder="Password" />
          </div>
          <Link to="/HomePage"> {/* Link to Home Page */}
            <button className="submit-btn">{isLogin ? 'Log in' : 'Sign up'}</button>
          </Link>
        </div>
      </div>
      <button onClick={toggleForm} className="toggle-btn">
        {isLogin ? 'Switch to Log in' : 'Switch to Sign up'}
      </button>
    </div>
    </div>
  );
}

export default FormStructor;










