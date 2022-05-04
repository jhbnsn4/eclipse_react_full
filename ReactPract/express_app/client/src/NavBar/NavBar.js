import React from 'react'
import { Link } from 'react-router-dom';
import Login from '../Login/Login';


export default function NavBar() {
  return (
    <div>
        <nav>
            <ul>
                <li>
                    <Link to='/login'>Login</Link>
                </li>
                <li>
                    <Link to='/register'>Register</Link>
                </li>
                
            </ul>
            </nav>
    </div>
  )
}
