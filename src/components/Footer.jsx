import React from 'react';
import './Footer.css'; 
import icon from '../assets/travel_826070.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer-main' style={{width:'100%'}}>
    
          <div className="footer-logo">
            <img src={icon} alt="Company Logo" />
            <h2>TravelTalesHub</h2>
          </div>

          <div className="footer-navigation">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/AboutUs">About Us</Link>
              </li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>Contact Us</h3>
            <p>Netherlands, 1811NG</p>
            <p>Email: TravelTalesHub@company.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
       

        <div className="footer-social">
          <h3>Follow Us</h3>
          <ul>
            <li>
              <Link to="https://www.facebook.com/">Facebook</Link>
            </li>
            <li>
              <Link to="https://www.instagram.com/">Instagram</Link>
            </li>
            <li>
              <Link to="https://twitter.com/">Twitter</Link>
            </li>
          </ul>
        </div>

    </div>
  );
};

export default Footer;
