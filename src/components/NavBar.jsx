import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavBar.css';

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='container-fluid'>
        <div className='nav-left'>
          <Link to="/">
            <button className='btn btn-black text-white'>Home</button>
          </Link>
          <Link to='/countries'>
            <button className='btn btn-black text-white'>Discover</button>
          </Link>
          <Link to="/About">
            <button className='btn btn-black text-white'>About</button>
          </Link>
        </div>
        <div className='nav-center'>
          <section className='name_project'>
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
          <Link to="/Login">
            <button className='btn btn-black text-white'>Login</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
