import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavBar.css';
import icon from '../assets/travel_826070.png'

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='container-fluid' style={{width:'1700px'}}>
        <div className='nav-left'>
          <Link to="/HomePage">
            <button className='btn btn-black text-white'>Home</button>
          </Link>
          <Link to='/countries'>
            <button className='btn btn-black text-white'>Discover</button>
          </Link>
          <Link to="/AboutUs">
            <button className='btn btn-black text-white'>About</button>
          </Link>  
          <Dropdown>
      <Dropdown.Toggle className='btn btn-black text-white' id="dropdown-basic">
        Destinations
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item  className='btn btn-black text-white'  as={Link} to="/OtherCountries">
          Americas
        </Dropdown.Item>
        <Dropdown.Item className='btn btn-black text-white' as={Link} to="/OtherCountries">
          Asia
        </Dropdown.Item>
        <Dropdown.Item className='btn btn-black text-white' as={Link} to="/OtherCountries">
          Caribean
        </Dropdown.Item>
        <Dropdown.Item className='btn btn-black text-white' as={Link} to="/countries">
          Europe
        </Dropdown.Item>
        <Dropdown.Item className='btn btn-black text-white' as={Link} to="/OtherCountries">
          Middle East
        </Dropdown.Item>
        <Dropdown.Item className='btn btn-black text-white' as={Link} to="/OtherCountries">
          Oceania
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
         
        </div>
        <div className='nav-center'>
          <section className='name_project'>
          <img  className='name_icon' src={icon} alt={icon}/>
            <h1>TravelTalesHub</h1>
           
          </section>
        </div>
        <div className='nav-right'>
        <Dropdown>
      <Dropdown.Toggle className='btn btn-black text-white' id="dropdown-basic">
        Follow Us
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item  className='btn btn-black text-white'  as={Link} to="https://www.facebook.com/">
          Facebook
        </Dropdown.Item>
        <Dropdown.Item className='btn btn-black text-white' as={Link} to="https://www.instagram.com/">
          Instagram
        </Dropdown.Item>
        <Dropdown.Item className='btn btn-black text-white' as={Link} to="https://twitter.com/">
          Twitter
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
          <Link to="/">
            <button className='btn btn-black text-white'>Logout</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
