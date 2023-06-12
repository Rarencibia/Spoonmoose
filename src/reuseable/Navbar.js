import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {

  return (
    <div>
        <nav id="mainNav">
          <div className='nav-bar-container'>
            <ul className='nav-bar-li'>
                  <li><Link to="/">Home</Link></li>
                  <a href='#'><li>Shop</li></a>
                  <li><Link to="/about">About Us</Link></li>
              </ul>
          </div>
        </nav>
    </div>
  )
}
