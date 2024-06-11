import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom';
function Navbar() {
  return (
    <div className='Navbar'>
        <nav>
            <div className="container">
                <h1>Text Moderation</h1>
                <ul>
                    <li>
                      <Link className='links' to='/'>Home</Link>
                    </li>
                    <li>
                      <Link className='links' to='/Feedback'>Feedback</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar