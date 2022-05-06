import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import { logout } from '../../service/LoginService';
import './NavBar.css'
import { receiveCurrentUser } from '../../actions/LoginActions';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useDispatch()
const [login, setLogin] = useState("Login")
var curUser = JSON.parse(localStorage.getItem("CurrentUser"))
const currentUserState = useSelector((state) => state)


  useEffect(() => {
     curUser = JSON.parse(localStorage.getItem("CurrentUser"))
    if(curUser){
      console.log(" USE EFFECT CurrentUser", (curUser))
      setLogin("Logout ")

  
    }  
      else{
      setLogin("Login")
      console.log("No User Logged In")
    }
    
  }, [currentUserState])


  return (
    <div className="Navbar">
      <span className='nav-logo'>John Benson Portfolio</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href='/register'>Register</a>
        <a href='/login'>{login}</a>
        <a href='/update'>Update</a>
      </div>
      <div className={`nav-toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
      <div className='bar'>

      </div>

      </div>
    



        {/* <nav className='nav-cl'>
            <ul className='ul-cl'>
                <li className='li-cl'>
                    <Link className='Link-cl'  onClick={() => logout(dispatch, receiveCurrentUser)} to='/login'>{login}</Link>
                </li>
                <li className='li-cl'>
                    <Link className='Link-cl'  to='/register'>Register</Link>
                </li>
                <li className='li-cl'>
                    <Link className='Link-cl' id='update-nav'  to='/update'>Update</Link>
                </li>

            </ul>
           
            </nav> */}
    </div>
  )
}
