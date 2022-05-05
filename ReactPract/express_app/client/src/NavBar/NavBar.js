import React from 'react'
import { Link } from 'react-router-dom';
import './NavBar.css'

export default function NavBar() {
  return (
    <div>
        <nav className='nav-cl'>
            <ul className='ul-cl'>
                <li className='li-cl'>
                    <Link className='Link-cl' to='/login'>Login</Link>
                </li>
                <li className='li-cl'>
                    <Link className='Link-cl'  to='/register'>Register</Link>
                </li>
                
            </ul>
            </nav>
    </div>
  )
}
