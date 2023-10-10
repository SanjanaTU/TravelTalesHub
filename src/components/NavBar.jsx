import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

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
          <div className="dropdown">
            <button className="btn btn-black text-white dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Follow Us
            </button>
          
          </div>
          <Link to="/Login">
            <button className='btn btn-black text-white'>Login</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
