import React, { useState } from "react";
import "../Pages/Login.css";
import { Link } from "react-router-dom";
import travel from '../assets/travel_826070.png'


function FormStructor() {
  return (
   
    <div className="body">
     <img src={travel} alt="login" className="login_img" style={{ position: 'absolute', top: 0, left: 0, height: '50px', width: '50px' }} />
    <div className="traveltaleshub" style={{ color:'blue', position: 'absolute', top: 0, left:50, height: '100px', width: '100px' }}><h1>TravelTalesHub</h1></div>
    <div className="main">
     
        <input type="checkbox" id="chk" aria-hidden="true" />
        <div className="signup">
          <form>
            <label className="label" for="chk" aria-hidden="true">
              Sign up
            </label>
            <input
              className="input"
              style={{ width: "60%" }}
              type="text"
              name="txt"
              placeholder="User name"
              required=""
            />
            <input
              className="input"
              type="email"
              name="email"
              placeholder="Email"
              required=""
            />
            <input
              className="input"
              type="Password"
              name="pswd"
              placeholder="Password"
              required=""
            />
            <Link to={`/HomePage`}>
              <button
                style={{ cursor: "pointer" }}
                className="button"
                Link
                to={"/HomePage"}
              >
                Sign up
              </button>
            </Link>
          </form>
        </div>
        <div className="login">
          <form>
            <label className="label" for="chk" aria-hidden="true">
              Login
            </label>
            <input
              className="input"
              type="email"
              name="email"
              placeholder="Email"
              required=""
            />
            <input
              className="input"
              type="Password"
              name="pswd"
              placeholder="Password"
              required=""
            />
            <Link to={`/HomePage`}>
              <button
                style={{ cursor: "pointer" }}
                className="button"
                Link
                to={"/HomePage"}
              >
                Log in
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>

  );
}

export default FormStructor;
